<template>
    <div class="floating-bubble">
        <slot></slot>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.floating-bubble {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: $color-white;
    background-color: $color-blue;
    border-radius: 50%;
    max-width: 486px;
    aspect-ratio: 1 / 1;
    padding: 40px;
    @media (min-width: 1024px) {
        padding: 70px;
    }
    h2 {
        position: absolute;
        top: 30px;
        font-size: 14px;
        margin: 0;
        font-weight: 400;
        @media (min-width: 1024px) {
            top: 50px;
            font-size: 20px;
        }
    }
    h3 {
        font-size: 22px;
        margin: 0 0 20px;
        @media (min-width: 1024px) {
            font-size: 30px;
        }
    }
    p {
        margin: 0;
        font-size: 16px;
        @media (min-width: 1024px) {
            font-size: 20px;
        }
    }
    .button {
        margin-top: 30px;
    }
}
</style>
