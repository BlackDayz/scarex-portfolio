<template>
    <section class="section-about">
        <h2>{{ snippets.about.title }}</h2>
        <p v-html="snippets.about.text"></p>
    </section>
</template>

<script>
export default {
    name: 'aboutComponent',
    data() {
        return {
            snippets: {
                about: {
                    title: 'Über mich',
                    text: `Als <span class="text-highlight-yellow">Videoeditor/Cutter</span> bin ich ständig auf der Suche nach neuen spannenden Projekten und Kooperationsmöglichkeiten.
                    Wenn Sie einen <span class="text-highlight-yellow">erfahrenen und kreativen Partner</span> suchen, bin ich genau der Richtige für Sie. 
                    Wenn Sie Interesse an einer Zusammenarbeit haben oder weitere Informationen benötigen, stehe ich Ihnen gerne zur Verfügung. 
                    Ich bin immer offen für neue <span class="text-highlight-yellow">Herausforderungen</span> und freue mich darauf, Ihre Videos zum Strahlen zu bringen.`,
                },
            }
        };
    },
};
</script>