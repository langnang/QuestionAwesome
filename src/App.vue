<template>
    <div id="app" class="theme-dark">
        <MainHeader></MainHeader>
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
        this.$store.dispatch("getUser");
    }
};
</script>

<style lang="scss">
</style>
