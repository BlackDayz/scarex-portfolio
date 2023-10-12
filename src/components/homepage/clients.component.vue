<template>
    <section class="section-clients">
            <div class="section-clients--client" v-for="client in clients" :key="client" >
                <router-link :to="`${baseClientUrl}${client.link}`">
                    <div hidden :data-link="`${baseClientUrl}${client.link}`"></div>
                    <img :src="fetchImgPath(client.logoImg)" :alt="client.name">
                    <div class="section-clients--client--text">
                        <p>{{ client.name }} | {{ client.type }}</p>
                        <span>{{ client.time }}</span>
                    </div>
                </router-link>
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
        fetchImgPath(logoImg) {
            return require(`@/assets/img/clients/${logoImg}`);
        }
    },

};
</script>