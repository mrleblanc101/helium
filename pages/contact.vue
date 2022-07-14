<template>
    <section>
        <div class="section-inner max-width-container">
            <div class="section-wrapper">
                <div class="form-wrapper">
                    <h1>
                        Parlez-nous de votre projet, de vos besoins! Nous pourrons ensuite planifier une rencontre, pour
                        en parler plus en détail.
                    </h1>
                    <form
                        ref="form"
                        action="https://formspree.io/f/mwkydwyv"
                        method="post"
                        @submit.prevent="handleSubmit"
                    >
                        <input type="hidden" name="_language" value="fr" />
                        <label class="cell-50">
                            Nom complet
                            <input type="text" name="name" required />
                            <span v-if="errors.name" class="form-error" v-html="errors.name"></span>
                        </label>
                        <label class="cell-50">
                            Entreprise (facultatif)
                            <input type="text" name="company" />
                            <span v-if="errors.company" class="form-error" v-html="errors.company"></span>
                        </label>
                        <label class="cell-50">
                            Téléphone
                            <input type="tel" name="phone" required />
                            <span v-if="errors.phone" class="form-error" v-html="errors.phone"></span>
                        </label>
                        <label class="cell-50">
                            Courriel
                            <input type="email" name="email" required />
                            <span v-if="errors.email" class="form-error" v-html="errors.email"></span>
                        </label>
                        <label class="cell-100">
                            Message
                            <textarea rows="6" name="message" required></textarea>
                            <span v-if="errors.message" class="form-error" v-html="errors.message"></span>
                        </label>
                        <button class="button primary" type="submit">Envoyer</button>
                    </form>
                </div>
                <FloatingBubble class="bubble-wrapper">
                    <h2>Collaboration</h2>
                    <h3>Vous êtes pigiste?</h3>
                    <p>Nous faisons affaire avec des collaborateurs pour nous épauler dans nos projets.</p>
                    <a href="mailto:info@agencehelium.com" type="button" class="button secondary"
                        >Envoi-nous ton portfolio</a
                    >
                </FloatingBubble>
            </div>
            <img inline class="icon-travaillons-enssemble" src="@/assets/svg/travaillons-enssemble.svg" />
        </div>
    </section>
</template>

<script>
export default {
    name: 'ContactPage',
    data() {
        return {
            errors: {},
        };
    },
    head: {
        title: 'Contact',
    },
    computed: {
        labels() {
            return {
                REQUIRED_FIELD_MISSING: "Ce champ est obligatoire, mais aucune valeur n'a été fournie",
                REQUIRED_FIELD_EMPTY: 'Ce champ est obligatoire, mais une chaîne vide a été fournie',
                TYPE_EMAIL: 'Ce champ doit contenir un courriel',
                TYPE_NUMERIC: 'Ce champ doit contenir un nombre',
                TYPE_TEXT: 'Ce champ doit contenir du texte',
            };
        },
    },
    methods: {
        handleSubmit(event) {
            const form = this.$refs.form;
            const data = new FormData(event.target);
            this.errors = {};
            fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: {
                    Accept: 'application/json',
                },
            })
                .then((response) => {
                    if (response.ok) {
                        this.$toast.success('Merci, nous vous répondrons dans les plus bref délais');
                        form.reset();
                    } else {
                        response.json().then((data) => {
                            if (Object.hasOwn(data, 'errors')) {
                                this.errors = data.errors.reduce((acc, error) => {
                                    acc[error.field] = this.labels[error.code];
                                    return acc;
                                }, {});
                                this.$toast.error(
                                    'Le formulaire est invalide. Veuillez corriger les erreurs et réessayer.',
                                );
                            } else {
                                this.$toast.error('Un problème est servenu lors de la soumission de votre formulaire');
                            }
                        });
                    }
                })
                .catch(() => {
                    this.$toast.error('Un problème est servenu lors de la soumission de votre formulaire');
                });
        },
    },
};
</script>

<style lang="scss" scoped>
.icon-travaillons-enssemble {
    position: absolute;
    right: calc(625px + 15%);
    top: 140px;
    // max-height: 100%;
    pointer-events: none;
    fill: $color-blue;
    z-index: -1;
    width: 100vw;
    @media (max-width: 1023px) {
        display: none;
    }
}
section {
    display: flex;
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
        padding: 100px 7%;
    }
}
.form-wrapper {
    max-width: 600px;
    font-size: 20px;
    h1 {
        font-size: 20px;
        margin: 0 0 60px;
    }
}
form {
    display: grid;
    grid-template-columns: 1fr;
    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }
    gap: 16px 20px;
    .cell-100 {
        grid-column: 1 / span 1;
        @media (min-width: 1024px) {
            grid-column: 1 / span 2;
        }
    }
    label {
        display: flex;
        flex-direction: column;
    }
    input,
    textarea {
        font-size: 16px;
        margin-top: 8px;
        border-radius: 8px;
        padding: 12px 10px;
        border: 1px solid $color-black;
    }
    .button {
        display: block;
        grid-column: 1 / span 1;
        margin-left: auto;
        @media (min-width: 1024px) {
            grid-column: 2 / span 1;
        }
    }
    .form-error {
        font-size: 14px;
        margin-top: 4px;
        color: $color-error;
    }
}
.form-wrapper,
.bubble-wrapper {
    margin: 80px 0 45px;
    @media (min-width: 1024px) {
        margin: 100px 0;
    }
}
</style>
