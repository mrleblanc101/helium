<template>
    <nav class="nav-social">
        <ul>
            <li>
                <a href="https://www.facebook.com/agencehelium" target="_blank">
                    <span class="visuallyhidden">Facebook</span>
                    <img inline class="icon-social" src="@/assets/svg/facebook.svg" />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/agencehelium_" target="_blank">
                    <span class="visuallyhidden">Instagram</span>
                    <img inline class="icon-social" src="@/assets/svg/instagram.svg" />
                </a>
            </li>
            <li>
                <a href="https://www.behance.net/agencehelium" target="_blank">
                    <span class="visuallyhidden">Behance</span>
                    <img inline class="icon-social" src="@/assets/svg/behance.svg" />
                </a>
            </li>
            <!-- TODO: Lien -->
            <!-- <li>
                <a href="" target="_blank">
                    <span class="visuallyhidden">LinkedIn</span>
                    <img inline class="icon-social" src="@/assets/svg/linkedin.svg" />
                </a>
            </li> -->
        </ul>
    </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
ul {
    list-style: none;
    margin: -10px;
    padding: 0;
    display: flex;
}
a {
    color: currentColor;
    text-decoration: none;
    display: flex;
    padding: 10px;
    transition: all 150ms ease;
    &:hover {
        opacity: 0.7;
    }
}
.icon-social {
    width: 24px;
}
</style>
