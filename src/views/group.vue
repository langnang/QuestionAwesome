<template>
    <div class="view-catalog">
        <el-form ref="form" :model="form">
            <el-form-item label="KEY：关键字">
                <el-input v-model="form.key"></el-input>
            </el-form-item>
            <el-form-item label="VALUE：关键值">
                <el-input v-model="form.value"></el-input>
            </el-form-item>
            <el-form-item label="DESCRIPTION：描述">
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
                value: "",
                description: ""
            }
        };
    },
    methods: {
        onSubmit() {
            console.log("submit!");
            this.$store.dispatch("createAnIssue", {
                title: `[New Group] ${this.form.key}：${this.form.value}`,
                body: `\`\`\`json\n${JSON.stringify(this.form)}\n\`\`\``
            });
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