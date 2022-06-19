<template>
    <div>
        <section>
            <div class="section-inner max-width-container">
                <h1>Votre succès est <br />aussi le nôtre!</h1>
                <div class="bubbles-wrapper">
                    <FloatingBubble class="collaboration-wrapper">
                        <h2>Philosophie</h2>
                        <h3>Humain</h3>
                        <p>
                            Nous sommes là pour vous aider à éclaircir votre vision, trouver les bonnes solutions et
                            surtout, garder les choses simples et compréhensibles.
                        </p>
                    </FloatingBubble>
                    <FloatingBubble class="collaboration-wrapper">
                        <h2>Mission</h2>
                        <h3>Rentabilité</h3>
                        <p>Notre mission avec chaque client est d’avoir le meilleur retour sur investissement.</p>
                    </FloatingBubble>
                    <FloatingBubble class="collaboration-wrapper">
                        <h2>Emplacement</h2>
                        <h3>À Québec</h3>
                        <p>
                            Notre bureau est dans la ville de Québec. Nous acceptons des défis partout dans la province.
                        </p>
                    </FloatingBubble>
                    <FloatingBubble class="collaboration-wrapper">
                        <h2>Expertises</h2>
                        <h3>Méthode de travail</h3>
                        <p>
                            Nous faisons majoritairement affaire avec des pigistes spécialisés dans un secteur pour
                            optimiser le résultat d’un projet.
                        </p>
                    </FloatingBubble>
                </div>
            </div>
        </section>
        <section>
            <div class="section-inner max-width-container">
                <h2>Nos origines</h2>
                <p>
                    Avant la création d’Hélium, notre co-fondateur Vincent, avait créé une entreprise, Boréal Production
                    sur la Côte-Nord, afin d’approfondir ses connaissances dans le milieu. Pendant son BAC en design
                    graphique à l’Université Laval, il a décidé de lancer Hélium. Aujourd’hui, nous faisons la gestion
                    de projets et dirigeons la création de tout ce que nous entreprenons.
                </p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'AgencePage',
};
</script>

<style lang="scss" scoped>
section {
    &:nth-of-type(even) {
        background: $color-black;
        color: $color-white;
    }
}
.section-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
h1 {
    margin: 50vh 0 0;
    font-size: 30px;
    width: 100%;
    font-weight: 400;
    text-align: center;
    align-self: flex-end;
    transform: translateY(-50%);
    @media (min-width: 768px) {
    }
    @media (min-width: 1024px) {
        max-width: 600px;
        font-size: 60px;
        margin: 50vh 9% 0;
    }
}
.bubbles-wrapper {
    display: flex;
    flex-direction: column;
    gap: 32px 0;
    width: calc(100% + 80px);
    margin: 80px -80px;
    max-width: 700px;
    @media (min-width: 768px) {
        width: calc(100% + 120px);
        margin: 80px -120px;
    }
    @media (min-width: 1024px) {
        margin: 150px 0;
        width: 100%;
        max-width: 1055px;
    }
    .floating-bubble {
        width: 300px;
        &:nth-child(odd) {
            align-self: flex-end;
        }
        &:nth-child(even) {
            align-self: flex-start;
        }
        @media (min-width: 550px) {
            margin-bottom: -150px;
            &:last-child {
                margin-bottom: 0;
            }
        }
        @media (min-width: 1024px) {
            width: calc(50% - 50px);
        }
    }
}
</style>
