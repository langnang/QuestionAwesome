<template>
    <el-row class="main-header">
        <router-link to="/">
            <img src="@/assets/logo.png" width="40" style />
        </router-link>
        <!-- <el-button type="text" style>
                <i>search</i> Search...
        </el-button>-->
        <router-link to class="el-button el-button--default">
            <font-awesome-icon :icon="['fab','github']" />&nbsp;Sign in
        </router-link>
        <router-link to class="el-button el-button--default" :disabled="disabled">
            <i class="el-icon-plus"></i>
            Question
        </router-link>
        <slot></slot>
    </el-row>
</template>
<script>
export default {
    props: {
        disabled: {
            type: Boolean,
            default: true
        }
    }
};
</script>
<style lang="scss">
.main-header {
    padding: 18px 30px;
    .el-button {
        & + .el-button {
            margin-left: 0;
        }
    }
}
</style>