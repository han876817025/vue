export default {
    namespaced: true,

    // 模块内容（module assets）
    state: {
        aa:10,
        actionStus:true
    }, // 模块内的状态已经是嵌套的了，使用 `namespaced` 属性不会对其产生影响
    getters: {
        isAdmin(state) {
         return ++state.aa;
        } // -> getters['Cat/isAdmin']
    },
    actions: {
        actionStus(context) {
            console.log(context);
            context.commit('a',10)
        } // -> dispatch('account/login')
    },
    mutations: {
        a(state,items) {
            state.actionStus=items
        } // -> commit('account/login')
    }
}