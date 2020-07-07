<template>
    <div class="catalog-list">
        <el-card v-for="(cata,key) in tree" :key="key">
            <div slot="header" class="catalog-list__title">
                <span>{{cata.title}}</span>
                <router-link
                    to="type"
                    class="el-button el-button--default"
                    style="float:right;padding:12px 20px;font-size:14px;"
                    :disabled="disabled"
                >
                    <i class="el-icon-plus"></i>
                    Type
                </router-link>
            </div>
            <router-link
                :to="'/for/'+key_ca"
                class="el-button el-button--default"
                v-for="(ca,key_ca) in cata.children"
                :key="key_ca"
            >{{ca.title}}</router-link>
        </el-card>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    props: {
        disabled: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {};
    },
    computed: {
        ...mapState({
            tree: state => state.catalog.tree
        })
    }
};
</script>
<style lang="scss" scoped>
.catalog-list {
    .catalog-list__title {
        font-size: 3em;
        font-weight: bold;
        text-align: center;
    }
    .el-button {
        padding: 1em 1.5em;
        font-size: 1.3em;
        margin: 10px;
    }
}
</style>