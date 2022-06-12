<template>
    <div>
        <section>
            <div class="section-inner max-width-container">
                <h1>
                    Nous aidons les marques<br />
                    à acquérir un avantage concurrentiel<br />
                    dans le monde de demain.
                </h1>
                <div>
                    <span v-for="i in 10" :key="i">Bienvenue dans l’extension de votre équipe • </span>
                </div>
            </div>
        </section>
        <section>
            <div class="section-inner max-width-container">
                <h2>Section 2</h2>
            </div>
        </section>
        <section>
            <div class="section-inner max-width-container">
                <h2>Section 3</h2>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>
