import getQuery from "@/utils/getQuery";
export default {
    state: {
        active: false,
        info: {},

        oauth: {
            client_id: "Iv1.312c32dbc9a31bfa",
            redirect_url: "http://localhost:8080/#/api/oauth",
            client_secret: "ba151763fc8b24b346284864e5a42b57fb04a399",
            code: "",
            validity: "page",
            message: "No OAuth Info, Please Sign in.",
            message_list: [
                "No OAuth Info, Please Sign in.",
                "Verification Code Detected, Validating....",
                "Bad Verification Code, Please Sign in Again.",
                "Good Verification Code, Requesting User Info...",
                "Sign in Success."
            ],
        },
        token: {

        }
    },
    mutations: {
        setUserActive(state, isActive) {
            state.active = isActive;
        },
        setUserOAuthCode(state, code) {
            state.oauth.code = code;
        },
        setUserOAuthMessage(state, index) {
            state.oauth.message = state.oauth.message_list[index];
        },
        setUserInfo(state, info) {
            state.info = info;
            state.active = true;
        },
        setUserToken(state, token) {
            state.token = token;
        }

    },
    getters: {},
    actions: {
        callUserInfo({ commit, state }) {
            this._vm.$axios({
                method: 'get',
                url: `https://api.github.com/user`,
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${state.token.access_token}`
                }
            }).then(function (_res) {
                // console.log(_res.data);
                commit("setUserOAuthMessage", 4);
                commit("setUserInfo", _res.data);
                console.log(_res.data);
                // console.log(getQuery(_res.data));
            }).catch(function (_err) {
                console.log(_err);
            })
        },
        callUserToken({ state, dispatch, commit }) {
            commit("setUserOAuthMessage", 1);
            this._vm.$axios({
                method: "POST",
                // url: 'https://github.com/login/oauth/access_token?' +
                url: '/access_token?' +
                    `client_id=${state.oauth.client_id}&` +
                    `client_secret=${state.oauth.client_secret}&` +
                    `code=${state.oauth.code}`,
                headers: {
                    accept: "application/json"
                }
            }).then(function (_res) {
                // console.log(_res);
                // 转换为json
                const token = getQuery(_res.data);
                // console.log(token);
                // 检测是否含有用户令牌
                if (token.access_token) {
                    commit("setUserToken", token);
                    commit("setUserOAuthMessage", 3);
                    // 请求用户数据
                    dispatch("callUserInfo")
                }
                else {
                    throw new Error(token.error);
                }
            }).catch(function (_err) {
                commit("setUserOAuthMessage", 2);
                console.log(_err);
            })
        }
    }
}