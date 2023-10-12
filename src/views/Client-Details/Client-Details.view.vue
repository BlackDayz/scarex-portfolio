<template>
    <ClientDetailComponent :client="client" />
</template>

<script>
import clients from '../../assets/json/clients.json';
import ClientDetailComponent from '../../components/client-detail/client-detail.component.vue';

export default {
    name: 'ClientDetailsView',
    data() {
        return {
            clients: clients.clients,
            client: {}
        };
    },
    components: {
        ClientDetailComponent
    },

    created() {
        const urlParams = this.$route.params;
        const requestedClient = urlParams.name;

        const client = this.clients.find((client) => client.link === `/${requestedClient}`);

        if(!client) {
            this.$router.push({ name: '404' });
            return;
        }

        this.client = client;
    }
};
</script>