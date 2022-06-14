<template>
    <div>
        <section class="slide-hero">
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
                        Bienvenue dans l'extension de votre équipe&nbsp;•&nbsp;
                    </MarqueeText>
                </div>
            </div>
        </section>
        <section>
            <div class="section-inner max-width-container">
                <h2>Section 2</h2>
            </div>
        </section>
        <section>
            <div class="section-inner max-width-container">
                <h2>Section 3</h2>
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
.slide-hero {
    position: relative;
    h1 {
        font-size: 60px;
        max-width: 1060px;
        margin: 0 auto;
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
</style>
