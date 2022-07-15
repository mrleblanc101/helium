<template>
    <header class="header" :class="[$route.name, isOpen ? 'is-open' : '']">
        <div class="header-inner max-width-container">
            <NuxtLink to="/">
                <template v-if="$route.name === 'expertises' || $route.name === 'expertises-slug'">
                    <img inline class="icon-logo-hero desktop-only" src="@/assets/svg/logo-expertises-desktop.svg" />
                    <img inline class="icon-logo-hero mobile-only" src="@/assets/svg/logo-expertises-mobile.svg" />
                </template>
                <template v-else-if="$route.name === 'agence'">
                    <img inline class="icon-logo-hero desktop-only" src="@/assets/svg/logo-agence-desktop.svg" />
                    <img inline class="icon-logo-hero mobile-only" src="@/assets/svg/logo-agence-mobile.svg" />
                </template>
                <img v-else inline class="icon-logo" src="@/assets/svg/logo.svg" />
            </NuxtLink>
            <button type="button" class="btn-menu" :class="{ 'is-open': isOpen }" @click="toggle">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </button>
            <transition :duration="750">
                <div v-show="isOpen" ref="nav" class="nav-wrapper">
                    <nav class="nav-main">
                        <ul>
                            <li class="hide-for-large">
                                <NuxtLink to="/" exact>Accueil</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/expertises">Expertises</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/realisations">Réalisations</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/agence">Agence</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/contact">Contact</NuxtLink>
                            </li>
                        </ul>
                    </nav>
                    <NavSocial />
                </div>
            </transition>
        </div>
    </header>
</template>

<script>
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export default {
    data() {
        return {
            isOpen: false,
        };
    },
    watch: {
        $route() {
            this.isOpen = false;
            enableBodyScroll(this.$refs.nav);
        },
    },
    beforeDestroy() {
        clearAllBodyScrollLocks();
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen;
            if (this.isOpen) {
                disableBodyScroll(this.$refs.nav);
            } else {
                enableBodyScroll(this.$refs.nav);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.header {
    position: absolute;
    z-index: 10;
    top: 0;
    width: 100%;
}
.header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 22px 20px;
    color: $color-black;
    .realisations-slug & {
        color: $color-white;
    }
    @media (min-width: 1024px) {
        padding: 38px 40px;
        color: $color-black;
        .realisations-slug & {
            color: $color-white;
        }
    }
}
nav {
    ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }
}
a {
    color: currentColor;
}
.nav-wrapper {
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    will-change: auto;
    background-color: $color-blue;
    align-items: center;
    justify-content: center;
    clip-path: circle(max(150vh, 150vw) at 100% 0);
    transform: translate3d(0, 0, 0);
    padding: 22px;
    @media (max-width: 1023px) {
        color: $color-white;
    }
    @media (min-width: 1024px) {
        display: flex !important;
        position: static;
        clip-path: none;
        flex-direction: row;
        background-color: transparent;
        padding: 0;
        display: flex;
        align-items: center;
    }
    .icon-logo {
        position: absolute;
        top: 22px;
        left: 20px;
        @media (min-width: 1024px) {
            display: none;
        }
    }
}
.nav-main {
    ul {
        display: flex;
        flex-direction: column;
        // align-items: center;
        @media (min-width: 1024px) {
            flex-direction: row;
        }
    }
    a {
        position: relative;
        display: inline-block;
        font-size: 40px;
        padding: 20px 0;
        transition: transform 150ms ease;
        @media (min-width: 1024px) {
            padding: 10px clamp(20px, 2.2vw, 35px);
            font-size: 20px;
        }
        &::before {
            content: '\2022';
            position: absolute;
            left: -40px;
            opacity: 0;
            transition: opacity 150ms ease;
            @media (min-width: 1024px) {
                left: 50%;
                transform: translateX(-50%);
                top: 75%;
                opacity: 0;
            }
        }
        &.nuxt-link-active {
            @media (max-width: 1023px) {
                transform: translateX(40px);
            }
            &::before {
                color: currentColor;
                opacity: 1;
                @media (min-width: 1024px) {
                    top: 100%;
                    color: currentColor;
                }
            }
        }
        @media (hover: hover) {
            &:hover {
                @media (max-width: 1023px) {
                    transform: translateX(40px);
                }
                &::before {
                    opacity: 1;
                    @media (min-width: 1024px) {
                        top: 100%;
                        color: $color-blue;
                    }
                }
            }
        }
    }
}
.nav-social {
    position: absolute;
    bottom: 40px;
    margin-left: -4.5%;
    @media (min-width: 1024px) {
        margin-left: 40px;
        position: static;
    }
    a {
        display: flex;
        padding: 10px;
        transition: opacity 150ms ease;
        color: currentColor;
        &:hover {
            opacity: 0.7;
        }
    }
}
.icon-logo {
    width: 126px;
}
.icon-logo-hero {
    width: 330px;
    position: absolute;
    left: -65px;
    top: -100px;
    fill: $color-blue;
    @media (min-width: 1024px) {
        width: 40vw;
        max-width: 850px;
        left: -8%;
        top: 38px;
    }
    &.desktop-only {
        display: none;
        @media (min-width: 1024px) {
            display: block;
        }
    }
    &.mobile-only {
        @media (min-width: 1024px) {
            display: none;
        }
    }
}
.icon-social {
    height: 24px;
    width: 24px;
}
.btn-menu {
    position: relative;
    z-index: 999;
    appearance: none;
    border: none;
    background: none;
    padding: 0;
    color: currentColor;
    transition-delay: 500ms;
    @media (min-width: 1024px) {
        display: none;
    }
    .line {
        width: 36px;
        height: 2px;
        border-radius: 2px;
        background-color: currentColor;
        display: block;
        margin: 5px auto;
        transition: all 0.3s ease-in-out;
    }
    &.is-open {
        color: $color-white;
        transition-delay: 0ms;
        .line {
            &:nth-child(2) {
                opacity: 0;
            }
            &:nth-child(1) {
                transform: translateY(7px) rotate(45deg);
            }
            &:nth-child(3) {
                transform: translateY(-7px) rotate(-45deg);
            }
        }
    }
}
.hide-for-large {
    @media (min-width: 1024px) {
        display: none;
    }
}
.v-enter-active,
.v-leave-active {
    transition: clip-path 750ms cubic-bezier(0.32, 0, 0.67, 0);
}
.v-enter,
.v-leave-to {
    clip-path: circle(0% at 100% 0);
}
</style>
