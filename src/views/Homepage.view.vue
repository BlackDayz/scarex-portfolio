<template>
  <SectionTopComponent />
  <ClientsComponent />
  <AboutComponent />
</template>

<script>
import ClientsComponent from '@/components/homepage/clients.component.vue';
import SectionTopComponent from '@/components/homepage/section-top.component.vue';
import AboutComponent from '@/components/homepage/about.component.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Homepage',
  components: {
    SectionTopComponent,
    ClientsComponent,
    AboutComponent,
  }
};
</script>
