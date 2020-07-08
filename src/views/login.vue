<template>
    <div class="view-login">
        <a
            :href="'https://github.com/login/oauth/authorize?client_id='+oauth.client_id+'&redirect_url='+oauth.redirect_url"
        >
            <el-button>
                <font-awesome-icon :icon="['fab','github']" />&nbsp;&nbsp;&nbsp;
                <span>Sign in with GitHub</span>
            </el-button>
        </a>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState({
            oauth: state => state.user.oauth
        })
    }
};
</script>
<style lang="scss">
.view-login {
    display: flex;
    justify-content: center;
    align-items: center;
    .el-button {
        font-size: 26px;
    }
}
</style>