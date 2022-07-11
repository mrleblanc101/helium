<template>
    <div>
        <section class="section-title">
            <div class="section-inner max-width-container">
                <div class="section-wrapper">
                    <h1>
                        <span class="expertise-index">{{ expertise.order.toString().padStart(2, '0') }}</span>
                        {{ expertise.title }}
                    </h1>
                    <p>{{ expertise.description }}</p>
                </div>
            </div>
        </section>
        <section class="section-tags">
            <div class="section-inner max-width-container">
                <ul>
                    <li v-for="tag in expertise.tags" :key="tag">
                        {{ tag }}
                    </li>
                </ul>
            </div>
        </section>
        <section class="section-details">
            <ul>
                <li v-for="item in expertise.details" :key="item.title">
                    <img class="icon-expertise" :src="item.img" alt="" />
                    <div>
                        <h2>{{ item.title }}</h2>
                        <p>{{ item.description }}</p>
                    </div>
                </li>
            </ul>
        </section>
        <MenuExpertises :expertises="expertises" />
    </div>
</template>

<script>
export default {
    name: 'ExpertiseSlugPage',
    async asyncData({ $content, params }) {
        const expertises = await $content('expertises').sortBy('order').fetch();
        const expertise = await $content('expertises', params.slug).fetch();
        return {
            expertises,
            expertise,
        };
    },
    data() {
        return {
            expertise: {},
        };
    },
    head() {
        return {
            title: `${this.expertise.title} - Expertises`,
            // description: this.expertise.preview.description,
        };
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
        @media (min-width: 768px) {
            text-align: left;
            max-width: 650px;
            margin: 50vh 9% 0;
        }
    }
    h1 {
        font-size: 20px;
        color: $color-blue;
        @media (min-width: 768px) {
            font-size: 50px;
        }
        .expertise-index {
            display: block;
            font-size: 25px;
            font-weight: 700;
            color: $color-burning-orange;
            @media (min-width: 768px) {
                display: none;
            }
        }
    }
    p {
        font-size: 16px;
        @media (min-width: 768px) {
            font-size: 24px;
        }
    }
}
.section-tags {
    background-color: $color-blue;
    color: $color-white;
    .section-inner {
        display: flex;
        justify-content: center;
        padding-top: 52px;
        padding-bottom: 52px;
        @media (min-width: 768px) {
            padding-top: 104px;
            padding-bottom: 104px;
        }
    }
    ul {
        display: inline-grid;
        margin: 0;
        grid-template-columns: 1fr;
        gap: 16px;
        padding: 0;
        list-style: none;
        font-size: 16px;
        @media (min-width: 768px) {
            font-size: 30px;
            gap: 36px 104px;
        }
        @media (min-width: 1024px) {
            grid-template-columns: 1fr 1fr;
        }
    }
    li {
        display: flex;
        &::before {
            content: '\2022';
            margin-right: 0.3em;
        }
    }
}
.section-details {
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        max-width: 1220px;
        margin: 0 auto;
    }
    li {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px 30px 40px;
        gap: 0 15%;
        z-index: 0;
        text-align: center;
        @media (min-width: 768px) {
            flex-direction: row;
            text-align: left;
            padding: 110px 6%;
        }
        &::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100vw;
            box-shadow: 0 40px 60px rgba(0, 0, 0, 0.06);
            pointer-events: none;
            z-index: -1;
        }
        &:nth-child(even) {
            &::before {
                left: 0;
                // left: -110px;
                border-bottom-left-radius: 60px;
            }
        }
        &:nth-child(odd) {
            @media (min-width: 768px) {
                flex-direction: row-reverse;
            }
            &::before {
                right: 0;
                // right: -110px;
                border-bottom-right-radius: 60px;
            }
        }
        h2 {
            margin-top: 35px;
            font-size: 20px;
            @media (min-width: 768px) {
                margin-top: 0;
                font-size: 40px;
            }
            &::before {
                content: '\2022';
                color: $color-blue;
                margin-right: 0.3em;
            }
        }
        p {
            margin: 0;
            font-size: 14px;
            @media (min-width: 768px) {
                font-size: 16px;
            }
        }
        .icon-expertise {
            width: 110px;
            height: 110px;
            @media (min-width: 768px) {
                width: 200px;
                height: 200px;
            }
        }
    }
}
</style>
