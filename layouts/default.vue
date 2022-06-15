<template>
    <div>
        <div v-if="!preloadHasRun" class="preload" @animationend.self="ended">
            <img inline src="@/assets/svg/logo-preload.svg" />
        </div>
        <div class="overlay-footer">
            <AppHeader />
            <Nuxt />
        </div>
        <AppFooter />
    </div>
</template>

<script>
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export default {
    name: 'DefaultLayout',
    data() {
        return {
            preloadHasRun: false,
        };
    },
    created() {
        disableBodyScroll();
        this.preloadHasRun = this.$cookies.get('preloadHasRun');
    },
    beforeDestroy() {
        clearAllBodyScrollLocks();
    },
    methods: {
        ended() {
            this.$nextTick(() => {
                this.preloadHasRun = true;
                enableBodyScroll();
                this.$cookies.set('preloadHasRun', true, {
                    maxAge: 60 * 60 * 24,
                    path: '/',
                });
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.overlay-footer {
    position: relative;
    z-index: 2;
    background-color: $color-white;
    @media (min-width: 1024px) {
        margin-bottom: 100vh;
    }
}
.preload {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100vh;
    height: 100lvh;
    will-change: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $color-blue;
    overflow: hidden;
    animation: raise-the-curtain 1s ease forwards 2s;
    svg {
        animation: fade 1s ease forwards 1.5s;
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
