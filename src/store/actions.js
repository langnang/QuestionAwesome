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
                commit("setGroupList", options.group_list || []);
                commit("setTypeList", options.type_list || []);
                commit("setQuestionList", options.question_list || []);
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
    },
    getAnIssue() { },
    createAnIssue({ state }, data) {
        let _this = this._vm;
        this._vm
            .$axios({
                method: "POST",
                url: "https://api.github.com/repos/langnang/QuestionAwesome/issues",
                data: data,
                headers: {
                    accept: "application/json",
                    Authorization: `token ${state.user.token.access_token}`
                }
            })
            .then(function (_res) {
                console.log(_res.data);
                _this.$confirm('记录已提交，是否继续操作?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    _this.$message({
                        type: 'success',
                    });
                }).catch(() => {
                    _this.$message({
                        type: 'info',
                    });
                });
            })
            .catch(function (_err) {
                console.log(_err);
            })
    },
    updateAnIssue({ state }, data) {
        this._vm
            .$axios({
                method: "PATCH",
                url: "https://api.github.com/repos/langnang/QuestionAwesome/issues",
                data: data,
                headers: {
                    accept: "application/json",
                    Authorization: `token ${state.user.token.access_token}`
                }
            })
            .then(function (_res) {
                console.log(_res.data)
            })
            .catch(function (_err) {
                console.log(_err);
            })
    },
    lockAnIssue() { },
    unlockAnIssue() { }
}