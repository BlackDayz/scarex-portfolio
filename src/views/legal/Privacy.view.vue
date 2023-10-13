<template>
    <section class="section-legal">
        <h1>{{ snippets.privacy.title }}</h1>
        <div class="section-legal--content" v-html="snippets.privacy.content"></div>
    </section>
</template>

<script>
export default {
    name: 'PrivacyView',
    data () {
        return {
            snippets: {
                privacy: {
                    title: 'Datenschutzerklärung',
                    content: `
                        <p></p>
                    `
                }
            }
        };
    },
};
</script>