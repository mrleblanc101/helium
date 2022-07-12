<template>
    <div>
        <section class="section-hero" :style="{ backgroundImage: `url(${realisation.banner})` }">
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
        <section>
            <div class="marquee">
                <client-only>
                    <MarqueeText :duration="30" :repeat="10">
                        <span v-for="tag in realisation.tags" :key="tag"> {{ tag }}&nbsp;•&nbsp;</span>
                    </MarqueeText>
                </client-only>
            </div>
            <div class="section-inner max-width-container">
                <div>
                    <h2>Entreprise</h2>
                    {{ realisation.entreprise }}
                </div>
                <div>
                    <h2>Contexte</h2>
                    {{ realisation.contexte }}
                </div>
                <div>
                    <h2>Objectifs</h2>
                    <ul>
                        <li v-for="objectif in realisation.objectifs" :key="objectif">{{ objectif }}</li>
                    </ul>
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
                        <button
                            v-for="(src, size, j) in item"
                            :key="`item-${i}-${j}`"
                            type="button"
                            class="cell"
                            :class="`width-${size.replace('.', '-')}`"
                            @click="index = i"
                        >
                            <img v-if="!src.startsWith('http')" :src="src" alt="" />
                            <iframe
                                v-else
                                :src="src"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </button>
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
.section-hero {
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
.marquee {
    display: flex;
    white-space: nowrap;
    font-size: 30px;
    padding: 50px 0 80px;
    color: $color-blue;
    @media (min-width: 768px) {
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
        appearance: none;
        background: none;
        border: none;
        box-shadow: none;
        padding: 5px;
        @media (min-width: 1024px) {
            padding: 15px;
        }
    }
    .width-25 {
        width: 100%;
        @media (min-width: 768px) {
            width: 25%;
        }
    }
    .width-27-5 {
        width: 100%;
        @media (min-width: 768px) {
            width: 27.5%;
        }
    }
    .width-33 {
        width: 100%;
        @media (min-width: 768px) {
            width: 33.33333%;
        }
    }
    .width-45 {
        width: 100%;
        @media (min-width: 768px) {
            width: 45%;
        }
    }
    .width-50 {
        width: 100%;
        @media (min-width: 768px) {
            width: 50%;
        }
    }
    .width-66 {
        width: 100%;
        @media (min-width: 768px) {
            width: 66.66666%;
        }
    }
    .width-75 {
        width: 100%;
        @media (min-width: 768px) {
            width: 75%;
        }
    }
    img {
        display: block;
        height: 100%;
        width: 100%;
        object-fit: cover;
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
    }
    iframe {
        width: 100%;
        height: auto;
        aspect-ratio: 16 / 9;
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
        @media (min-width: 768px) {
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>
