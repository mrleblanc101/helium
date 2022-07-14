<template>
    <div class="floating-bubble">
        <div class="floating-bubble-inner">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.floating-bubble {
    position: relative;
    width: 100%;
    max-width: 486px;
    &::before {
        content: '';
        display: block;
        width: 100%;
        padding-bottom: 100%;
    }
    .floating-bubble-inner {
        width: 100%;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        text-align: center;
        color: $color-white;
        background-color: $color-blue;
        border-radius: 50%;
        padding: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 0 40px 60px rgba(0, 0, 0, 0.16);
        @media (min-width: 1024px) {
            padding: 70px;
        }
    }
    h2 {
        position: absolute;
        top: 30px;
        font-size: 14px;
        margin: 0;
        @media (min-width: 1024px) {
            top: 50px;
            font-size: 20px;
        }
    }
    h3 {
        font-weight: 700;
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
