// import config from '@/assets/config.json'
import parseOption from '@/utils/parseOption'
export default {
    // _(context, payload) { },
    // _({state,commit,getters},payload){}
    callOptions(context, payload) {
        return this._vm.$axios
            .get(`https://api.github.com/repos/langnang/questionAwesome/issues${payload ? '/' + payload : ''}`)
    },
    callSystemOptions({ dispatch, commit }) {
        let _this = this._vm;
        dispatch("callOptions", 1)
            .then(function (_res) {
                // console.log(_res.data.body);
                const content = _res.data.body;
                const options = parseOption(content);
                commit("setCatalogTree", options.catalog_tree || {});
                commit("setQuestionList", options.question_list || {});
            }).catch(function () {
                // dispatch("callSystemOptions");
                _this.$alert('请求系统数据失败，请重新刷新页面！！！', 'Error', {
                    confirmButtonText: '确定',
                    callback: () => {
                        window.location.reload();
                    }
                });
            })

        // context.commit("setCatalogTree", config.catalog_tree || {});
        // context.commit("setQuestion/List", config.question_list || {});
    },
    getUser({ commit, dispatch }) {
        const _token = window.localStorage.getItem("token") || window.sessionStorage.getItem("token");
        if (_token) {
            // console.log("has storage token");
            const token = JSON.parse(_token);
            // console.log(token);
            commit("setUserToken", token);
            // 请求用户数据
            dispatch("callUserInfo")
        } else {
            console.log("no storage token");
        }
    }
}