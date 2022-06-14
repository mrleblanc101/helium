<template>
    <footer class="footer">
        <div class="footer-inner max-width-container">
            <nav class="nav-main">
                <ul>
                    <li>
                        <NuxtLink to="/">Accueil</NuxtLink>
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
                </ul>
            </nav>
            <NavSocial />
            <div class="col-infos">
                <h2>Travaillons ensemble!</h2>
                <div class="contact-wrapper">
                    <div class="contact-wrapper-links">
                        <a href="mailto:info@agencehelium.com">info@agencehelium.com</a>
                        <a href="tel:418-961-8858">(418) 961-8858</a>
                    </div>
                    <NuxtLink to="/contact">
                        <img inline class="icon-contact" src="@/assets/svg/contactez-nous.svg" />
                        <span class="visuallyhidden">Contactez-nous</span>
                    </NuxtLink>
                </div>
            </div>
            <div class="copyright">
                <NuxtLink class="logo-wrapper" to="/">
                    <img inline class="icon-logo" src="@/assets/svg/logo.svg" />
                </NuxtLink>
                <NavSocial />
                <small>Tous droits réservés. Agence Hélium © 2022</small>
            </div>
        </div>
    </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
    display: flex;
    align-items: center;
    height: 100vh;
    background-color: $color-blue;
    color: $color-white;
    text-align: center;
    @media (min-width: 1024px) {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        text-align: left;
    }
}
.footer-inner {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 24px;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    padding: 50px 36px;
    @media (min-width: 1024px) {
        padding: 0 40px;
        height: (650px + 80px);
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: space-between;
        align-items: stretch;
    }
}
nav {
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
}
svg {
    fill: $color-white;
}
a {
    color: currentColor;
    text-decoration: none;
}
.nav-main {
    ul {
        margin: -15px 0;
        @media (min-width: 1024px) {
            margin: -35px 0;
        }
    }
    a {
        position: relative;
        display: inline-block;
        font-size: 30px;
        padding: 15px 0;
        transition: all 150ms ease;
        @media (min-width: 1024px) {
            font-size: 60px;
            padding: 35px 0;
        }
        &::before {
            content: '\2022';
            position: absolute;
            left: 0;
            opacity: 0;
            transition: all 150ms ease;
        }
        &:hover {
            padding-left: 40px;
            &::before {
                opacity: 1;
            }
        }
    }
}
.nav-social {
    display: none;
    @media (min-width: 1024px) {
        display: block;
    }
}
.icon-logo {
    width: 400px;
}
.icon-contact {
    width: 90px;
    @media (min-width: 1024px) {
        width: 184px;
    }
}
.col-infos {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 1024px) {
        align-items: flex-end;
    }
    h2 {
        display: inline-block;
        text-align: right;
        font-size: 30px;
        font-weight: 400;
        margin-bottom: 28px;
        margin-top: 0;
        @media (min-width: 1024px) {
            font-size: 70px;
        }
    }
}
.contact-wrapper {
    display: inline-flex;
    flex-direction: column;
    gap: 10px 30px;
    @media (min-width: 1024px) {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        justify-content: space-between;
    }
    a {
        color: $color-alto;
        display: block;
        @media (min-width: 1024px) {
            font-size: 30px;
            line-height: 1.3;
        }
        &:hover {
            text-decoration: underline;
        }
    }
    .contact-wrapper-links {
        display: none;
        @media (min-width: 767px) {
            display: block;
        }
    }
}
.copyright {
    text-align: center;
    @media (min-width: 1024px) {
        text-align: right;
    }
    .nav-social {
        display: flex;
        justify-content: center;
        margin-bottom: 40px;
        @media (min-width: 1024px) {
            display: none;
        }
    }
    .logo-wrapper {
        display: none;
        margin-bottom: 40px;
        @media (min-width: 1024px) {
            display: block;
        }
    }
}
</style>
