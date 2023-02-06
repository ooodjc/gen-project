<template>
    <div class="table-form">
        <el-form :model="props.modelValue" label-width="100px">
            <el-form-item label="数据库">
                <el-input v-model="props.modelValue.databaseName" :disabled="true" @change="inputChange" />
            </el-form-item>
            <el-form-item label="父包名" :required="true">
                <el-input v-model="props.modelValue.parentPackage" @change="inputChange" />
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup>

const props = defineProps({
    modelValue: Object,
})

//emit
const emit = defineEmits(["modelValue"])

function inputChange(val) {
    emit("modelValue", props.modelValue)
}
</script>