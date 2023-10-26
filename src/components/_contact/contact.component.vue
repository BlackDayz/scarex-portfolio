<template>
    <section class="section-contact">
        <h2><span class="text-highlight-yellow">{{ snippet.contact.convinced }}</span></h2>
        <router-link :to="contactForm">{{ email }}</router-link>
    </section>
</template>

<script>
export default {
    // eslint-disable-next-line
    name: 'ContactComponent',
    data() {
        return {
            email: 'business.scarex@gmail.com',
            contactForm: '/contact',
            snippet: {
                contact: {
                    convinced: 'Überzeugt?'
                }
            }
        };
    },
};
</script>