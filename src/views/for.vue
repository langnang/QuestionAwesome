<template>
    <div class="view-for">
        <MainHeader></MainHeader>
        <FilterList />
        <el-row>
            <el-col :span="8" style="height:70vh;overflow-y:scroll;">
                <QuestionList />
            </el-col>
            <el-col :span="16">
                <Question />
            </el-col>
        </el-row>
    </div>
</template>

<script>
import MainHeader from "./../components/MainHeader";
import FilterList from "@/components/FilterList";
import Question from "@/components/Question";
import QuestionList from "@/components/QuestionList";
export default {
    components: {
        MainHeader,
        FilterList,
        Question,
        QuestionList
    },
    watch: {
        $route: function(newValue, oldValue) {
            console.log(newValue.query.id);
            console.log(oldValue);
        }
    }
};
</script>

<style lang="scss">
.view-home {
}
</style>