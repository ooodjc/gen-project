<template>
    <el-table :data="modelValue.tables" style="width: 100%">
      <el-table-column prop="name" label="表名" width="120" />
      <!-- 页面名称 -->
      <el-table-column prop="pageName" label="页面名称" width="200">
        <template #default="{ row }">
          <el-input v-model="row.pageName"></el-input>
        </template>
      </el-table-column>
      <!-- 是否显示侧边菜单 -->
      <el-table-column prop="isMenu" label="菜单显示">
        <template #default="{ row }">
          <el-switch v-model="row.isMenu"></el-switch>
        </template>
      </el-table-column>
      <!-- 是否动态路由 -->
      <el-table-column prop="isDynamicRoute" label="动态路由">
        <template #default="{ row }">
          <el-switch v-model="row.isDynamicRoute"></el-switch>
        </template>
      </el-table-column>
      <!-- 是否生成页面 -->
      <el-table-column prop="isView" label="生成页面">
        <template #default="{ row }">
          <el-switch v-model="row.isView"></el-switch>
        </template>
      </el-table-column>
      <!-- 是否生成接口 -->
      <el-table-column prop="isApi" label="生成接口">
        <template #default="{ row }">
          <el-switch v-model="row.isApi"></el-switch>
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
      <!-- 是否显示分页 -->
      <el-table-column prop="isPagination" label="分页">
        <template #default="{ row }">
          <el-switch v-model="row.isPagination"></el-switch>
        </template>
      </el-table-column>
      <!-- 是否显示序号 -->
      <el-table-column prop="isIndex" label="序号">
        <template #default="{ row }">
          <el-switch v-model="row.isIndex"></el-switch>
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

const emit = defineEmits(["update:modelValue", "editChange"]);

const data = reactive({
  //表格初始化状态
  tableInit: false,
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
    return {
      ...item,
      isMenu: true,
      isDynamicRoute: true,
      isView: true,
      isApi: true,
      isEdit: true,
      isDelete: true,
      isAdd: true,
      isSearch: true,
      isPagination: true,
      isIndex: true,
    };
  });
  data.tableInit = true;
  console.log("表格初始化完成");
};

//编辑
const edit = (row) => {
  emit("editChange", row);
};
</script>