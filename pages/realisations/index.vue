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
                            :pre-erase-delay="3500"
                            :erase-delay="150"
                        />
                        <template #placeholder>Notre impact chez les marques</template>
                    </client-only>
                </h1>
            </div>
            <section class="section-inner">
                <div v-for="(project, index) in projects" :key="project.slug" class="project">
                    <nuxt-link :to="project.path">
                        <client-only>
                            <MarqueeText :duration="15" :repeat="50" :reverse="!(index % 2)">
                                {{ project.title }}&nbsp;•&nbsp;
                            </MarqueeText>
                        </client-only>
                    </nuxt-link>
                    <nuxt-link class="cell" :to="project.path">
                        <img :src="project.banner" width="16" heigh="9" loading="lazy" />
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
        const projects = await $content('realisations').limit(2).fetch();
        return {
            projects,
        };
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
    ::v-deep .vue-typer {
        @media (max-width: 1023px) {
            display: block;
        }
    }
    ::v-deep .typed {
        color: $color-blue;
    }
}
.project {
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
        text-decoration: none;
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
            transition: all 300ms ease;
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
