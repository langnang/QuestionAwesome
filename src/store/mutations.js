export default {
    // _(state, payload) { }
    setGroupList(state, list) {
        state.group_list = list;
    },
    setTypeList(state, list) {
        state.type_list = list;
    },
    setQuestionList(state, list) {
        state.question_list = list;
    }
}