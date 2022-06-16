<template>
    <div>
        <section>
            <div class="section-inner max-width-container">
                <div class="form-wrapper">
                    <p>
                        Parlez-nous de votre projet, de vos idées! Nous pourrons ensuite planifier une rencontre, pour
                        en parler plus en détail.
                    </p>
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
                <div class="collaboration-wrapper">
                    <h2>Collaboration</h2>
                    <h3>Vous êtes pigiste?</h3>
                    <p>Nous faisons affaire avec des collaborateurs pour nous épauler dans nos projets.</p>
                    <button type="button" class="button secondary">Envoi-nous ton portfolio</button>
                </div>
                <img inline class="icon-travaillons-enssemble" src="@/assets/svg/travaillons-enssemble.svg" />
            </div>
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
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    fill: $color-blue;
    @media (max-width: 767px) {
        display: none;
    }
}
section {
    display: flex;
    align-items: center;
    justify-content: center;
}
.section-inner {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
}
.form-wrapper {
    max-width: 600px;
    font-size: 20px;
    p {
        margin-bottom: 60px;
    }
}
form {
    display: flex;
    flex-wrap: wrap;
    gap: 20px 24px;
    .cell-50 {
        width: 100%;
        @media (min-width: 768px) {
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
    }
}
.form-wrapper,
.collaboration-wrapper {
    padding: 45px 0;
    @media (min-width: 768px) {
        padding: 90px 0;
    }
}
.collaboration-wrapper {
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
    width: calc(100% + 30px);
    aspect-ratio: 1 / 1;
    padding: 40px;
    margin: 0 -15px;
    @media (min-width: 768px) {
        padding: 70px;
    }
    h2 {
        position: absolute;
        top: 30px;
        font-size: 14px;
        margin: 0;
        font-weight: 400;
        @media (min-width: 768px) {
            top: 50px;
            font-size: 20px;
        }
    }
    h3 {
        font-size: 22px;
        margin: 0 0 20px;
        @media (min-width: 768px) {
            font-size: 30px;
        }
    }
    p {
        margin-top: 0;
        margin-bottom: 30px;
        font-size: 16px;
        @media (min-width: 768px) {
            font-size: 20px;
        }
    }
}
</style>
