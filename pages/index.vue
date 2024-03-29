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
                            :pre-erase-delay="1500"
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
                        <MarqueeText :duration="duration" :repeat="10">
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
                <div class="expertises desktop-only">
                    <button
                        v-for="(expertise, index) in expertises"
                        :key="expertise.slug"
                        type="button"
                        class="swiper-slide"
                        :class="{ 'is-active': index === currentSlide }"
                        @click="changeSlide(index)"
                    >
                        <span class="index">{{ index + 1 }}</span>
                        <span class="label" v-html="expertise.title"></span>
                    </button>
                </div>
                <div class="expertises mobile-only">
                    <client-only>
                        <swiper ref="expertises" :options="swiperOptions" class="mobile-only">
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
                    au développement des entreprises et des organisations par la stratégie, le design et les
                    communications.
                </h2>
            </div>
        </section>
        <!-- <section class="section-realisations">
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
        </section> -->
        <div class="realisations-underlay">
            <section class="section-experience">
                <div class="section-inner max-width-container">
                    <div>
                        <h2>Des réalisations axées sur l’expérience client.</h2>
                        <p>
                            «&nbsp;L’expérience client est l’ensemble des perceptions et émotions qu’une marque procure
                            à ses acheteurs lorsqu’ils entrent en contact avec elle.&nbsp;» En d’autres termes, nous
                            concevons des solutions en fonction de votre clientèle cible.
                        </p>
                    </div>
                    <div id="lottie"></div>
                </div>
            </section>
            <div v-for="realisation in realisations" :key="realisation.slug" class="realisation">
                <nuxt-link class="realisation-link" :to="realisation.path">
                    <h2 class="realisation-title">{{ realisation.title }}</h2>
                    <img inline src="@/assets/svg/btn-voir-projet.svg" />
                </nuxt-link>
                <NuxtImg :src="realisation.banner" alt="" :quality="60" format="jpg" />
            </div>
        </div>
    </div>
</template>

<script>
import lottie from 'lottie-web';
import animationData from '@/assets/data/experience.json';

export default {
    name: 'HomePage',
    async asyncData({ $content }) {
        const realisations = await $content('realisations').limit(2).sortBy('order').fetch();
        const expertises = await $content('expertises').sortBy('order').fetch();
        return {
            realisations,
            expertises,
        };
    },
    data() {
        return {
            duration: 30,
            interval: null,
            currentSlide: 0,
            swiperOptions: {
                centeredSlides: true,
                loop: true,
                slidesPerView: 'auto',
                spaceBetween: 50,
                autoplay: {
                    delay: 3000,
                },
            },
        };
    },
    computed: {
        swiper() {
            return this.$refs.expertises.$swiper;
        },
    },
    mounted() {
        this.resetInterval();

        const params = {
            container: document.getElementById('lottie'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData,
        };
        lottie.loadAnimation(params);

        this.duration = window.matchMedia('(min-width: 768px)').matches ? 30 : 15;
    },
    methods: {
        changeSlide(index) {
            this.currentSlide = index;
            this.resetInterval();
        },
        resetInterval() {
            clearInterval(this.interval);
            this.interval = setInterval(() => {
                this.currentSlide = this.currentSlide !== 3 ? this.currentSlide + 1 : 0;
            }, 3000);
        },
    },
};
</script>

<style lang="scss" scoped>
section {
    overflow: hidden;
    min-height: 100vh;
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
            ::v-deep .typed {
                color: $color-blue;
            }
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
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap-reverse;
        text-align: center;
        gap: 50px 0;
        @media (min-width: 1024px) {
            text-align: left;
            flex-wrap: nowrap;
        }
    }
    h2 {
        font-size: 40px;
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
        display: inline-flex;
        text-align: center;
        gap: 50px;
        justify-content: center;
        @media (max-width: 1023px) {
            max-width: 400px;
            margin: 0 auto;
            flex-wrap: wrap;
            width: 100%;
        }
        @media (min-width: 1024px) {
            flex-direction: column;
        }
        &.desktop-only {
            display: none;
            @media (min-width: 1024px) {
                display: inline-flex;
            }
        }
        &.mobile-only {
            @media (min-width: 1024px) {
                display: none;
            }
        }
    }
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
        @media (min-width: 1024px) {
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
            transition: transform 300ms ease;
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
        &.is-active,
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
    position: sticky;
    bottom: 0;
    background: black;
    color: white;
    ::v-deep svg {
        width: 100%;
        max-width: 520px;
    }
}
.section-realisations {
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
.realisation {
    position: sticky;
    bottom: 0;
    min-height: 100vh;
    overflow: hidden;
    .realisation-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 18%;
        right: 8%;
        color: $color-white;
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
    .realisation-title {
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
        transition: transform 600ms ease;
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
.realisations-underlay {
    position: relative;
    > * {
        @include descending-z-index(3);
    }
}
</style>
