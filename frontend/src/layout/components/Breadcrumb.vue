<template>
    <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
        <template v-for="(item,index) in breadList" :key="index">
            <el-breadcrumb-item :to="{ path: item.path }" v-if="item.name && item.meta.title && item.path !== '/index'">
                {{ item.meta.title }}
            </el-breadcrumb-item>
        </template>
    </el-breadcrumb>
</template>
  
<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { computed } from '@vue/reactivity';
const route = useRoute()
const breadList = computed({
    get: () => {
        return route.matched
    }
})
</script> 

<style scoped>
.el-breadcrumb{
    padding: 20px;
    box-sizing: border-box;
}
</style>