import {
    createStore
} from 'vuex'

export default createStore({
    state: {
        count: 0,
        // 可以通过 store.state 来获取状态对象。
        //访问：console.log(store.state.count)。在 Vue 组件中， 可以通过 this.$store 访问store实例
    },
    getters: {},
    mutations: {
        increment(state) {
            state.count++
            // 出发状态变更：store.commit('increment')
        }
    },
    actions: {},
    modules: {}
})
