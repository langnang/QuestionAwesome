<template>
    <div class="question-container">
        <h1 class="question-title">Vue 父子组件通信</h1>
        <p class="question-desc">xxxxxxxxxxxxxxxx</p>
        <el-tabs type="border-card">
            <el-tab-pane label="题目内容" name="first">题目内容</el-tab-pane>
            <el-tab-pane label="答题选项" name="second">答题选项</el-tab-pane>
            <el-tab-pane label="参考答案" name="third">参考答案</el-tab-pane>
            <el-tab-pane label="笔记内容" name="fourth">笔记内容</el-tab-pane>
        </el-tabs>
    </div>
</template>
<style lang="scss">
.question-container {
    .el-tabs--border-card {
        background-color: #1a202c;
        border: 0;
        .el-tabs__header {
            background-color: #1a202c;
            border-bottom: 0;
        }
        .el-tabs__item {
            // padding: 12px 20px;
        }
    }
}
</style>