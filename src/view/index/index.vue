<template>
  <div>
    <ConfigForm v-model="data.config" />
    <Tables v-model="data.config" @editChange="edit" />
    <el-dialog title="表格信息" v-model="data.dialogTableVisible">
      <!-- 字段 -->
      <Columns v-model="data.editList" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="data.dialogTableVisible = false">取 消</el-button>
        <el-button type="primary" @click="data.dialogTableVisible = false">确 定</el-button>
      </span>
    </el-dialog>
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
</script>