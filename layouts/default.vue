<template>
    <div>
        <!-- <Transition name="fade"> -->
            <div v-if="preloading" class="preload">
                <div>
                    <img inline src="@/assets/svg/logo-preload.svg" />
                </div>
            </div>
        <!-- </Transition> -->
        <div class="overlay-footer">
            <AppHeader />
            <Nuxt />
        </div>
        <AppFooter />
    </div>
</template>

<script>
export default {
    name: 'DefaultLayout',
    data() {
        return {
            preloading: true,
        };
    },
    created() {
        setTimeout(() => {
            // this.preloading = false;
        }, 2000);
    }
};
</script>

<style lang="scss" scoped>
.overlay-footer {
    position: relative;
    z-index: 2;
    background-color: $color-white;
    margin-bottom: 100vh;
}
.preload {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $color-blue;
    overflow: hidden;
    animation: raise-the-curtain 1s ease forwards 1.5s;
    svg {
        animation: fade 1s ease forwards 0.75s;
        fill: $color-white;
        width: 130px;
        @media (min-width: 768px) {
            width: 260px;
        }
    }
}
@keyframes raise-the-curtain {
    from {
        max-height: 100vh;
    }
    to {
        max-height: 0;
    }
}
@keyframes fade {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
</style>
