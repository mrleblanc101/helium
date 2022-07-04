<template>
    <div>
        <section class="section-home">
            <div class="section-inner max-width-container">
                <h1>
                    <client-only>
                        Nous aidons les
                        <VueTyper
                            :text="['marques', 'entreprises', 'compagnies', 'entrepreneurs', 'organisations']"
                            initial-action="erasing"
                            erase-style="backspace"
                            :type-delay="150"
                            :pre-type-delay="1000"
                            :pre-erase-delay="3500"
                            :erase-delay="150"
                        /><br />
                        à acquérir un avantage concurrentiel<br />
                        dans le monde de demain.
                        <template #placeholder>
                            Nous aidons les marques<br />
                            à acquérir un avantage concurrentiel<br />
                            dans le monde de demain.
                        </template>
                    </client-only>
                </h1>
                <div class="marquee">
                    <client-only>
                        <MarqueeText :duration="60" :repeat="10">
                            Bienvenue dans l’extension de votre équipe&nbsp;•&nbsp;
                        </MarqueeText>
                    </client-only>
                </div>
            </div>
        </section>
        <section class="section-expertises">
            <div class="section-inner max-width-container">
                <div>
                    <h2>Expertises</h2>
                    <p>
                        Si vous êtes une nouvelle entreprise, nous vous aiderons jusqu’à votre lancement, si vous avez
                        déjà une entreprise, nous vous aiderons à atteindre vos objectifs.
                    </p>
                    <NuxtLink class="button secondary" to="/expertises">En savoir plus</NuxtLink>
                </div>
                <div class="expertises">
                    <client-only>
                        <swiper ref="expertises" :options="swiperOptions">
                            <swiper-slide v-for="(expertise, index) in expertises" :key="expertise.slug">
                                <span class="index">{{ index + 1 }}</span>
                                <span class="label" v-html="expertise.title"></span>
                            </swiper-slide>
                        </swiper>
                    </client-only>
                </div>
            </div>
        </section>
        <section class="section-hero">
            <div class="section-inner max-width-container">
                <h2>
                    <img inline src="@/assets/svg/logo.svg" width="168px" /> est une agence créative québécoise dédiée
                    au développement des entreprises ou organisations par la stratégie, le design et les communications.
                </h2>
            </div>
        </section>
        <section class="section-experience">
            <div class="section-inner max-width-container">
                <div>
                    <h2>L’expérience client</h2>
                    <p>
                        «&nbsp;L’expérience client est l’ensemble des perceptions et émotions qu’une marque procure à
                        ses acheteurs lorsqu’ils entrent en contact avec elle.&nbsp;» En d’autres termes, nous concevons
                        des solutions en fonction de votre clientèle cible.
                    </p>
                </div>
                <ImgExperience />
            </div>
        </section>
        <section class="section-projets">
            <div class="section-inner">
                <div class="marquee">
                    <client-only>
                        <MarqueeText :duration="60" :repeat="10">Quelques&nbsp;&nbsp;</MarqueeText>
                    </client-only>
                </div>
                <div class="marquee">
                    <client-only>
                        <MarqueeText :duration="60" :repeat="10" reverse>Projets&nbsp;&nbsp;</MarqueeText>
                    </client-only>
                </div>
            </div>
        </section>
        <div class="slide-over">
            <div v-for="project in projects" :key="project.slug" class="project">
                <nuxt-link class="project-link" :to="project.path">
                    <h2 class="project-title">{{ project.title }}</h2>
                    <img inline src="@/assets/svg/voir-projet.svg" />
                </nuxt-link>
                <img :src="project.banner" width="16" heigh="9" loading="lazy" />
            </div>
        </div>
    </div>
</template>

<script>
import ImgExperience from '@/assets/svg/img-experience.svg?inline';

export default {
    name: 'HomePage',
    components: {
        ImgExperience,
    },
    async asyncData({ $content }) {
        const projects = await $content('realisations').limit(2).fetch();
        const expertises = await $content('expertises').fetch();
        return {
            projects,
            expertises,
        };
    },
    data() {
        return {
            expertises: [],
            projects: [],
            interval: null,
            currentSlide: 0,
            swiperOptions: {
                centeredSlides: true,
                loop: true,
                slidesPerView: 'auto',
                spaceBetween: 50,
                autoplay: {
                    delay: 5000,
                },
            },
        };
    },
    computed: {
        swiper() {
            return this.$refs.expertises.$swiper;
        },
    },
    // mounted() {
    //     this.resetInterval();
    // },
    // methods: {
    //     resetInterval() {
    //         clearInterval(this.interval);
    //         this.interval = setInterval(() => {
    //             this.currentSlide = this.currentSlide !== 3 ? this.currentSlide + 1 : 0;
    //         }, 3000);
    //     },
    // },
};
</script>

<style lang="scss" scoped>
section {
    display: flex;
    align-items: center;
    justify-content: center;
    &:nth-of-type(even) {
        background: $color-black;
        color: $color-white;
    }
}
.section-home {
    position: relative;
    h1 {
        font-size: 30px;
        max-width: 300px;
        margin: 0 auto;
        font-weight: 400;
        @media (min-width: 768px) {
            font-size: 60px;
            max-width: 1060px;
        }
        @media (max-width: 767px) {
            br {
                display: none;
            }
        }
        .vue-typer {
            display: block;
            @media (min-width: 768px) {
                display: inline-block;
            }
        }
        ::v-deep .typed {
            color: $color-blue;
        }
    }
    .marquee {
        position: absolute;
        left: 0;
        right: 0;
        display: flex;
        white-space: nowrap;
        bottom: 90px;
        font-size: 30px;
        color: $color-blue;
        @media (min-width: 768px) {
            font-size: 50px;
        }
    }
}
.section-hero {
    h2 {
        font-size: 20px;
        max-width: 1060px;
        margin: 0 auto;
        font-weight: 400;
        text-align: center;
        line-height: 1.5;
        @media (min-width: 768px) {
            font-size: 60px;
            line-height: 1.2;
        }
        svg {
            @media (max-width: 767px) {
                display: block;
                margin: 0 auto;
                margin-bottom: 32px;
            }
            fill: $color-blue;
        }
    }
}
.section-expertises,
.section-experience {
    .section-inner {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap-reverse;
        text-align: center;
        gap: 50px 0;
        @media (min-width: 768px) {
            text-align: left;
        }
    }
    h2 {
        font-size: 40px;
        font-weight: 400;
        max-width: 700px;
        margin: 0;
        margin-bottom: 36px;
        @media (min-width: 768px) {
            font-size: 60px;
        }
    }
    p {
        font-size: 16px;
        opacity: 0.7;
        max-width: 700px;
        margin-bottom: 62px;
        line-height: 1.5;
        @media (min-width: 768px) {
            font-size: 24px;
        }
    }
}
.section-expertises {
    overflow: hidden;
    .expertises {
        text-align: center;
        width: 100%;
    }
    // .expertises {
    //     display: flex;
    //     gap: 50px;
    //     justify-content: center;
    //     @media (max-width: 1023px) {
    //         max-width: 400px;
    //         margin: 0 auto;
    //         flex-wrap: wrap;
    //     }
    //     @media (min-width: 1024px) {
    //         flex-direction: column;
    //    }
    // }
    .swiper-container {
        margin: 35px -20px;
        overflow: visible;
    }
    .swiper-slide {
        position: relative;
        display: grid;
        align-items: center;
        justify-content: center;
        width: 200px;
        height: 200px;
        color: $color-white;
        text-align: center;
        z-index: 0;
        appearance: none;
        background: none;
        border: none;
        @media (min-width: 768px) {
            width: 145px;
            height: 145px;
        }
        &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: $color-blue;
            z-index: -1;
            transition: all 300ms ease;
        }
        .index {
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
            top: 50%;
            font-size: 28px;
            grid-row: 1 / 1;
            grid-column: 1 / 1;
            opacity: 1;
            transition: opacity 300ms ease, all 300ms ease;
        }
        .label {
            font-size: 24px;
            grid-row: 1 / 1;
            grid-column: 1 / 1;
            opacity: 0;
            transition: opacity 300ms ease;
        }
        &.swiper-slide-active {
            &::before {
                transform: scale(1.35);
            }
            .label {
                opacity: 1;
                transition: opacity 300ms ease;
            }
            .index {
                transition: opacity 300ms ease, all 300ms ease;
                @media (max-width: 1023px) {
                    top: 5px;
                    color: $color-burning-orange;
                }
                @media (min-width: 1024px) {
                    opacity: 0;
                    transition-delay: 0ms;
                }
            }
        }
    }
}
.section-experience {
    ::v-deep svg {
        width: 100%;
        max-width: 520px;
    }
}
.section-projets {
    background-color: $color-white;
    min-height: 0;
    padding: 100px 0;
    justify-content: flex-start;
    @media (min-width: 768px) {
        padding: 140px 0;
    }
    .marquee {
        display: flex;
        white-space: nowrap;
        font-size: 40px;
        color: $color-blue;
        text-transform: uppercase;
        @media (min-width: 768px) {
            font-size: 100px;
        }
    }
}
.project {
    position: sticky;
    bottom: 0;
    min-height: 100vh;
    overflow: hidden;
    .project-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 18%;
        right: 8%;
        color: $color-white;
        text-decoration: none;
        z-index: 2;
        h2 {
            margin: 0;
            font-size: 32px;
            @media (min-width: 768px) {
                font-size: 42px;
            }
        }
        svg {
            margin-top: 30px;
            width: 80px;
            @media (min-width: 768px) {
                margin-top: 50px;
                width: 182px;
            }
        }
        &:hover ~ img {
            transform: scale(1.02);
        }
    }
    .project-title {
        writing-mode: vertical-rl;
        text-orientation: sideways;
        transform: rotate(180deg);
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
        transition: all 600ms ease;
    }
}
@mixin descending-z-index($count: 30) {
    $target: 0;
    $index: $count;
    @while $index > 0 {
        &:nth-child(#{$target}) {
            z-index: #{$index};
        }
        $target: $target + 1;
        $index: $index - 1;
    }
}
.slide-over {
    position: relative;
    > * {
        @include descending-z-index(3);
    }
}
</style>
