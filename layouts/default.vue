<template>
    <div>
        <div v-if="!preloadHasRun" ref="preload" class="preload" @animationend.self="ended">
            <img inline src="@/assets/svg/logo-preload.svg" />
        </div>
        <div class="page-overlay">
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
            preloadHasRun: true,
        };
    },
    mounted() {
        this.preloadHasRun = this.$cookies.get('preloadHasRun');
        if (!this.$cookies.get('preloadHasRun')) {
            disableBodyScroll(this.$refs.preload);
        }
    },
    beforeDestroy() {
        clearAllBodyScrollLocks();
    },
    methods: {
        ended() {
            this.$nextTick(() => {
                enableBodyScroll(this.$refs.preload);
                this.preloadHasRun = true;
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
.preload {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100vh;
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
.page-overlay {
    position: relative;
    background-color: $color-white;
    z-index: 2;
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
