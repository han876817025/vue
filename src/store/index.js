import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);
const state = {
    showFooter: true,
    changeableNum: 0
};
const getters = {
    isShow(state) {
        return state.showFooter
    },
    getChangedeNum: (state) => (state.changeableNum)
}
const store = new Vuex.Store({state, getters});

export default store;