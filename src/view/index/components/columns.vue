<template>
  <el-table :data="modelValue" style="width: 100%">
    <el-table-column prop="columnName" label="字段" width="120"></el-table-column>
    <!-- 页面名称 -->
    <el-table-column prop="comment" label="字段名" width="120">
      <template #default="{ row }">
        <el-input v-model="row.comment"></el-input>
      </template>
    </el-table-column>
    <!-- 是否显示 -->
    <el-table-column prop="isShow" label="是否显示">
      <template #default="{ row }">
        <el-switch v-model="row.isShow"></el-switch>
      </template>
    </el-table-column>
    <!-- 是否布尔转换 -->
    <el-table-column prop="isBoolean" label="布尔转换">
      <template #default="{ row }">
        <el-switch v-model="row.isBoolean"></el-switch>
      </template>
    </el-table-column>
    <!-- 是否显示在编辑弹窗 -->
    <el-table-column prop="isEdit" label="编辑显示">
      <template #default="{ row }">
        <el-switch v-model="row.isEdit"></el-switch>
      </template>
    </el-table-column>
    <!-- 是输入框 -->
    <el-table-column prop="isInput" label="输入框">
      <template #default="{ row }">
        <el-switch v-model="row.isInput"></el-switch>
      </template>
    </el-table-column>
    <!-- 是下拉框 -->
    <el-table-column prop="isSelect" label="下拉框">
      <template #default="{ row }">
        <el-switch v-model="row.isSelect"></el-switch>
      </template>
    </el-table-column>
    <!-- 是开关 -->
    <el-table-column prop="isSwitch" label="开关">
      <template #default="{ row }">
        <el-switch v-model="row.isSwitch"></el-switch>
      </template>
    </el-table-column>
    <!-- 是日期 -->
    <el-table-column prop="isDate" label="日期">
      <template #default="{ row }">
        <el-switch v-model="row.isDate"></el-switch>
      </template>
    </el-table-column>
    <!-- 是日期时间 -->
    <el-table-column prop="isDateTime" label="日期时间">
      <template #default="{ row }">
        <el-switch v-model="row.isDateTime"></el-switch>
      </template>
    </el-table-column>
    <!-- 是图片 -->
    <el-table-column prop="isImage" label="图片">
      <template #default="{ row }">
        <el-switch v-model="row.isImage"></el-switch>
      </template>
    </el-table-column>
    <!-- 是文件 -->
    <el-table-column prop="isFile" label="文件">
      <template #default="{ row }">
        <el-switch v-model="row.isFile"></el-switch>
      </template>
    </el-table-column>
    <!-- 是富文本 -->
    <el-table-column prop="isEditor" label="富文本">
      <template #default="{ row }">
        <el-switch v-model="row.isEditor"></el-switch>
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