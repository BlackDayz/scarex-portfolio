<template>
  <HeaderComponent />
  <SectionTopComponent />
  <ClientsComponent />
</template>

<script>
import ClientsComponent from '@/components/homepage/clients.component.vue';
import HeaderComponent from '@/components/homepage/header.component.vue';
import SectionTopComponent from '@/components/homepage/section-top.component.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Homepage',
  components: {
    HeaderComponent,
    SectionTopComponent,
    ClientsComponent,
  }
};
</script>
