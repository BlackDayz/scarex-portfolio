<template>
    <section class="section-legal">
        <h1>{{ snippets.imprint.title }}</h1>
        <div class="section-legal--content" v-html="snippets.imprint.content"></div>
    </section>
</template>

<script>
export default {
    name: 'ImprintView',
    data () {
        return {
            snippets: {
                imprint: {
                    title: 'Impressum',
                    content: `
                        <p></p>
                    `
                }
            }
        };
    },
};
</script>