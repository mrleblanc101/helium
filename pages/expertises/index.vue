<template>
    <div>
        <section class="section-title">
            <div class="section-inner max-width-container">
                <div class="section-wrapper">
                    <h1>
                        Si vous êtes une nouvelle entreprise, nous vous aiderons jusqu’à votre lancement, si vous avez
                        déjà une entreprise, nous vous aiderons à <u>atteindre vos objectifs</u>.
                    </h1>
                </div>
            </div>
        </section>
        <MenuExpertises :expertises="expertises" />
        <h2>
            <client-only>
                Notre vision d’une
                <VueTyper
                    :text="['marque', 'entreprise', 'compagnie', 'organisation']"
                    initial-action="erasing"
                    erase-style="backspace"
                    :type-delay="150"
                    :pre-type-delay="1000"
                    :pre-erase-delay="1500"
                    :erase-delay="150"
                /><br />
                en 4 étapes.
                <template #placeholder>
                    Notre vision d’une marques<br />
                    en 4 étapes.
                </template>
            </client-only>
        </h2>
    </div>
</template>

<script>
export default {
    name: 'ExpertiseIndexPage',
    async asyncData({ $content }) {
        const expertises = await $content('expertises').sortBy('order').fetch();
        return {
            expertises,
        };
    },
    data() {
        return {
            expertises: [],
        };
    },
    head: {
        title: 'Expertises',
    },
};
</script>

<style lang="scss" scoped>
.section-title {
    min-height: 100vh;
    .section-inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .section-wrapper {
        margin: 50vh 0 0;
        width: 100%;
        text-align: center;
        align-self: flex-end;
        transform: translateY(-50%);
        @media (min-width: 1024px) {
            text-align: left;
            max-width: 650px;
            margin: 50vh 9% 0;
        }
    }
    h1 {
        font-size: 28px;
    }
}
h2 {
    font-size: 20px;
    text-align: center;
    margin: 0 0 75px;
    display: inline-block;
    width: 100%;
    @media (min-width: 768px) {
        font-size: 40px;
    }
    @media (min-width: 1024px) {
        font-size: 60px;
        margin: 0 0 185px;
    }
    .vue-typer {
        ::v-deep .typed {
            color: $color-blue;
        }
    }
}
</style>
