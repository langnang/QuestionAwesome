import Vue from 'vue';
import Vuex from 'vuex';
import store from './modules/store';
import catalog from './modules/catalog';
import question from './modules/question';
import user from './modules/user';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        store,
        catalog,
        question,
        user
    },
    state: {
        group_list: [],
        type_list: [],
        question_list: [],
        owner: {},
        repo: {
        }
    },
    actions,
    getters,
    mutations
})