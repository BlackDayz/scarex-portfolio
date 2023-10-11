<template>
    <section class="section-top">
        <div class="section-top--background-filter"></div>
        <div class="section-top--text">
            <h1><p>{{ snippets.sectionTop.title.hey }}</p>{{ snippets.sectionTop.title.intro }}</h1>
            <h3><span class="text-highlight-yellow">{{ snippets.sectionTop.subtitle.editor }}</span> {{ snippets.sectionTop.subtitle.text }}</h3>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SectionTop',
    data() {
        return {
            snippets: {
                sectionTop: {
                    title: {
                        hey: 'Hey!',
                        intro: 'Ich bin Nico',
                    },
                    subtitle: {
                        editor: 'Video Editor',
                        text: 'für Creator, E-Sportler & Unternehmen'
                    },
                },
            }
        };
    },
};
</script>
