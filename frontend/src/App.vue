<template>
  <div class="app">
    <div class="title">项目生成器</div>
    <TableForm v-model="data.formData" />
    <TableList :dataList="data.tableListData" @change="setTableList" />
    <tableInfoList :dataList="data.tableInfos" />
    <div class="btn-row">
      <el-button type="primary" @click="gen">生成</el-button>
    </div>
  </div>
</template>

<script setup name="index">
import TableList from '@/components/tableList.vue';
import api from '@/utils/api'
import TableForm from '@/components/tableForm.vue';
import tableInfoList from './components/tableInfoList.vue';

const data = reactive({
  databaseName: "",
  tableListData: [],
  formData: {
    databaseName: "",
    parentPackage: 'com.xsgo.demo',
    tables: [],
  },
  tableInfos: [],
})

onMounted(() => {
  getDataList()
})

// 获取表列表
function getDataList(){
  api.allTableName().then(res => {
    if(res.errno === 0){
      data.formData.databaseName = res.data.databaseName
      data.tableListData = res.data.tableNames
      res.data.tableNames.map(item => {
        data.tableInfos.push({
          tableName: item,          //表名
          tableComment: null,       //表注释
          tableFields: [],          //表字段
        })
      })
    }
  })
}

// 选择表
function setTableList(e){
  data.formData.tables = e
}

// 生成
function gen(){
  api.download(data.formData)
}
</script>

<style scoped lang="scss">
.app{
  padding: 20px;
}
.title{
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #515151;
}
.db-name{
  color: #409eff;
}
.table-form{
  width: 400px;
}
.btn-row{
  margin-top: 50px;
  display: flex;
  justify-content: center;
  .el-button{
    width: 150px;
  }
}
</style>