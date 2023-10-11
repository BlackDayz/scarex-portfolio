<template>
    <footer class="section-footer">
        <hr />
        <p>
            <a href="/privacy" class="link link--footer">
                {{ snippets.footer.privacy }}
            </a>
            |
            <a href="/imprint" class="link link--footer">
                {{ snippets.footer.imprint }}
            </a>
            |
            <span class="footer__copy">&copy; {{ year }} {{ snippets.footer.copy }}</span>
        </p>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent',
    data() {
        return {
            year: new Date().getFullYear(),
            snippets: {
                footer: {
                    privacy: 'Datenschutz',
                    imprint: 'Impressum',
                }
            }
        };
    }
};
</script>