<template>
    <el-scrollbar>
        <div class="scrollbar-flex-content">
            <el-tag 
            v-for="tag in tabList" 
            :key="tag.path" 
            :closable="tag.closable" 
            size="large" :effect="route.path === tag.path ? 'dark':'plain'" 
            @click="ToPathName(tag.path)"
            @close="CloseTag(tag)"
            >{{ tag.title }}</el-tag>
        </div>
    </el-scrollbar>
</template>

<script setup>
const route = useRoute()
const router = useRouter()
const store = useStore()
const tabList = computed(() => store.state.tabList)

onMounted(() => {
    store.commit('addTabListItem', { title: '首页', name: 'index', path: '/index', closable: false })
    //刷新后添加当前path
    tabAdd(route)
})

function tabAdd(route){
    store.commit('addTabListItem', { title: route.meta.title, name: route.name, path: route.path, closable: true })
}
//监听路径变化
watch(() => route.path,(newValue, oldValue) => {
    //console.log("新值: "+newValue, "老值: "+oldValue)
    tabAdd(route)
})

//跳转路由
function ToPathName(path){
    router.push(path)
}
//删除标签，并跳转到前一页面
function CloseTag(data){
    //定位
    var index = tabList.value.findIndex(item => item.path === data.path);
    //删除当前标签
    store.commit('delTabListItem', data.path)
    //跳转到tba前一标签
    router.push(tabList.value[index -1].path)
}
</script>

<style scoped>
.el-scrollbar{
    height: 40px;
}
.scrollbar-flex-content {
    display: flex;
}
.scrollbar-flex-content .el-tag{
    margin-right: 10px;
}
</style>