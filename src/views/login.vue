<template>
    <div class="view-login">
        <el-button>
            <font-awesome-icon :icon="['fab','github']" />&nbsp;&nbsp;&nbsp;
            <span>Sign in with GitHub</span>
        </el-button>
    </div>
</template>
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