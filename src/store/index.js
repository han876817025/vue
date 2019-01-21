import Vue from 'vue'
import Vuex from 'vuex';
import Cat from './Modules/Cat.js'

Vue.use(Vuex);
const store = new Vuex.Store({modules: {Cat}});

export default store;