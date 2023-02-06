package com.xsgo.gen.service;

import com.baomidou.mybatisplus.extension.toolkit.SqlRunner;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class TableService {
    //查询数据表详情
    public List<Map<String, Object>> tableInfos(String databaseName , String tableName){
        String sql = String.format("select COLUMN_NAME, DATA_TYPE, COLUMN_COMMENT from information_schema.COLUMNS where TABLE_SCHEMA = '%s' and TABLE_NAME = '%s'", databaseName, tableName);
        List<Map<String, Object>> maps = SqlRunner.db().selectList(sql);
        return maps;
    }

    //获取所有表名
    public List<Map<String, Object>> allTableName(){
        String sql = "show tables";
        List<Map<String, Object>> mapList = SqlRunner.db().selectList(sql);
        return mapList;
    }

    //获取当前数据库名
    public String databaseName(){
        String sql = "select database()";
        Map<String, Object> map = SqlRunner.db().selectOne(sql);
        return map.get("database()").toString();
    }
}
