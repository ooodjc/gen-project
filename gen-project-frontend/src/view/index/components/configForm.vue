<template>
    <el-form inline :model="modelValue" label-width="100">
      <el-form-item label="数据库名称">
        <el-input v-model="modelValue.database" disabled></el-input>
      </el-form-item>
      <!-- 标题 -->
      <el-form-item label="标题">
          <el-input v-model="modelValue.title"></el-input>
      </el-form-item>
      <!-- 是否动态路由 -->
      <el-form-item label="动态路由">
        <el-switch v-model="modelValue.dynamicRouter"></el-switch>
      </el-form-item>
    </el-form>
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

const { emit } = defineEmits(["update:modelValue"]);
</script>