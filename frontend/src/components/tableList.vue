<template>
    <div class="table-list">
        <div class="title">选择要生成的表</div>
        <el-checkbox-group v-model="data.checkList" @change="selectChange">
            <el-checkbox :label="item" v-for="item in dataList" :key="item" />
        </el-checkbox-group>
    </div>
</template>

<script setup>
const props = defineProps({
    dataList: Array,
})
const emit = defineEmits(["change"])

const data = reactive({
    checkList: []
})

function selectChange(){
    emit("change", data.checkList)
}
</script>

<style scoped lang="scss">
.table-list{
    .title{
        color: #409eff;
    }
}
</style>