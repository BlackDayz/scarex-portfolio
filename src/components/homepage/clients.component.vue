<template>
    <section class="section-clients">
            <div class="section-clients--client" v-for="client in clients" :key="client" @click="redirectToClient">
                <div hidden :data-link="`${baseClientUrl}${client.link}`"></div>
                <img :src="fetchImgPath(client.logoImg)" :alt="client.name">
                <div class="section-clients--client--text">
                    <p>{{ client.name }} | {{ client.type }}</p>
                    <span>{{ client.time }}</span>
                </div>
            </div>
    </section>
</template>

<script>
import clients from '../../assets/json/clients.json';

export default {
    name: 'ClientsComponent',
    data() {
        return {
            baseClientUrl: '/clients',
            clients: clients.clients
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
        },

        fetchImgPath(logoImg) {
            return require(`@/assets/img/clients/${logoImg}`);
        }
    },

};
</script>