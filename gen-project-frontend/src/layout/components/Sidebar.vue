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
      <SubMenuVue v-for="item in userRoutes" :item="item" :key="item.name" />
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
import SubMenuVue from './SubMenu.vue'
const route = useRoute()
const router = useRouter()
const store = useStore()

const onRoutes = computed(() => route.name)
const collapse = computed(() => store.state.isCollapse)
//用户路由
const userRoutes = router.options.routes.filter(item => item.name == 'Layout')[0].children
</script>

<style>
  .el-menu-vertical{
    height: 100vh;
  }
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
  }
</style>
