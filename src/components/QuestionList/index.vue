<template>
    <div class="question-list">
        <el-card shadow="hover" style="margin-top:0;">
            <h4 class="question-title">列表内容</h4>
            <p class="question-info">内容。。。</p>
        </el-card>
        <router-link :to="'?id='+o" v-for="o in 30" :key="o">
            <el-card shadow="hover">
                <h4 class="question-title">{{'列表内容 ' + o }}</h4>
                <p class="question-info">内容。。。</p>
            </el-card>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    title: "",
                    info: ""
                }
            ]
        };
    },
    mounted() {
        console.log(this);
        console.log(this.$route);
    }
};
</script>
<style lang="scss">
.question-list {
    .el-card {
        background-color: #2d3748 !important;
        margin-top: 20px;
        &:hover {
            background-color: #4a5568 !important;
        }
    }
    .question-title {
        padding: 0;
        margin: 0;
    }
    .question-info {
        padding: 0;
        margin: 0;
    }
}
</style>