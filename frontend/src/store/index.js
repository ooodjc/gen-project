import { createStore } from 'vuex'
import { storage } from '@/utils/storage'

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      isCollapse: storage.get('isCollapse') || true,
      tabList: [],
    }
  },
  mutations: {
    onIsCollapse(state,val){
      state.isCollapse = val
    },
    addTabListItem(state, data){
      const names = state.tabList.map(item => item.name)
      if(names.indexOf(data.name) == -1){
        state.tabList.push(data)
      }
    },
    delTabListItem(state, path) {
      state.tabList = state.tabList.filter(item => item.path != path);
    },
    clearTabList(state){
      state.tabList = state.tabList.filter(item => item.name === 'index')
    }
  }
})
export default store