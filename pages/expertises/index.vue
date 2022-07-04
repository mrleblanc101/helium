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
        <section class="section-menu">
            <div class="section-inner max-width-container">
                <ul>
                    <li v-for="expertise in expertises" :key="expertise.slug">
                        <nuxt-link class="expertise" :to="expertise.path">
                            <span class="expertise-index">{{ expertise.order.toString().padStart(2, '0') }}</span>
                            <div>
                                <h2 class="expertise-title">{{ expertise.title.split(' ')[0] }}</h2>
                                <p class="expertise-tags">{{ expertise.preview.tags }}...</p>
                                <p class="expertise-description">{{ expertise.preview.description.split('.')[0] }}.</p>
                                <span class="button secondary expertise-button">En savoir plus</span>
                            </div>
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </section>
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
};
</script>

<style lang="scss" scoped>
.section-title {
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
        @media (min-width: 768px) {
            text-align: left;
            max-width: 650px;
            margin: 50vh 9% 0;
        }
    }
    h1 {
        font-size: 28px;
        font-weight: 400;
    }
}
.expertise {
    display: flex;
    align-items: baseline;
    padding: 20px 20px 30px;
    border-radius: 10px;
    text-decoration: none;
    background-color: $color-blue;
    color: $color-white;
    height: 100%;
    @media (min-width: 768px) {
        padding: 50px 50px 60px;
    }
    &:hover {
        .button.secondary {
            &::before {
                height: 100%;
            }
        }
    }
    .expertise-index {
        font-size: 20px;
        color: $color-burning-orange;
        margin-right: 16px;
        font-variant-numeric: proportional-nums;
        @media (min-width: 768px) {
            font-size: 50px;
            margin-right: 32px;
        }
    }
    .expertise-title {
        font-size: 30px;
        margin-top: 0;
        margin-bottom: 20px;
        font-weight: 400;
        @media (min-width: 768px) {
            font-size: 76px;
            margin-bottom: 45px;
        }
        @media (min-width: 1280px) {
            font-size: 76px;
            font-size: clamp(30px, 4vw, 76px);
        }
    }
    .expertise-tags {
        font-size: 14px;
        opacity: 0.6;
        margin-bottom: 5px;
        @media (min-width: 768px) {
            font-size: 18px;
            margin-bottom: 22px;
        }
    }
    .expertise-description {
        margin-bottom: 30px;
        max-width: 500px;
        font-size: 16px;
        @media (min-width: 768px) {
            font-size: 20px;
            margin-bottom: 85px;
        }
    }
}
.section-menu {
    ul {
        display: grid;
        grid-template-columns: 1fr;
        list-style: none;
        gap: 16px;
        padding: 0;
        margin: 0;
        @media (min-width: 1280px) {
            gap: 35px;
            grid-template-columns: 1fr 1fr;
        }
    }
    h2 {
        hyphens: auto;
        line-height: 0.8;
    }
}
</style>
