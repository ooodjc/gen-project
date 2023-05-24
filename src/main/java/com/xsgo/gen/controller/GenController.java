package com.xsgo.gen.controller;

import com.xsgo.gen.pojo.GenContext;
import com.xsgo.gen.pojo.TableInfo;
import com.xsgo.gen.service.TableService;
import com.xsgo.gen.utils.GenUtils;
import com.xsgo.gen.utils.Respond;
import com.xsgo.gen.utils.VelocityUtils;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("gen")
public class GenController {
    @Autowired
    private TableService tableService;

    /*@RequestMapping("download")
    public Object gen(){
        //获取表字段信息
        List<Map<String, Object>> maps = tableService.TableInfos("manage", "user_info");
        TableUtils tableUtils = new TableUtils();
        List<TableInfo> tableInfos = tableUtils.MapsToTableInfos(maps);
        return tableInfos;
    }*/

    @RequestMapping("/download")
    public void download(HttpServletResponse response,@RequestBody GenContext c) throws IOException {
        byte[] data = VelocityUtils.downloadCode(c);
        ResZip(response, data);
    }

    @RequestMapping("/downloadV2")
    public void downloadV2(HttpServletResponse response,@RequestBody Map<String,Object> map) throws IOException {
        byte[] data = VelocityUtils.downloadCode(map);
        ResZip(response, data);
    }

    /*
     * [{"Tables_in_manage":"animal_class"}]
     * */
    @RequestMapping("allTableName")
    public Respond allTableName(){
        Respond respond = new Respond();
        //获取数据库名称
        String databaseName = tableService.databaseName();
        //获取所有表名
        List<Map<String, Object>> mapList = tableService.allTableName();
        //遍历mapList，取出表名
        List<String> tableNames = new ArrayList<>();
        for (Map<String, Object> map : mapList) {
            String name = map.get("Tables_in_" + databaseName).toString();
            tableNames.add(name);
        }
        HashMap<String, Object> data = new HashMap<>();
        data.put("databaseName", databaseName);
        data.put("tableNames", tableNames);
        return respond.ok(data);
    }

    @RequestMapping("allTableInfo")
    public Respond allTableInfo(){
        Respond respond = new Respond();
        String databaseName = tableService.databaseName();
        List<Map<String, Object>> allTableName = tableService.allTableName();

        ArrayList<Map<String, Object>> allTable = new ArrayList<>();
        for(Map<String,Object> tableNameMap : allTableName){
            HashMap<String, Object> map = new HashMap<>();
            String tableName =  tableNameMap.get("Tables_in_" + databaseName).toString();
            List<Map<String, Object>> tableInfos = tableService.tableInfos(databaseName, tableName);
            List<TableInfo> columns = GenUtils.columnsToContext(tableInfos);
            map.put("name", tableName);
            map.put("columns", columns);
            allTable.add(map);
        }

        HashMap<String, Object> data = new HashMap<>();
        data.put("databaseName", databaseName);
        data.put("tableInfos", allTable);
        return respond.ok(data);
    }

    /**
     * 生成zip文件
     */
    private void ResZip(HttpServletResponse response, byte[] data) throws IOException {
        response.reset();
        response.setHeader("Content-Disposition", "attachment; filename=\"fun.zip\"");
        response.addHeader("Content-Length", "" + data.length);
        response.setContentType("application/octet-stream; charset=UTF-8");
        response.setHeader("Access-Control-Allow-Origin","*");
        response.addHeader("Access-Control-Expose-Headers", "Content-Disposition");
        IOUtils.write(data, response.getOutputStream());
    }
}
