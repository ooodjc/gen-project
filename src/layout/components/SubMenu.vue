<template>
    <el-sub-menu :index="item.name" v-if="item.children && item.children.length > 0">
        <template #title>
        <el-icon>
            <component :is="item.meta.icon" />
        </el-icon>
        <span>{{ item.meta.title }}</span>
        </template>
        <el-menu-item-group>
            <SubMenuVue v-for="subItem in item.children" :item="subItem" :key="subItem.name" />
        </el-menu-item-group>
    </el-sub-menu>

    <el-menu-item :index="item.name" v-else>
        <el-icon>
            <component :is="item.meta.icon"></component>
        </el-icon>
        <template #title>{{ item.meta.title }}</template>
    </el-menu-item>
</template>
<script setup>
import SubMenuVue from './SubMenu.vue'
const props = defineProps({
    item: {
        type: Object,
        default: () => {}
    }
})
</script>