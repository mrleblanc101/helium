<template>
    <section class="section-menu">
        <div class="section-inner max-width-container">
            <ul>
                <li v-for="expertise in expertises" :key="expertise.slug">
                    <nuxt-link v-slot="{ href, navigate, isExactActive }" :to="expertise.path" custom>
                        <a v-if="!isExactActive" :href="href" class="expertise" @click="navigate">
                            <span class="expertise-index">{{ expertise.order.toString().padStart(2, '0') }}</span>
                            <div>
                                <h2 class="expertise-title">{{ expertise.title.split(' ')[0] }}</h2>
                                <p class="expertise-tags">{{ expertise.preview.tags }}</p>
                                <p class="expertise-description">{{ expertise.preview.description }}</p>
                                <span class="button secondary expertise-button">En savoir plus</span>
                            </div>
                        </a>
                        <nuxt-link v-else to="/expertises">
                            <img inline src="@/assets/svg/btn-back-expertise.svg" />
                        </nuxt-link>
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        expertises: {
            type: Array,
            default: () => [],
        },
    },
};
</script>

<style lang="scss" scoped>
.section-menu {
    .section-inner {
        padding-top: 40px;
        padding-bottom: 60px;
        @media (min-width: 1024px) {
            padding-top: 80px;
            padding-bottom: 135px;
        }
    }
    ul {
        display: grid;
        grid-template-columns: 1fr;
        list-style: none;
        gap: 16px;
        margin: 0;
        padding: 0;
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
li {
    display: flex;
    align-items: center;
    justify-content: center;
}
.expertise {
    position: relative;
    display: flex;
    align-items: baseline;
    padding: 20px 20px 30px;
    color: $color-white;
    width: 100%;
    height: 100%;
    z-index: 0;
    @media (min-width: 768px) {
        padding: 50px 50px 60px;
    }
    &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: 10px;
        z-index: -1;
        background-color: $color-blue;
        transition: transform 300ms ease;
    }
    &:hover {
        &::before {
            transform: scale(1.05);
        }
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
        @media (min-width: 768px) {
            font-size: 56px;
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
svg {
    fill: $color-blue;
    width: 120px;
    height: 120px;
    margin: 40px;
    @media (min-width: 768px) {
        width: 250px;
        height: 250px;
    }
}
</style>
