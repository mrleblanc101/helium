<template>
    <section class="">
        <nuxt-link v-for="expertise in expertises" :key="expertise.slug" :to="expertise.path">
            {{ expertise.title }}
        </nuxt-link>
    </section>
</template>

<script>
export default {
    name: 'ExpertiseIndexPage',
    async asyncData({ $content }) {
        const expertises = await $content('expertises', { text: false }).fetch();
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

<style lang="scss" scoped></style>
