<template>
    <div class="view-catalog">
        <el-form ref="form" :model="form">
            <el-form-item label="KEY">
                <el-input v-model="form.key"></el-input>
            </el-form-item>
            <el-form-item label="TITLE">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="DESCRIPTION">
                <el-input type="textarea" v-model="form.description"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">创建</el-button>
                <router-link to="/" class="el-button el-button--default">取消</router-link>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                key: "",
                title: "",
                description: ""
            }
        };
    },
    methods: {
        onSubmit() {
            console.log("submit!");
        }
    }
};
</script>
<style lang="scss" scoped>
.view-catalog {
    padding: 0 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    .el-form {
        display: block;
        width: 700px;
    }
}
</style>