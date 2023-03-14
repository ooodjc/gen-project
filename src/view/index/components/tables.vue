<template>
    <el-table :data="modelValue.tables" style="width: 100%">
      <el-table-column prop="name" label="表名"></el-table-column>
      <!-- 页面名称 -->
      <el-table-column prop="pageName" label="页面名称">
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
      <!-- 编辑,删除 -->
      <el-table-column label="操作" width="200">
        <template #default="{ row }">
          <el-button type="primary" size="mini" @click="edit(row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
</template>

<script setup>
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

//监听modelValue变化并触发update:modelValue事件
watch(
  props.modelValue,
  (val) => {
    emit("update:modelValue", val);
  }
);

//编辑
const edit = (row) => {
  emit("editChange", row);
};
</script>