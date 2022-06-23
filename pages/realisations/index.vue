<template>
    <section>
        <div class="section-inner max-width-container">
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
        </div>
    </section>
</template>

<script>
export default {
    name: 'RealisationsIndexPage',
    async asyncData({ $content }) {
        const projects = await $content('realisations', { text: false }).limit(2).fetch();
        return {
            projects,
        };
    },
};
</script>

<style lang="scss" scoped>
.project {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 24px;
    margin: 120px 0;
    a {
        color: $color-blue;
        text-decoration: none;
    }
    .cell {
        position: relative;
        width: 50%;
        border-radius: 10px;
        z-index: 1;
        overflow: hidden;
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
        left: 50vw;
        width: 50vw;
    }
    &:nth-child(even) {
        justify-content: flex-end;
        .marquee-text-wrap {
            right: 50vw;
            left: auto;
        }
    }
}
</style>
