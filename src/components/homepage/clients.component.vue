<template>
    <section class="section-clients">
            <div class="section-clients--client" v-for="client in clients" :key="client" @click="redirectToClient">
                <div hidden :data-link="`${baseClientUrl}${client.link}`"></div>
                <img :src="client.logo" :alt="client.name">
                <div class="section-clients--client--text">
                    <p>{{ client.name }} | {{ client.type }}</p>
                    <span>{{ client.time }}</span>
                </div>
            </div>
    </section>
</template>

<script>
export default {
    name: 'ClientsComponent',
    data() {
        return {
            baseClientUrl: '/clients',
            clients: [
                {
                    'logo': new URL('@/assets/img/clients/fibi.png', import.meta.url).href,
                    'name': 'Fibi',
                    'type': 'Videoschnitt',
                    'time': '2023 - 2023',
                    'link': '/fibi'
                },
                {
                    'logo': new URL('@/assets/img/clients/waveesports.png', import.meta.url).href,
                    'name': 'Wave Esports',
                    'type': 'Video Editor',
                    'time': '2023 - 2023',
                    'link': '/waveesports'
                },
                {
                    'logo': new URL('@/assets/img/clients/aftereffects.jpg', import.meta.url).href,
                    'name': 'After Effects',
                    'type': '2023',
                    'time': '2023 - 2023',
                    'link': '/aftereffects'
                },
                {
                    'logo': new URL('@/assets/img/clients/tantechanti.png', import.meta.url).href,
                    'name': 'Tante Chanti',
                    'type': 'Videoschnitt',
                    'time': '2023 - 2023',
                    'link': '/tantechanti'
                },
                {
                    'logo': new URL('@/assets/img/clients/rezonay.png', import.meta.url).href,
                    'name': 'Rezon ay',
                    'type': 'YouTube',
                    'time': '2023 - 2023',
                    'link': '/rezonay'
                }
            ]
        };
    },
    methods: {
        isValidUrl(url) {
            const clientsUrl = this.clients.find(client => `${this.baseClientUrl}${client.link}` === url);
            const validUrl = `${this.baseClientUrl}${clientsUrl.link}`;

            return url === validUrl;
        },

        redirectToClient() {
            const url = document.querySelector('[data-link]').dataset.link;
            if(this.isValidUrl(url)) {
                this.$router.push(url);
            }
        }
    }
};
</script>