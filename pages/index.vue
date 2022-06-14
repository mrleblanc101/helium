<template>
    <div>
        <section class="section-home">
            <div class="section-inner max-width-container">
                <h1>
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
                </h1>
                <div class="marquee">
                    <MarqueeText :duration="15" :repeat="10">
                        Bienvenue dans l’extension de votre équipe&nbsp;•&nbsp;
                    </MarqueeText>
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
                    <NuxtLink class="button primary" to="/expertise">En savoir plus</NuxtLink>
                </div>
                <div>
                    <img src="@/assets/svg/img-experience.svg" alt="" />
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
                <div>
                    <img src="@/assets/svg/img-experience.svg" alt="" />
                </div>
            </div>
        </section>
        <section class="section-projets">
            <div class="section-inner">
                <div class="marquee">
                    <MarqueeText :duration="15" :repeat="10">Quelques&nbsp;&nbsp;</MarqueeText>
                </div>
                <div class="marquee">
                    <MarqueeText :duration="15" :repeat="10" reverse>Projets&nbsp;&nbsp;</MarqueeText>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { VueTyper } from 'vue-typer';
import MarqueeText from 'vue-marquee-text-component';

export default {
    name: 'HomePage',
    components: {
        VueTyper,
        MarqueeText,
    },
};
</script>

<style lang="scss" scoped>
.section-home {
    position: relative;
    h1 {
        font-size: 60px;
        max-width: 1060px;
        margin: 0 auto;
        font-weight: 400;
        .vue-typer {
            display: inline-block;
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
        font-size: 50px;
        color: $color-blue;
    }
}
.section-hero {
    h2 {
        font-size: 60px;
        max-width: 1060px;
        margin: 0 auto;
        font-weight: 400;
        text-align: center;
        svg {
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
        gap: 50px 100px;
    }
    h2 {
        font-size: 60px;
        font-weight: 400;
        max-width: 700px;
        margin: 0;
        margin-bottom: 36px;
    }
    p {
        font-size: 24px;
        opacity: 0.7;
        max-width: 700px;
        margin-bottom: 62px;
    }
}
.section-projets {
    min-height: 0;
    padding: 120px 0 170px;
    justify-content: flex-start;
    .marquee {
        display: flex;
        white-space: nowrap;
        font-size: 100px;
        color: $color-blue;
        text-transform: uppercase;
    }
}
</style>
