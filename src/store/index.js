import Vue from 'vue';
import Vuex from 'vuex';
import store from './modules/store';
import catalog from './modules/catalog';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        store,
        catalog
    },
    actions,
    getters,
    mutations
})