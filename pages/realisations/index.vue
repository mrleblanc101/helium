<template>
    <div>
        <section class="max-width-container">
            <div class="page-header">
                <h1>
                    <client-only>
                        Notre impact chez les
                        <VueTyper
                            :text="['marques', 'entreprises', 'compagnies', 'entrepreneurs', 'organisations']"
                            initial-action="erasing"
                            erase-style="backspace"
                            :type-delay="150"
                            :pre-type-delay="1000"
                            :pre-erase-delay="1500"
                            :erase-delay="150"
                        />
                        <template #placeholder>Notre impact chez les marques</template>
                    </client-only>
                </h1>
            </div>
            <section class="section-inner">
                <div v-for="(realisation, index) in realisations" :key="realisation.slug" class="realisation">
                    <nuxt-link :to="realisation.path">
                        <client-only>
                            <MarqueeText :duration="15" :repeat="50" :reverse="!(index % 2)">
                                {{ realisation.title }}&nbsp;•&nbsp;
                            </MarqueeText>
                        </client-only>
                    </nuxt-link>
                    <nuxt-link class="cell" :to="realisation.path">
                        <NuxtImg :src="realisation.banner" alt="" :quality="60" format="jpg" />
                    </nuxt-link>
                </div>
            </section>
        </section>
    </div>
</template>

<script>
export default {
    name: 'RealisationsIndexPage',
    async asyncData({ $content }) {
        const realisations = await $content('realisations').sortBy('order').fetch();
        return {
            realisations,
        };
    },
    head: {
        title: 'Réalisations',
    },
};
</script>

<style lang="scss" scoped>
.page-header {
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: (120px - 40px);
    @media (min-width: 768px) {
        min-height: 600px;
    }
}
h1 {
    max-width: 1056px;
    width: 100%;
    margin: 0;
    font-size: 30px;
    @media (min-width: 768px) {
        font-size: 60px;
    }
    .vue-typer {
        @media (max-width: 1023px) {
            display: block;
        }
        ::v-deep .typed {
            color: $color-blue;
        }
    }
}
.realisation {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 24px;
    margin: 0 0 12%;
    @media (min-width: 768px) {
        margin: 0 0 8%;
        font-size: 50px;
    }
    a {
        color: $color-blue;
    }
    .cell {
        position: relative;
        width: 60%;
        border-radius: 10px;
        z-index: 1;
        overflow: hidden;
        @media (min-width: 768px) {
            width: 47%;
        }
        img {
            display: block;
            transition: transform 300ms ease;
        }
        &:hover {
            img {
                transform: scale(1.05);
            }
        }
    }
    .marquee-text-wrap {
        position: absolute;
        left: 59vw;
        width: 41vw;
        transform: translateY(-50%);
        @media (min-width: 768px) {
            left: 47vw;
            width: 53vw;
        }
    }
    &:nth-child(even) {
        justify-content: flex-end;
        .marquee-text-wrap {
            right: 59vw;
            left: auto;
            @media (min-width: 768px) {
                right: 47vw;
                left: auto;
            }
        }
    }
}
</style>
