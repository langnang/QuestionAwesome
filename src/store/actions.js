import parseOption from '@/utils/parseOption'
export default {
    // _(context, payload) { },
    // _({state,commit,getters},payload){}
    callOptions(context, payload) {
        return this._vm.$axios
            .get(`https://api.github.com/repos/langnang/questionAwesome/issues${payload ? '/' + payload : ''}`)
    },
    callSystemOptions(context) {
        context.dispatch("callOptions", 1)
            .then(function (_res) {
                console.log(_res.data.body);
                const content = _res.data.body;
                const options = parseOption(content);
                context.commit("setCatalogTree", options.catalog_tree || {});
            })
    }
}