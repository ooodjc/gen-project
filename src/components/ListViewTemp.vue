<template>
    <div class="main">
        <div class="domin" v-if="props.searchApi != null">
            <div>名称</div>
            <el-input v-model="data.searchValue" :placeholder="props.searchPlaceholder" style="width: 200px; margin-left: 20px;" />
            <el-button type="primary" style="margin-left: 20px;" @click="search">搜索</el-button>
        </div>

        <div style="background-color: #fff; padding: 24px; margin-top: 20px;">
            <div v-if="props.addApi != null || props.deletesApi != null">
                <el-button type="primary" @click="AddShow" v-if="props.addApi != null">新增</el-button>
                <el-button :type="data.multipleSelection.length > 0 ? 'danger':'info'" @click="Deletes(data.multipleSelection)" v-if="props.deletesApi != null">批量删除</el-button>
            </div>
            <el-table 
            v-loading="data.loading" 
            :data="data.dataList" 
            border 
            style="margin-top: 20px;"
            @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" width="55" v-if="props.deletesApi != null" />
                <el-table-column type="index" label="序号" width="60" v-if="props.isTableIndex" />
                <template v-for="(item,index) in tableColumns" :key="index">
                    <el-table-column :prop="item.prop" :label="item.label" :width="item.width" v-if="!item.isComputed" />
                    <el-table-column :prop="item.prop" :label="item.label" :width="item.width" v-else>
                        <template #default="scope">
                            <div>{{props.computeds[item.computed](scope.row)}}</div>
                        </template>
                    </el-table-column>
                </template>
                <el-table-column label="编辑" width="180">
                    <template #default="scope">
                        <el-button type="danger" size="small" @click="Deleted(scope.row)" v-if="props.deleteApi != null">删除</el-button>
                        <el-button type="primary" size="small" @click="Edit(scope.row)" v-if="props.updateApi != null">修改</el-button>
                        <el-button type="primary" size="small" @click="ShowLook(scope.row)" v-if="props.isLook">查看</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="center2" style="margin-top: 20px;">
                <el-pagination 
                layout="pager" 
                :page-size="data.limit" 
                :total="data.total"
                :current-page="data.page"
                @current-change="setPage"
                @prev-click="setPage(data.page -1)"
                @next-click="setPage(data.page +1)" />
            </div>
        </div>

        <!-- 编辑窗口 -->
        <el-dialog v-model="data.isEdit" title="编辑" :width="props.dialogWidth">
            <el-form v-loading="data.loading" ref="editRuleFormRef" :model="props.editInfo" :rules="props.rules">
                <slot name="editForm"></slot>
                <el-form-item style="max-width: 380px; display: flex; align-items: center;">
                    <div style="margin-left: auto;">
                        <el-button type="info" @click="data.isEdit = false">取消</el-button>
                        <el-button type="primary" @click="Update(editRuleFormRef)">修改</el-button>
                    </div>
                </el-form-item>
            </el-form>
        </el-dialog>

        <!-- 新增窗口 -->
        <el-dialog v-model="data.isAdd" title="新增" :width="props.dialogWidth">
            <el-form v-loading="data.loading" ref="addRuleFormRef" :model="props.editInfo" :rules="props.rules">
                <slot name="addForm"></slot>
                <el-form-item style="max-width: 380px; display: flex; align-items: center;">
                    <div style="margin-left: auto;">
                        <el-button type="info" @click="data.isAdd = false">取消</el-button>
                        <el-button type="primary" @click="Add(addRuleFormRef)">提交</el-button>
                    </div>
                </el-form-item>
            </el-form>
        </el-dialog>

        <!-- 查看窗口 -->
        <el-dialog v-model="data.isLook" title="查看" :width="props.dialogWidth" @close="LookClose">
            <slot name="lookForm"></slot>
        </el-dialog>
    </div>
</template>

<script setup>
import { ref,reactive,onMounted,defineProps,defineEmits } from 'vue'
import { ElMessage,ElMessageBox } from 'element-plus';
import store from '@/store'

/* v-model */
const props = defineProps({
    modelValue: Boolean,
    title: String,              //页面标题
    searchPlaceholder: String,  //搜索输入框提示
    isTableIndex: Boolean,
    isLook: Boolean,            //查看按钮
    searchApi: String,
    itemApi: String,
    addApi: String,
    deleteApi: String,
    deletesApi: String,
    updateApi: String,
    tableColumns: [],           //表格列数据[{prop,label,width}]
    editInfo: Object,           //编辑数据
    dialogWidth: {
        type: String,
        default: "400px"
    },                          //弹窗宽带
    rules: Object,              //表单校验规则
    computeds: Object,          //计算属性方法集合
    api: Object,                //接口
})

const emit = defineEmits(['change'])
/* v-model */

//表单校验状态
const addRuleFormRef = ref()
const editRuleFormRef = ref()
//表单校验规则
const rules = reactive({
    userId: [
        { required: true, message: '必填', trigger: 'blur' },
    ],
    userName: [
        { required: true, message: '必填', trigger: 'blur' },
    ],
    userPwd: [
        { required: true, message: '必填', trigger: 'blur' },
    ],
})

let data = reactive({
    dataList: [],
    loading: false,
    page: 1,
    limit: 5,
    total: 0,
    searchValue: "",
    roleInfoItem: [],
    isEdit: false,      //显示编辑
    isAdd: false,       //显示新增
    isLook: false,      //显示查看
    editItem: {
        userRole: "user",
    },       //编辑内容
    labelWidth: "80px",
    multipleSelection: [],  //表格多选的数据
})


onMounted(() => {
    getDataList()
})

function getDataList(){
    if(props.itemApi != null){
        data.loading = true;
        props.api[props.itemApi]({page: data.page,limit: data.limit}).then(res => {
            if(res.errno === 0){
                data.dataList = res.data.list
                data.total = res.data.total
                data.loading = false;
            }
        })
    }
}
//搜索
function search(){
    data.loading = true;
    props.api[props.searchApi]({ key: data.searchValue }).then(res => {
        if(res.errno === 0){
            data.searchValue = ""
            data.dataList = res.data
            data.loading = false;
            emit("change","search")
        }
    })
}
//删除
function Deleted(item){
    ElMessageBox.confirm('确定删除吗？', '提示', {
        type: 'warning'
    }).then(() => {
        props.api[props.deleteApi](item).then(res => {
            if(res.errno === 0){
                ElMessage.success("操作成功");
                getDataList()
                emit("change","delete")
            }else{
                ElMessageBox.alert(res.errmsg)
            }
        })
    }).catch(() => {
    });
}

//批量删除
function Deletes(items){
    ElMessageBox.confirm('确定删除吗？', '提示', {
        type: 'warning'
    }).then(() => {
        props.api[props.deletesApi](items).then(res => {
            if(res.errno === 0){
                ElMessage.success("操作成功");
                getDataList()
                emit("change","delete")
            }else{
                ElMessageBox.alert(res.errmsg)
            }
        })
    }).catch(() => {
    });
}
//设置页码
function setPage(e){
    data.page = e
    getDataList()
}
//编辑
function Edit(item){
    const clone = JSON.parse(JSON.stringify(item))
    emit("update:editInfo",clone)
    emit("change","editShow")
    //data.editItem = clone
    data.isEdit = true
}

//校验提交
async function Update(formEl){
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            //校验通过
            console.log('submit!')
            UpdateInfo()
        } else {
            //校验不通过
            console.log('error submit!', fields)
        }
    })
}
//修改
function UpdateInfo(){
    ElMessageBox.confirm('确定修改吗？', '提示', {
        type: 'warning'
    }).then(() => {
        props.api[props.updateApi](props.editInfo).then(res => {
            if(res.errno === 0){
                data.isEdit = false
                ElMessage.success("操作成功");
                getDataList()
                emit("change","edit")
            }else{
                ElMessageBox.alert(res.errmsg)
            }
        })
    })
}

function GetUserInfo(){
    api.UserInfo().then(res => {
        store.commit("setUserInfo",res.data)
    })
}

//显示新增窗口
function AddShow(){
    emit("update:editInfo",{})
    emit("change","addShow")
    data.isAdd = true
}

//显示查看窗口
function ShowLook(item){
    const clone = JSON.parse(JSON.stringify(item))
    emit("update:editInfo",clone)
    emit("change","lookShow")
    data.isLook = true
}

function LookClose(){
    emit("change","lookClose")
}

//校验提交
async function Add(formEl){
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            //校验通过
            console.log('submit!')
            AddInfo()
        } else {
            //校验不通过
            console.log('error submit!', fields)
        }
    })
}
function AddInfo(){
    props.editInfo.id = 0
    //检查所有字段数据是否填写完整
    const keys = Object.keys(props.editInfo)
    for(let key in keys){
        if(props.editInfo[key] === ''){
            ElMessageBox.alert("请填写完整数据")
            return
        }
    }
    props.api[props.addApi](props.editInfo).then(res => {
        if(res.errno === 0){
            data.isAdd = false
            ElMessage.success("操作成功");
            getDataList()
            emit("change","add")
        }else{
            ElMessageBox.alert(res.errmsg)
        }
    })
}

//表格多选回调
function handleSelectionChange(val){
    data.multipleSelection = val
}
</script>

<style scoped>
    .main{
        background-color: #ecf5ff;
    }
    .domin{
        display: flex;
        align-items: center;
        padding: 24px 24px 24px;
        border-radius: 5px;
        background-color: #fff;
    }
</style>