<template>
    <div class="view-home">
        <MainHeader>
            <el-button>
                <i class="el-icon-plus"></i> Catalog
            </el-button>
        </MainHeader>
        <CatalogTree />
    </div>
</template>

<script>
import MainHeader from "./../components/MainHeader";
import CatalogTree from "./../components/CatalogTree";
export default {
    components: {
        MainHeader,
        CatalogTree
    }
};
</script>

<style lang="scss">
.view-home {
}
</style>