<template>
    <header class="max-width-container">
        <NuxtLink to="/">
            <img v-if="$route.name === 'index'" inline class="icon-logo" src="@/assets/svg/logo.svg" alt="Hélium" />
            <img v-else inline class="icon-logo" src="@/assets/svg/logo-big.svg" alt="Hélium" />
        </NuxtLink>
        <div class="nav-wrapper">
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
            <nav class="nav-social">
                <ul>
                    <li>
                        <!-- TODO: Lien -->
                        <a href="" target="_blank">
                            <span class="visuallyhidden">Facebook</span>
                            <img inline class="icon-social" src="@/assets/svg/facebook.svg" alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <!-- TODO: Lien -->
                        <a href="" target="_blank">
                            <span class="visuallyhidden">Instagram</span>
                            <img inline class="icon-social" src="@/assets/svg/instagram.svg" alt="Instagram" />
                        </a>
                    </li>
                    <li>
                        <!-- TODO: Lien -->
                        <a href="" target="_blank">
                            <span class="visuallyhidden">Behance</span>
                            <img inline class="icon-social" src="@/assets/svg/behance.svg" alt="Behance" />
                        </a>
                    </li>
                    <li>
                        <!-- TODO: Lien -->
                        <a href="" target="_blank">
                            <span class="visuallyhidden">LinkedIn</span>
                            <img inline class="icon-social" src="@/assets/svg/linkedin.svg" alt="LinkedIn" />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 38px 20px;
}
nav {
    ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }
}
.nav-wrapper {
    display: flex;
    align-items: center;
}
.nav-main {
    padding-right: 25px;
    a {
        position: relative;
        display: inline-block;
        font-size: 20px;
        padding: 10px 35px;
        &::before {
            content: '\2022';
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 100%;
            opacity: 0;
            transition: all 150ms ease;
        }
        &.nuxt-link-exact-active,
        &:hover {
            &::before {
                color: $color-blue;
                opacity: 1;
            }
        }
        &.nuxt-link-exact-active {
            &::before {
                color: $color-black;
            }
        }
    }
}
.nav-social {
    a {
        display: flex;
        padding: 10px;
        transition: all 150ms ease;
        &:hover {
            opacity: 0.7;
        }
    }
}
.icon-logo {
    width: 126px;
}
.icon-social {
    width: 24px;
}
a {
    color: currentColor;
    text-decoration: none;
}
</style>
