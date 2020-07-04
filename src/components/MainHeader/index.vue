<template>
    <el-row class="main-header">
        <router-link to="/">
            <img src="@/assets/logo.png" width="40" />
        </router-link>
        <!-- <el-button type="text" style>
                <i>search</i> Search...
        </el-button>-->
        <router-link to class="el-button el-button--default">
            <i>face</i>
            Sign in
        </router-link>
        <router-link to class="el-button el-button--default">
            <i class="el-icon-plus"></i>
            Question
        </router-link>
        <slot></slot>
    </el-row>
</template>
<style lang="scss">
.main-header {
    .el-button + .el-button {
        margin-left: 0;
    }
}
</style>