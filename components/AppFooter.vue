<template>
    <footer>
        <div class="footer-inner max-width-container">
            <div class="col-menu">
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
            <div class="col-infos">
                <div>
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
                                alt="Contactez-nous"
                            />
                            <span class="visuallyhidden">Contactez-nous</span>
                        </NuxtLink>
                    </div>
                </div>
                <div class="copyright">
                    <NuxtLink to="/"
                        ><img inline class="icon-logo" src="@/assets/svg/logo.svg" alt="Hélium"
                    /></NuxtLink>
                    <div><small>Tous droits réservés. Agence Hélium © 2022</small></div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    min-height: 100vh;
    background-color: $color-blue;
    color: $color-white;
}
.footer-inner {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
nav {
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
}
.nav-main {
    ul {
        margin: -35px 0;
    }
    a {
        position: relative;
        display: inline-block;
        font-size: 60px;
        padding: 35px 0;
        transition: all 150ms ease;
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
    margin-top: 90px;
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
    width: 184px;
}
.icon-social {
    width: 24px;
}
svg {
    fill: $color-white;
}
a {
    color: currentColor;
    text-decoration: none;
}
.col-infos {
    display: flex;
    flex-direction: column;
}
.copyright {
    text-align: right;
    margin-top: auto;
    svg {
        margin-bottom: 40px;
    }
}
h2 {
    font-size: 76px;
    font-weight: 400;
    margin-bottom: 28px;
}
.contact-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
        font-size: 30px;
        line-height: 1.3;
        color: $color-alto;
        display: block;
        transition: all 150ms ease;
        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
