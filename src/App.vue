<template>
    <div id="app" class="theme-dark">
        <router-view></router-view>
        <MainFooter />
    </div>
</template>

<script>
import MainFooter from "@/components/MainFooter";
export default {
    name: "App",
    components: { MainFooter },
    mounted() {
        this.$store.dispatch("callSystemOptions");
    }
};
</script>

<style lang="scss">
</style>
