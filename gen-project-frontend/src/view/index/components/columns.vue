<template>
  <el-table :data="modelValue" style="width: 100%">
    <el-table-column prop="columnName" label="字段" width="120"></el-table-column>
    <!-- 页面名称 -->
    <el-table-column prop="comment" label="字段名">
      <template #default="{ row }">
        <el-input v-model="row.comment"></el-input>
      </template>
    </el-table-column>
    <!-- 是否显示 -->
    <el-table-column prop="isShow" label="表格显示">
      <template #default="{ row }">
        <el-switch v-model="row.isShow"></el-switch>
      </template>
    </el-table-column>
    <!-- 表格类型 -->
    <el-table-column prop="tableType" label="表格类型">
      <template #default="{ row }">
        <el-select v-model="row.tableType" placeholder="请选择">
          <el-option label="默认" value=""></el-option>
          <el-option label="图片" value="image"></el-option>
          <el-option label="日期" value="date"></el-option>
          <el-option label="日期时间" value="datetime"></el-option>
        </el-select>
      </template>
    </el-table-column>
    <!-- 添加表单中显示 -->
    <el-table-column prop="isAdd" label="可添加">
      <template #default="{ row }">
        <el-switch v-model="row.isAdd"></el-switch>
      </template>
    </el-table-column>
    <!-- 可编辑 -->
    <el-table-column prop="isEdit" label="可编辑">
      <template #default="{ row }">
        <el-switch v-model="row.isEdit"></el-switch>
      </template>
    </el-table-column>
    <!-- 组件类型 -->
    <el-table-column prop="componentType" label="表单类型">
      <template #default="{ row }">
        <el-select v-model="row.componentType" placeholder="请选择">
          <el-option label="输入框" value=""></el-option>
          <el-option label="下拉框" value="select"></el-option>
          <el-option label="单选框" value="radio"></el-option>
          <el-option label="开关" value="switch"></el-option>
          <el-option label="日期" value="date"></el-option>
          <el-option label="日期时间" value="datetime"></el-option>
          <el-option label="图片" value="image"></el-option>
        </el-select>
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

const emit = defineEmits(["update:modelValue"]);

//监听modelValue变化并触发update:modelValue事件
watch(
  props.modelValue,
  (val) => {
    emit("update:modelValue", val);
  }
);
</script>