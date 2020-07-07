<template>
    <div id="app" class="theme-dark">
        <MainHeader>
            <el-button>
                <i class="el-icon-plus"></i> Catalog
            </el-button>
        </MainHeader>
        <router-view></router-view>
        <MainFooter />
    </div>
</template>

<script>
import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";
export default {
    name: "App",
    components: { MainHeader, MainFooter },
    mounted() {
        this.$store.dispatch("callSystemOptions");
    }
};
</script>

<style lang="scss">
</style>
