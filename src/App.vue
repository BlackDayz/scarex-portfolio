<template>
  <HeaderComponent />
  <router-view />
  <ContactComponents />
  <FooterComponent />
</template>

<script>
import HeaderComponent from '@/components/homepage/header.component.vue';
import ContactComponents from '@/components/_contact/contact.component.vue';
import FooterComponent from '@/components/_footer/footer.component.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    ContactComponents,
    FooterComponent,
  },
};
</script>

<style src="@/assets/scss/base.scss" lang="scss"></style>
