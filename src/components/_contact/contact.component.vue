<template>
    <section class="section-contact">
        <h2><span class="text-highlight-yellow">Überzeugt?</span></h2>
        <a :href="`mailto:${email}`">{{ email }}</a>
    </section>
</template>

<script>
export default {
    // eslint-disable-next-line
    name: 'ContactComponent',
    data() {
        return {
            email: 'business.scarex@gmail.com'
        };
    },
};
</script>