export default {
    // _: (state, getters) => { }
    getTypeList: (state) => (group_key) => state.type_list.filter(v => v.group_key == group_key)
}