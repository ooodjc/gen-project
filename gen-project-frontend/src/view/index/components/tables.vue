<template>
    <el-table :height="data.tableHeight" :data="modelValue.tables" @selection-change="handleSelectionChange" style="width: 100%">
      <!-- 多选 -->
      <el-table-column type="selection" width="55" />
      <el-table-column type="index" width="50" />
      <el-table-column prop="name" label="表名" width="120" />
      <!-- 页面名称 -->
      <el-table-column prop="pageName" label="页面名称" width="200">
        <template #default="{ row }">
          <el-input v-model="row.pageName"></el-input>
        </template>
      </el-table-column>
      <!-- 是否显示侧边菜单 -->
      <el-table-column prop="isHidden" label="侧边隐藏">
        <template #default="{ row }">
          <el-switch v-model="row.isHidden"></el-switch>
        </template>
      </el-table-column>
      <!-- 是否显示序号 -->
      <el-table-column prop="isIndex" label="序号">
        <template #default="{ row }">
          <el-switch v-model="row.isIndex"></el-switch>
        </template>
      </el-table-column>
      <!-- 是否多选 -->
      <el-table-column prop="isSelection" label="多选">
        <template #default="{ row }">
          <el-switch v-model="row.isSelection"></el-switch>
        </template>
      </el-table-column>
      <!-- 是否显示编辑按钮 -->
      <el-table-column prop="isEdit" label="编辑按钮">
        <template #default="{ row }">
          <el-switch v-model="row.isEdit"></el-switch>
        </template>
      </el-table-column>
      <!-- 是否显示删除按钮 -->
      <el-table-column prop="isDelete" label="删除按钮">
        <template #default="{ row }">
          <el-switch v-model="row.isDelete"></el-switch>
        </template>
      </el-table-column>
      <!-- 是否显示添加按钮 -->
      <el-table-column prop="isAdd" label="添加按钮">
        <template #default="{ row }">
          <el-switch v-model="row.isAdd"></el-switch>
        </template>
      </el-table-column>
      <!-- 是否显示搜索 -->
      <el-table-column prop="isSearch" label="搜索">
        <template #default="{ row }">
          <el-switch v-model="row.isSearch"></el-switch>
        </template>
      </el-table-column>
      <!-- 操作，编辑、删除按钮，浮动显示 -->
      <el-table-column label="操作" width="200" fixed="right">
        <template #default="{ row }">
          <el-button type="primary" size="mini" @click="edit(row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
</template>

<script setup>
import { init } from 'events';
import { onMounted } from 'vue';

const props = defineProps({
  //v-model
  modelValue: {
    type: Object,
    default: () => {
      return {};
    },
  },
});

const emit = defineEmits(["update:modelValue", "editChange", "selectionChange"]);

const data = reactive({
  //表格初始化状态
  tableInit: false,
  tableHeight: document.documentElement.clientHeight -300, // 屏幕高度
});

//监听modelValue变化并触发update:modelValue事件
watch(
  props.modelValue,
  (val) => {
    data.tableInit ? null : tableInit();
    emit("update:modelValue", val);
  }
);

const tableInit = () => {
  props.modelValue.tables = props.modelValue.tables.map((item) => {
    let data = {
      ...item,
      isHidden: false,
      isDynamicRoute: true,
      isView: true,
      isApi: true,
      isEdit: true,
      isDelete: true,
      isAdd: true,
      isSearch: true,
      isIndex: true,
      isSelection: true,
      entityName: toHump(item.name),
    };
    data.columns = data.columns.map((item) => {
      return {
        ...item,
        isShow: true,
        componentType: "input",
      };
    });
    return data;
  });
  data.tableInit = true;
  console.log("表格初始化完成");
};

//编辑
const edit = (row) => {
  emit("editChange", row);
};

//将下划线命名转为大驼峰命名,如：user_name => UserName
const toHump = (name) => {
  //将首字母转为大写
  name = name.substring(0, 1).toUpperCase() + name.substring(1);
  return name.replace(/\_(\w)/g, function (all, letter) {
    return letter.toUpperCase();
  });
};

const handleSelectionChange = (val) => {
  emit("selectionChange", val);
};
</script>