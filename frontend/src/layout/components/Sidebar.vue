<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#545c64"
      text-color="#bfcbd9"
      active-text-color="#ffd04b"
      unique-opened
      router
      class="el-menu-vertical"
    >
      <template v-for="item in sidebarList">
        <el-sub-menu :index="item.index" v-if="item.subs">
          <template #title>
            <el-icon>
              <component :is="item.icon" />
            </el-icon>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="subItem in item.subs" :index="subItem.index">{{ subItem.title }}</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>

        <el-menu-item :index="item.index" v-else>
          <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
          <template #title>{{ item.title }}</template>
        </el-menu-item>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
const route = useRoute()
const store = useStore()

const sidebarList = [
	{
		icon: 'Document',
		index: 'index',
		title: '首页',
	},
]

const onRoutes = computed(() => route.name)
const collapse = computed(() => store.state.isCollapse)
</script>

<style>
  .el-menu-vertical{
    height: 100vh;
  }
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
  }
</style>
