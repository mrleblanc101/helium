<template>
    <div>
        <div class="overlay-footer">
            <AppHeader />
            <Nuxt />
        </div>
        <AppFooter />
    </div>
</template>

<script>
export default {
    name: 'DefaultLayout'
};
</script>

<style lang="scss" scoped>
.overlay-footer {
    position: relative;
    z-index: 2;
    background: $color-white;
    margin-bottom: 100vh;
}
</style>
