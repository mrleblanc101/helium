<template>
    <div>
        <section class="section-title">
            <div class="section-inner max-width-container">
                <div class="section-wrapper">
                    <h1>
                        {{ expertise.title }}
                    </h1>
                    <p>{{ expertise.description }}</p>
                </div>
            </div>
        </section>
        <div class="section-tags">
            <div class="section-inner max-width-container">
                <ul>
                    <li v-for="tag in expertise.tags" :key="tag">
                        {{ tag }}
                    </li>
                </ul>
            </div>
        </div>
        <div class="section-details">
            <div class="section-inner max-width-container">
                <ul>
                    <li v-for="item in expertise.details" :key="item.title">
                        <img :src="item.img" alt="" width="200" height="200" />
                        <div>
                            <h2>{{ item.title }}</h2>
                            <p>{{ item.description }}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExpertiseSlugPage',
    async asyncData({ $content, params }) {
        const expertise = await $content('expertises', params.slug).limit(1).fetch();
        return {
            expertise,
        };
    },
    data() {
        return {
            expertise: {},
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
        font-size: 20px;
        color: $color-blue;
        font-weight: 400;
        @media (min-width: 768px) {
            font-size: 50px;
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
        padding: 52px 0;
        @media (min-width: 768px) {
            padding: 104px 0;
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
            margin-right: 12px;
        }
    }
}
.section-details {
    ul {
        list-style: none;
    }
    li {
        display: flex;
        align-items: center;
        &:nth-child(odd) {
            flex-direction: row-reverse;
        }
    }
}
</style>
