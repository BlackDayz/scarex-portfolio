<template>
  <header class="header-main">
    <router-link to="/">
      <div class="header-main-logo-text">
        <span class="fade-out-text">{{ snippets.header.logo.text }}</span>
        <span class="fade-in-text">{{ snippets.header.logo.fadeInText }}</span>
      </div>
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      snippets: {
        header: {
          logo: {
            text: 'scarex',
            fadeInText: 'Video Editor'
          },
        },
      }
    };
  },
};
</script>
