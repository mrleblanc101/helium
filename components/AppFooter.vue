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
            <nav class="nav-social">
                <ul>
                    <li>
                        <!-- TODO: Lien -->
                        <a href="" target="_blank">
                            <span class="visuallyhidden">Facebook</span>
                            <img inline class="icon-social" src="@/assets/svg/facebook.svg" />
                        </a>
                    </li>
                    <li>
                        <!-- TODO: Lien -->
                        <a href="" target="_blank">
                            <span class="visuallyhidden">Instagram</span>
                            <img inline class="icon-social" src="@/assets/svg/instagram.svg" />
                        </a>
                    </li>
                    <li>
                        <!-- TODO: Lien -->
                        <a href="" target="_blank">
                            <span class="visuallyhidden">Behance</span>
                            <img inline class="icon-social" src="@/assets/svg/behance.svg" />
                        </a>
                    </li>
                    <li>
                        <!-- TODO: Lien -->
                        <a href="" target="_blank">
                            <span class="visuallyhidden">LinkedIn</span>
                            <img inline class="icon-social" src="@/assets/svg/linkedin.svg" />
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="col-infos">
                <h2>Travaillons ensemble!</h2>
                <div class="contact-wrapper">
                    <div>
                        <a href="mailto:info@agencehelium.com">info@agencehelium.com</a>
                        <a href="tel:418-961-8858">(418) 961-8858</a>
                    </div>
                    <NuxtLink to="/contact">
                        <img
                            inline
                            class="icon-contact"
                            src="@/assets/svg/contactez-nous.svg"
                        />
                        <span class="visuallyhidden">Contactez-nous</span>
                    </NuxtLink>
                </div>
            </div>
            <div class="copyright">
                <NuxtLink to="/">
                    <img inline class="icon-logo" src="@/assets/svg/logo.svg" />
                </NuxtLink>
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
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    height: 100vh;
    background-color: $color-blue;
    color: $color-white;
    text-align: center;
    @media (min-width: 768px) {
        text-align: left;
    }
}
.footer-inner {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 24px;
    align-items: center;
    height: 100%;
    padding: 70px 20px;
    @media (min-width: 768px) {
        padding: 0 40px;
        height: (650px + 80px);
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: space-between;
        align-items: stretch;
        gap: 70px;
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
        @media (min-width: 768px) {
            margin: -35px 0;
        }
    }
    a {
        position: relative;
        display: inline-block;
        font-size: 30px;
        padding: 15px 0;
        transition: all 150ms ease;
        @media (min-width: 768px) {
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
    @media (max-width: 767px) {
        order: 3;
    }
    ul {
        display: flex;
        margin: -10px;
    }
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
    width: 400px;
}
.icon-contact {
    width: 90px;
    @media (min-width: 768px) {
        width: 184px;
    }
}
.icon-social {
    width: 24px;
}
.col-infos {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto 0;
    @media (min-width: 768px) {
        margin: 0;
        align-items: flex-end;
    }
    h2 {
        display: inline-block;
        text-align: right;
        font-size: 30px;
        font-weight: 400;
        margin-bottom: 28px;
        @media (min-width: 768px) {
            font-size: 76px;
        }
    }
}
.contact-wrapper {
    display: inline-flex;
    flex-direction: column;
    gap: 10px 30px;
    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        justify-content: space-between;
    }
    a {
        color: $color-alto;
        display: block;
        @media (min-width: 768px) {
            font-size: 30px;
            line-height: 1.3;
        }
        &:hover {
            text-decoration: underline;
        }
    }
}
.copyright {
    text-align: center;
    @media (min-width: 768px) {
        text-align: right;
    }
    @media (max-width: 767px) {
        order: 4;
    }

    a {
        display: none;
        margin-bottom: 40px;
        @media (min-width: 768px) {
            display: block;
        }
    }
}
</style>
