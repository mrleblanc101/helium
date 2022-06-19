<template>
    <div>
        <section>
            <div class="section-inner max-width-container">
                <div class="section-wrapper">
                    <div class="form-wrapper">
                        <h1>
                            Parlez-nous de votre projet, de vos idées! Nous pourrons ensuite planifier une rencontre,
                            pour en parler plus en détail.
                        </h1>
                        <form>
                            <label class="cell-50">
                                Nom
                                <input type="text" />
                            </label>
                            <label class="cell-50">
                                Entreprise (facultaf)
                                <input type="text" />
                            </label>
                            <label class="cell-50">
                                Telephone
                                <input type="text" />
                            </label>
                            <label class="cell-50">
                                Courriel
                                <input type="text" />
                            </label>
                            <label class="cell-100">
                                Message
                                <textarea rows="6"></textarea>
                            </label>
                            <button class="button primary" type="submit">Envoyer</button>
                        </form>
                    </div>
                    <FloatingBubble class="bubble-wrapper">
                        <h2>Collaboration</h2>
                        <h3>Vous êtes pigiste?</h3>
                        <p>Nous faisons affaire avec des collaborateurs pour nous épauler dans nos projets.</p>
                        <button type="button" class="button secondary">Envoi-nous ton portfolio</button>
                    </FloatingBubble>
                </div>
            </div>
            <img inline class="icon-travaillons-enssemble" src="@/assets/svg/travaillons-enssemble.svg" />
        </section>
    </div>
</template>

<script>
export default {
    name: 'ContactPage',
};
</script>

<style lang="scss" scoped>
.icon-travaillons-enssemble {
    width: 1400px;
    position: fixed;
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    fill: $color-blue;
    max-height: 90vh;
    width: 50vw;
    @media (max-width: 1023px) {
        display: none;
    }
}
section {
    display: flex;
    align-items: center;
    justify-content: center;
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
}
.section-inner {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 1024px) {
        align-items: flex-end;
    }
}
.section-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (min-width: 1024px) {
        margin: 0 8%;
    }
}
.form-wrapper {
    max-width: 600px;
    font-size: 20px;
    h1 {
        font-size: 20px;
        font-weight: 400;
        margin: 0 0 60px;
    }
}
form {
    display: flex;
    flex-wrap: wrap;
    gap: 20px 24px;
    .cell-50 {
        width: 100%;
        @media (min-width: 1024px) {
            width: calc(50% - 12px);
        }
    }
    .cell-100 {
        width: 100%;
    }
    label {
        display: flex;
        flex-direction: column;
    }
    input,
    textarea {
        margin-top: 12px;
        border-radius: 8px;
        padding: 10px;
        border: 1px solid $color-black;
        font-weight: 400;
    }
}
.form-wrapper,
.bubble-wrapper {
    margin: 45px 0;
    @media (min-width: 1024px) {
        margin: 90px 0;
    }
}
</style>
