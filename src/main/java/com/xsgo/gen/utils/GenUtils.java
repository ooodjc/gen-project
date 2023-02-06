package com.xsgo.gen.utils;

import com.xsgo.gen.pojo.TableInfo;

import java.util.*;

public class GenUtils {
    public static List<TableInfo> columnsToContext(List<Map<String, Object>> columns){
        ArrayList<TableInfo> tableInfos = new ArrayList<>();
        for (Map<String,Object> column : columns){
            TableInfo tableInfo = new TableInfo();
            tableInfo.setColumnName(column.get("COLUMN_NAME").toString());
            tableInfo.setColumnType(column.get("DATA_TYPE").toString());
            tableInfo.setComment(column.get("COLUMN_COMMENT").toString());
            tableInfo.setJavaName(StringUtils.toCamelCase(column.get("COLUMN_NAME").toString()));
            tableInfo.setJavaType(convertType(column.get("DATA_TYPE").toString()));
            tableInfos.add(tableInfo);
        }
        return tableInfos;
    }
    public static List<Map<String,String>> tablesToContext(List<String> tables){
        ArrayList<Map<String, String>> maps = new ArrayList<>();
        for(String table : tables){
            HashMap<String, String> map = new HashMap<>();
            map.put("name", table);
            map.put("javaName", StringUtils.toCamelCase(table));
            map.put("entityName", StringUtils.toCamelCaseUp(table));
            maps.add(map);
        }
        return maps;
    }

    public static String getFileName(String template, String parentPackage, String entityName){
        //将父包转换成路径
        parentPackage = parentPackage.replace(".", "/");
        //去除无用内容
        template = template.replace(".vm", "");
        template = template.replace("vm/", "");
        //修改父包路径
        if(template.contains("parentPackage") && parentPackage.equals("")) {
            System.out.println("getFileName_err: parentPackage为空！！！");
            return null;
        }
        template = template.replace("parentPackage",parentPackage);

        if(template.contains("ControllerName") || template.contains("ServiceName")) {
            if(entityName.equals("")) {
                System.out.println(template);
                System.out.println("entityName: " + entityName);
                System.out.println("getFileName_err: entityName为空！！！");
                return null;
            }
        }
        //修改Controller文件名
        template = template.replace("ControllerName", entityName + "Controller");
        //修改Service文件名
        template = template.replace("ServiceName", entityName + "Service");
        //修改前端api文件名
        template = template.replace("requestApi", entityName + "Api");
        //修改前端页面文件夹名
        template = template.replace("viewFolderName", entityName);
        return template;
    }

    public static List<String> getTemplates(){
        ArrayList<String> templates = new ArrayList<>();
        templates.add("vm/src/main/java/parentPackage/service/ServiceName.java.vm");
        templates.add("vm/src/main/java/parentPackage/controller/ControllerName.java.vm");
        //vue
        templates.add("vm/frontend/src/utils/api/requestApi.js.vm");
        templates.add("vm/frontend/src/view/viewFolderName/index.vue.vm");
        return templates;
    }
    public static List<String> getOtherTemplates(){
        ArrayList<String> templates = new ArrayList<>();
        //后端框架模板
        templates.add("vm/pom.xml.vm");
        templates.add("vm/src/main/java/parentPackage/config/CorsConfig.java.vm");
        templates.add("vm/src/main/java/parentPackage/config/AdminInterceptor.java.vm");
        templates.add("vm/src/main/java/parentPackage/config/Interceptor.java.vm");
        templates.add("vm/src/main/java/parentPackage/utils/AdminTokenUtil.java.vm");
        templates.add("vm/src/main/java/parentPackage/utils/Respond.java.vm");
        templates.add("vm/src/main/java/parentPackage/Application.java.vm");
        //resources
        templates.add("vm/src/main/resources/application.yml.vm");
        templates.add("vm/src/main/resources/application-dev.yml.vm");
        templates.add("vm/src/main/resources/generatorConfig.xml.vm");
        //前段框架模板
        templates.add("vm/frontend/.env.development.vm");
        templates.add("vm/frontend/.env.production.vm");
        templates.add("vm/frontend/index.html.vm");
        templates.add("vm/frontend/package.json.vm");
        templates.add("vm/frontend/vite.config.js.vm");
        //src
        templates.add("vm/frontend/src/mycss.css.vm");
        templates.add("vm/frontend/src/main.js.vm");
        templates.add("vm/frontend/src/App.vue.vm");
        //src/components
        templates.add("vm/frontend/src/components/ListViewTemp.vue.vm");
        //src/layout
        templates.add("vm/frontend/src/layout/index.vue.vm");
        templates.add("vm/frontend/src/layout/components/AppMain.vue.vm");
        templates.add("vm/frontend/src/layout/components/Breadcrumb.vue.vm");
        templates.add("vm/frontend/src/layout/components/Navbar.vue.vm");
        templates.add("vm/frontend/src/layout/components/Sidebar.vue.vm");
        templates.add("vm/frontend/src/layout/components/TagsTemp.vue.vm");
        templates.add("vm/frontend/src/layout/components/UserInfo.vue.vm");
        //src/route
        templates.add("vm/frontend/src/route/index.js.vm");
        //src/store
        templates.add("vm/frontend/src/store/index.js.vm");
        //src/utils
        templates.add("vm/frontend/src/utils/index.js.vm");
        templates.add("vm/frontend/src/utils/request/index.js.vm");
        templates.add("vm/frontend/src/utils/request/request.js.vm");
        templates.add("vm/frontend/src/utils/storage/index.js.vm");
        //src/view
        templates.add("vm/frontend/src/view/index/index.vue.vm");
        templates.add("vm/frontend/src/view/login/index.vue.vm");
        templates.add("vm/frontend/src/view/mine/index.vue.vm");
        return templates;
    }

    public static List<String> getFiles(){
        ArrayList<String> files = new ArrayList<>();
        files.add("vm/frontend/public/favicon.ico");
        return files;
    }

    //数据库类型转java类型
    public static String convertType(String dataType){
        if (arraysContains(GenConstants.COLUMNTYPE_STR, dataType)){
            dataType = GenConstants.TYPE_STRING;
        }
        else if(arraysContains(GenConstants.COLUMNTYPE_TIME, dataType)){
            dataType = GenConstants.TYPE_DATE;
        }
        else if (arraysContains(GenConstants.COLUMNTYPE_INT, dataType)){
            dataType = GenConstants.TYPE_INTEGER;
        }
        else if (arraysContains(GenConstants.COLUMNTYPE_DOUBLE, dataType)){
            dataType = GenConstants.TYPE_DOUBLE;
        }
        return dataType;
    }
    /**
     * 校验数组是否包含指定值
     *
     * @param arr 数组
     * @param targetValue 值
     * @return 是否包含
     */
    public static boolean arraysContains(String[] arr, String targetValue)
    {
        return Arrays.asList(arr).contains(targetValue);
    }
}
