<template>
    <div>
        <section class="section-hero">
            <NuxtImg :src="realisation.banner" alt="" :quality="60" format="jpg" />
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
        <section class="section-about">
            <div class="marquee">
                <client-only>
                    <MarqueeText :duration="30" :repeat="10">
                        <span v-for="tag in realisation.tags" :key="tag"> {{ tag }}&nbsp;•&nbsp;</span>
                    </MarqueeText>
                </client-only>
            </div>
            <div class="section-inner max-width-container">
                <div class="about-grid">
                    <div class="cell">
                        <h2>Entreprise</h2>
                        <p>{{ realisation.entreprise }}</p>
                    </div>
                    <div class="cell">
                        <h2>Contexte</h2>
                        <p>{{ realisation.contexte }}</p>
                    </div>
                    <div class="cell">
                        <h2>Objectifs</h2>
                        <ul>
                            <li v-for="objectif in realisation.objectifs" :key="objectif">{{ objectif }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section v-if="realisation.gallery" class="section-gallery">
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
                <div class="gallery-grid">
                    <template v-for="(item, i) in realisation.gallery">
                        <button
                            v-for="(src, size, j) in item"
                            :key="`item-${i}-${j}`"
                            type="button"
                            class="cell"
                            :class="`width-${size.replace('.', '-')}`"
                            @click="index = i"
                        >
                            <NuxtImg v-if="!src.startsWith('http')" :src="src" alt="" :quality="60" loading="lazy" />
                            <div v-else class="responsive-embed widescreen">
                                <iframe
                                    :src="src"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            </div>
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
    position: relative;
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    .section-inner {
        flex-grow: 1;
    }
    img {
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        min-height: 100%;
        min-width: 100%;
        left: 0;
        right: 0;
        object-fit: cover;
        transition: transform 600ms ease;
    }
}

.section-about {
    .section-inner {
        padding-top: 0;
        padding-bottom: 0;
    }
}
.header-wrapper {
    position: absolute;
    bottom: 95px;
    color: $color-white;
    h1 {
        font-size: 30px;
        margin-bottom: 8px;
        font-weight: 700;
        @media (min-width: 768px) {
            font-size: 50px;
        }
    }
    a {
        display: flex;
        gap: 10px;
        align-items: center;
        color: currentColor;
        font-size: 20px;
        @media (min-width: 768px) {
            font-size: 30px;
        }
    }
}
.marquee {
    display: flex;
    white-space: nowrap;
    font-size: 24px;
    padding: 50px 0 40px;
    color: $color-blue;
    @media (min-width: 1024px) {
        padding: 50px 0 120px;
        font-size: 30px;
    }
}
.about-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px 5%;
    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }
    h2 {
        font-size: 32px;
        margin-bottom: 16px;
        @media (min-width: 1024px) {
            font-size: 40px;
            margin-bottom: 40px;
        }
    }
    ul {
        margin: 0;
        padding-left: 1rem;
    }
    p {
        margin: 0;
    }
}
.section-gallery {
    .section-inner {
        padding-top: 60px;
        padding-bottom: 80px;
        @media (min-width: 1024px) {
            padding-top: 120px;
            padding-bottom: 180px;
        }
    }
}
.gallery-grid {
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
        position: relative;
        display: block;
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: top left;
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
    }
    .responsive-embed {
        position: relative;
        height: 0;
        padding-bottom: 56.25%;
        @media (min-width: 768px) {
            padding: 0;
            height: 100%;
        }
    }
    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        @media (min-width: 768px) {
            position: static;
            height: 100%;
            object-fit: cover;
            padding-bottom: 0;
        }
    }
}
</style>
