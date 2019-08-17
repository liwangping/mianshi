import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './moutations';
import getters from './getter';
import actions from './action';

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

