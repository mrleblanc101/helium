<template>
    <div>
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
        <section v-if="realisation.gallery">
            <client-only>
                <CoolLightBox
                    :items="gallery"
                    :index="index"
                    :slideshow="false"
                    :gallery="false"
                    :close-on-click-outside-mobile="true"
                    thumbs-position="bottom"
                    @close="index = null"
                />
            </client-only>
            <div class="section-inner max-width-container">
                <div class="grid">
                    <template v-for="(item, i) in realisation.gallery">
                        <div
                            v-for="(src, size, j) in item"
                            :key="`item-${i}-${j}`"
                            class="cell"
                            :class="`width-${size.replace('.', '-')}`"
                        >
                            <img :src="src" alt="" @click="index = i" />
                        </div>
                    </template>
                </div>
            </div>
        </section>
    </div>
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
            index: null,
            realisation: {},
        };
    },
    head() {
        return {
            title: `${this.realisation.title} - Réalisations`,
            // description: this.realisation.context,
        };
    },
    computed: {
        gallery() {
            return this.realisation.gallery.map((i) => ({ src: Object.values(i)[0] }));
        },
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
.grid {
    display: flex;
    flex-wrap: wrap;
    margin: -5px;
    @media (min-width: 1024px) {
        margin: -15px;
    }
    .cell {
        padding: 5px;
        @media (min-width: 1024px) {
            padding: 15px;
        }
    }
    .width-25 {
        width: 25%;
    }
    .width-27-5 {
        width: 27.5%;
    }
    .width-33 {
        width: 33.33333%;
    }
    .width-45 {
        width: 45%;
    }
    .width-50 {
        width: 50%;
    }
    .width-66 {
        width: 66.66666%;
    }
    .width-75 {
        width: 75%;
    }
    img {
        display: block;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}
</style>
