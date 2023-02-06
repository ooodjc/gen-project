<template>
  <TableForm v-model="data.formData" />
  <TableList :dataList="data.tableListData" @change="setTableList" />
  <TableInfoList :dataList="data.tables" @change="setTableInfos" />
  <div class="btn-row">
    <el-button type="primary" @click="gen">生成</el-button>
  </div>
</template>

<script setup name="index">
import TableList from '@/components/tableList.vue';
import api from '@/utils/api'
import TableForm from '@/components/tableForm.vue';
import TableInfoList from '@/components/tableInfoList.vue';

const data = reactive({
  databaseName: "",
  tableListData: [],
  tableList: [],
  tables: [],
  formData: {
    databaseName: "",
    parentPackage: 'com.xsgo.demo',
    tableInfos: [],
  }
})

onMounted(() => {
  getDataList()
  getAllTableInfo()
})

function getDataList(){
  api.allTableName().then(res => {
    if(res.errno === 0){
      let databaseName = Object.keys(res.data[0])[0]
      data.formData.databaseName = databaseName.replace('Tables_in_','')
      data.tableListData = res.data.map(item => item[databaseName])
    }
  })
}

function getAllTableInfo(){
  api.allTableInfo().then(res => {
    if(res.errno === 0){
      data.formData.databaseName = res.data.databaseName
      data.tables = res.data.tableInfos
    }
  })
}

function setTableList(e){
  data.tableList = e
}

function gen(){
  api.download({
    databaseName: data.formData.databaseName,
    tables: data.tableList,
    parentPackage: data.formData.parentPackage,
    fileName: "project.zip",
  })
}

function setTableInfos(e){
  console.log(e)
  data.formData.tableInfos = e
}
</script>

<style scoped lang="scss">
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