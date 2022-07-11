<template>
    <section :style="{ backgroundImage: `url(${realisation.banner})` }">
        <div class="section-inner max-width-container">
            <div class="header-wrapper">
                <h1>{{ realisation.title }}</h1>
                <nuxt-link to="/realisations">
                    <img inline src="@/assets/svg/arrow-left.svg" height="18" />
                    Réalisations
                </nuxt-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'RealisationsSlugPage',
    async asyncData({ $content, params }) {
        const realisation = await $content('realisations', params.slug).fetch();
        return {
            realisation,
        };
    },
    data() {
        return {
            realisation: {},
        };
    },
};
</script>

<style lang="scss" scoped>
section {
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 100vh;
    background-position: center;
    background-size: cover;
}
.section-inner {
    flex-grow: 1;
}
.header-wrapper {
    position: absolute;
    bottom: 95px;
    color: $color-white;
    h1 {
        font-size: 50px;
        margin-bottom: 8px;
        font-weight: 700;
    }
    a {
        display: flex;
        gap: 10px;
        align-items: center;
        color: currentColor;
        font-size: 30px;
    }
}
</style>
