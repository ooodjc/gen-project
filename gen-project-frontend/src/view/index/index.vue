<template>
  <div class="content" :style="{ height: data.winHeight +'px' }">
    <ConfigForm v-model="data.config" />
    <Tables v-model="data.config" @editChange="edit" />
    <el-dialog title="表格信息" v-model="data.dialogTableVisible">
      <!-- 字段 -->
      <Columns v-model="data.editList" />
    </el-dialog>
    <!-- 生成按钮，屏幕水平居中 -->
    <div class="text-center margin-top-20">
      <el-button type="primary" size="medium" @click="push">生成</el-button>
    </div>
  </div>

  <!-- 弹窗表格 -->
  
</template>

<script setup>
import api from '@/utils/api'
import ConfigForm from './components/configForm.vue';
import Columns from './components/columns.vue';
import Tables from './components/tables.vue';

const data = reactive({
  config: {
    database: 'test',
    tables: [],
  },
  dialogTableVisible: false,  // 弹窗表格
  editList: [],              // 编辑列表
  winHeight: document.documentElement.clientHeight -150, // 屏幕高度
})

onMounted( async() => {
  api.allTableInfo().then(res => {
    console.log(res)
    data.config.database = res.data.databaseName
    data.config.tables = res.data.tableInfos
  })
})

// 编辑
const edit = (row) => {
  console.log(row)
  data.dialogTableVisible = true
  data.editList = row.columns
}

const push = () => {
  console.log(data.config)
  /* api.generate(data.config).then(res => {
    console.log(res)
  }) */
}
</script>

<style lang="scss" scoped>
.content{
  overflow-y: auto;
}
.text-center{
  text-align: center;
}
.margin-top-20{
  margin-top: 20px;
}
</style>