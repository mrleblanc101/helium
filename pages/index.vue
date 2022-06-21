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
                            Nous aidons les marques à acquérir un avantage concurrentiel<br />
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
                <div class="bubbles">
                    <button
                        v-for="(slide, index) in slides"
                        :key="`slide-${index}`"
                        type="button"
                        class="bubble"
                        :class="{ 'is-active': index === currentSlide }"
                        @click="changeSlide(index)"
                    >
                        <span class="index">{{ index + 1 }}</span>
                        <span class="label" v-html="slide"></span>
                    </button>
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
                <div v-html="imgExperience"></div>
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
        <!-- TODO: Fetch projects from Nuxt-content -->
        <div class="project">
            <nuxt-link class="project-link" to="/">
                <h2 class="project-title">Innukoptères</h2>
                <img inline src="@/assets/svg/voir-projet.svg" />
            </nuxt-link>
            <img src="img/projet-1.png" width="16" heigh="9" loading="lazy" />
        </div>
        <div class="project">
            <nuxt-link class="project-link" to="/">
                <h2 class="project-title">Sept-Îles Honda</h2>
                <img inline src="@/assets/svg/voir-projet.svg" />
            </nuxt-link>
            <img src="img/projet-2.png" width="16" heigh="9" loading="lazy" />
        </div>
    </div>
</template>

<script>
import imgExperience from '@/assets/svg/img-experience.svg?raw';

export default {
    name: 'HomePage',
    data() {
        return {
            interval: null,
            currentSlide: 0,
            imgExperience,
            slides: [
                'Stratégie <br />de marque',
                'Identité <br />visuelle',
                'Déploiement <br />de la marque',
                'Communications',
            ],
        };
    },
    mounted() {
        this.resetInterval();

        const slides = document.querySelectorAll('.project, .footer');
        for (let i = 0; i < slides.length; i++) {
            const scene = this.$scrollmagic
                .scene({
                    triggerElement: slides[i],
                })
                .setPin(slides[i], { pushFollowers: false });
            this.$scrollmagic.addScene(scene);
        }
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
        justify-content: center;
        flex-wrap: wrap-reverse;
        gap: 50px 100px;
        text-align: center;
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
    .bubbles {
        display: flex;
        gap: 50px;
        justify-content: center;
        @media (max-width: 1023px) {
            max-width: 400px;
            margin: 0 auto;
            flex-wrap: wrap;
        }
        @media (min-width: 1024px) {
            flex-direction: column;
        }
    }
    .bubble {
        position: relative;
        display: grid;
        align-items: center;
        justify-content: center;
        width: 145px;
        height: 145px;
        color: $color-white;
        text-align: center;
        z-index: 0;
        appearance: none;
        background: none;
        border: none;
        &:not(.is-active) {
            @media (max-width: 767px) {
                display: none;
            }
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
            font-size: 28px;
            grid-row: 1 / 1;
            grid-column: 1 / 1;
            opacity: 1;
            transition: all 300ms ease;
        }
        .label {
            font-size: 24px;
            grid-row: 1 / 1;
            grid-column: 1 / 1;
            opacity: 0;
            transition: all 300ms ease;
        }
        &.is-active {
            &::before {
                transform: scale(1.35);
            }
            .label {
                opacity: 1;
            }
            .index {
                opacity: 0;
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
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    .project-link {
        position: absolute;
        top: 18%;
        right: 8%;
        display: block;
        color: $color-white;
        text-decoration: none;
        z-index: 2;
        h2 {
            font-size: 42px;
        }
        svg {
            margin-top: 50px;
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
</style>
