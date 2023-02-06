package com.xsgo.gen.utils;

import com.xsgo.gen.pojo.GenContext;
import com.xsgo.gen.pojo.TableInfo;
import com.xsgo.gen.service.TableService;
import org.apache.velocity.Template;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.Velocity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.apache.commons.io.IOUtils;
import org.springframework.core.io.ClassPathResource;

import java.io.*;
import java.util.*;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

/**
 * @author MrDJun 2020/10/21
 */
public class VelocityUtils {
    private final static Logger log = LoggerFactory.getLogger(VelocityUtils.class);

    /*public static String previewCode() {
        initVelocity();
        TableInfo tableInfo = new TableInfo();
        tableInfo.setColumnName("ooodjc");
        tableInfo.setDataType("String");
        VelocityContext context = VelocityUtils.prepareContext(tableInfo);
        StringWriter sw = new StringWriter();
        Template tpl = Velocity.getTemplate("vm/xml/article.xml.vm", "UTF-8");
        tpl.merge(context, sw);
        return sw.toString();
    }*/

    public static byte[] downloadCode(GenContext c) {
        TableService tableService = new TableService();
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        ZipOutputStream zip = new ZipOutputStream(outputStream);
        for (String table : c.getTables()) {
            List<Map<String, Object>> tableInfos = tableService.tableInfos(c.getDatabaseName(), table);
            List<TableInfo> columns = GenUtils.columnsToContext(tableInfos);
            VelocityContext context = makeContext(c, table, columns);
            generatorCode( zip, context);
        }
        VelocityContext context = makeContext(c);
        generatorCode(zip, context);
        staticResourcesToZip(zip);
        IOUtils.closeQuietly(zip);
        return outputStream.toByteArray();
    }

    //非文本文件添加到zip
    public static void staticResourcesToZip(ZipOutputStream zip) {
        for(String filePath : GenUtils.getFiles()){
            try {
                ClassPathResource resourceFile = new ClassPathResource(filePath);
                // 添加到zip
                zip.putNextEntry(new ZipEntry(GenUtils.getFileName(filePath,"","")));
                IOUtils.write(IOUtils.toByteArray(resourceFile.getInputStream()), zip);
                zip.flush();
                zip.closeEntry();
            } catch (IOException e) {
                log.error("渲染模板失败：{0}", e);
            }
        }
    }

    public static void generatorCode(ZipOutputStream zip, VelocityContext context) {
        initVelocity();
        List<String> templates = context.containsKey("entityName") ? GenUtils.getTemplates():GenUtils.getOtherTemplates();
        String entityName = context.containsKey("entityName") ? context.get("entityName").toString() : "";
        String parentPackage = context.get("parentPackage").toString();
        for(String template : templates){
            StringWriter sw = new StringWriter();
            Template tpl = Velocity.getTemplate(template, "UTF-8");
            tpl.merge(context, sw);
            try {
                // 添加到zip
                zip.putNextEntry(new ZipEntry(GenUtils.getFileName(template, parentPackage, entityName)));
                IOUtils.write(sw.toString(), zip, "UTF-8");
                IOUtils.closeQuietly(sw);
                zip.flush();
                zip.closeEntry();
            } catch (IOException e) {
                log.error("渲染模板失败：{0}", e);
            }
        }

    }

    public static VelocityContext makeContext(GenContext c, String table, List<TableInfo> columns){
        VelocityContext context = new VelocityContext();
        context.put("dbName", c.getDatabaseName());
        context.put("parentPackage", c.getParentPackage());
        context.put("entityName", StringUtils.indexUp(StringUtils.toCamelCase(table)));
        context.put("columns", columns);
        return context;
    }

    public static VelocityContext makeContext(GenContext c){
        VelocityContext context = new VelocityContext();
        String[] split = c.getParentPackage().split("\\.");
        String groupId = c.getParentPackage().replace("." + split[split.length -1], "");
        String artifactId = split[split.length -1];
        List<Map<String, String>> tableMaps = GenUtils.tablesToContext(c.getTables());
        context.put("groupId", groupId);
        context.put("artifactId", artifactId);
        context.put("databaseName", c.getDatabaseName());
        context.put("parentPackage", c.getParentPackage());
        context.put("tables", tableMaps);
        return context;
    }

    public static void initVelocity() {
        Properties p = new Properties();
        try {
            // 加载classpath目录下的vm文件
            p.setProperty("file.resource.loader.class", "org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader");
            // 定义字符集
            p.setProperty(Velocity.ENCODING_DEFAULT, "UTF-8");
            p.setProperty(Velocity.OUTPUT_ENCODING, "UTF-8");
            // 初始化Velocity引擎，指定配置Properties
            Velocity.init(p);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
