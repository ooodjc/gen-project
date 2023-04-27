<template>
    <div class="table-info-list">
        <el-table 
        :data="props.dataList"
        border
        height="200"
        @selection-change="handleSelectionChange"
        >
            <el-table-column type="selection" width="55" />
            <el-table-column type="index" label="序号" width="60" />
            <el-table-column label="表名" prop="tableName" width="180" />
        </el-table>
    </div>

    <!-- 数据表列表弹窗 -->
    <el-dialog title="数据表列表" v-model="data.isAddDialog">
        <el-table
        :data="data.tableListData"
        border
        height="200"
        @selection-change="handleSelectionChange"
        >
            <el-table-column type="selection" width="55" />
            <el-table-column type="index" label="序号" width="60" />
            <el-table-column label="表名" prop="name" width="180" />
        </el-table>
        <span slot="footer" class="dialog-footer">
            <el-button @click="data.isAddDialog = false">取 消</el-button>
            <el-button type="primary" @click="addLableInfo">确 定</el-button>
        </span>
    </el-dialog>

    <!-- 编辑弹窗 -->
    <el-dialog title="编辑" v-model="data.dialogVisible">
        <!-- 多选表格，可直接编辑 -->
        <el-table
        :data="data.editInfo"
        border
        >
            <el-table-column type="index" label="序号" width="60" />
            <el-table-column label="字段名" prop="name" width="180"></el-table-column>
            <el-table-column label="字段类型" prop="type" width="180"></el-table-column>
            <el-table-column label="字段注释" prop="comment" width="180"></el-table-column>
        </el-table>
        <span slot="footer" class="dialog-footer">
            <el-button @click="data.dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="updateLableInfo">确 定</el-button>
        </span>
    </el-dialog>
</template>
<script setup>
//vue3 props
const props = defineProps({
    dataList: { type: Array, required: false },
})

const emit = defineEmits(["change"])

const data = reactive({
    multipleSelection: [],  //表格多选的数据
    dialogVisible: false,   //编辑弹窗
    editInfo: [],           //编辑弹窗表格数据
})
//表格多选回调
function handleSelectionChange(val){
    data.multipleSelection = val
    emit("change",val)
}
//修改表格数据
function edit(row){
    console.log(row)
}

function updateLableInfo(){
    console.log(data.editInfo)
    data.dialogVisible = false
}
</script>

<style scoped lang="scss">
.table-info-list{
    background-color: #fff; 
    box-sizing: border-box;
}
</style>