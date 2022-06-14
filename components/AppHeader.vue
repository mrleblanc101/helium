<template>
    <header class="header max-width-container" :class="{ 'is-open': isOpen }">
        <NuxtLink to="/">
            <img v-if="$route.name === 'index'" inline class="icon-logo" src="@/assets/svg/logo.svg" alt="Hélium" />
            <img v-else inline class="icon-logo-big" src="@/assets/svg/logo-expertises.svg" alt="Hélium" />
        </NuxtLink>
        <button type="button" class="btn-menu" :class="{ 'is-open': isOpen }" @click="isOpen = !isOpen">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </button>
        <div class="nav-wrapper">
            <NuxtLink to="/">
                <img inline class="icon-logo" src="@/assets/svg/logo.svg" alt="Hélium" />
            </NuxtLink>
            <nav class="nav-main">
                <ul>
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
    </header>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
        };
    },
    watch: {
        $route() {
            this.isOpen = false;
        },
    },
};
</script>

<style lang="scss" scoped>
.header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 38px 20px;
    height: 114px;
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
    text-decoration: none;
}
.nav-wrapper {
    position: fixed;
    color: $color-white;
    display: flex;
    flex-direction: column;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100dvh;
    background-color: $color-blue;
    align-items: center;
    justify-content: center;
    transition: clip-path 750ms cubic-bezier(0.32, 0, 0.67, 0);
    transform: translate3d(0, 0, 0);
    clip-path: circle(0% at 100% 0);
    padding: 40px;
    @media (min-width: 1024px) {
        position: static;
        color: $color-black;
        clip-path: none;
        flex-direction: row;
        background-color: transparent;
        padding: 0;
        display: flex;
        align-items: center;
    }
    .is-open & {
        clip-path: circle(max(150vh, 150vw) at 100% 0);
    }
    .icon-logo {
        position: absolute;
        top: 42px;
        left: 20px;
        @media (min-width: 1024px) {
            display: none;
        }
    }
}
.nav-main {
    gap: 0 25px;
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (min-width: 1024px) {
            flex-direction: row;
        }
    }
    a {
        position: relative;
        display: inline-block;
        font-size: 44px;
        padding: 22px 0;
        transition: all 150ms ease;
        @media (min-width: 1024px) {
            padding: 10px 35px;
            font-size: 20px;
        }
        &::before {
            content: '\2022';
            position: absolute;
            left: 0;
            opacity: 0;
            transition: all 150ms ease;
            @media (min-width: 1024px) {
                left: 50%;
                transform: translateX(-50%);
                top: 75%;
                opacity: 0;
            }
        }
        &:hover {
            @media (max-width: 1023px) {
                padding-left: 40px;
            }
            &::before {
                opacity: 1;
                @media (min-width: 1024px) {
                    top: 100%;
                    color: $color-blue;
                }
            }
        }
        &.nuxt-link-exact-active {
            &::before {
                color: currentColor;
            }
        }
    }
}
.nav-social {
    position: absolute;
    bottom: 40px;
    @media (min-width: 1024px) {
        position: static;
    }
    a {
        display: flex;
        padding: 10px;
        transition: all 150ms ease;
        color: currentColor;
        &:hover {
            opacity: 0.7;
        }
    }
}
.icon-logo {
    width: 126px;
}
.icon-logo-big {
    width: 850px;
    position: absolute;
    left: (-130px - 40px);
}
.icon-social {
    width: 24px;
}
.btn-menu {
    position: relative;
    z-index: 999;
    appearance: none;
    border: none;
    background: none;
    padding: 0;
    color: $color-black;
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
        position: fixed;
        right: 20px;
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
</style>
