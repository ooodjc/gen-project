<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <Sidebar />
      </el-aside>
      <el-container>
        <el-header>
          <Navbar />
        </el-header>
        <el-main>
          <AppMain />
        </el-main>
      </el-container>
    </el-container>
  </div>

</template> 

<script setup>
import AppMain from './components/AppMain.vue';
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<style lang="scss" scoped>
.el-aside{
  width: auto;
}
.el-main{
  background-color: #ecf5ff;
}
.el-header{
  height: auto;
  background-color: #fff; 
  border-bottom: 1px solid #dfdfdf;
}
</style>
