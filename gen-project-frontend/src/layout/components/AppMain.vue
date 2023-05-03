<template>
    <section class="app-main">
        <router-view v-slot="{ Component }">
            <keep-alive :include="tagList">
                <component :is="Component" />
            </keep-alive>
        </router-view>
    </section>
</template>

<script setup>
const store = useStore()
const tagList = computed(() => store.state.tabList.map(item => item.name))
</script>

<style scoped lang="scss">
.app-main{
    background-color: #ecf5ff;
}
</style>