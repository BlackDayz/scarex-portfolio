<template>
  <section class="section-contact-form">
    <p v-html="response"></p>
    <form @submit="sendEmail">
      <label><span class="text-highlight-yellow">Name</span></label>
      <input type="text" v-model="inputs.name" name="name" placeholder="Your Name" required>
      <label><span class="text-highlight-yellow">Email</span></label>
      <input type="email" v-model="inputs.email" name="email" placeholder="Your Email" required>
      <label><span class="text-highlight-yellow">Message</span></label>
      <textarea name="message" v-model="inputs.message" cols="30" rows="5" placeholder="Message" required></textarea>

      <input type="submit" value="Send">
    </form>
  </section>
</template>

<script>
import emailjs from 'emailjs-com';
export default {
  // eslint-disable-next-line
  name: 'ContactFormComponent',
  data() {
    return {
      sent: false,
      response: '',
      snippets: {
        sending: 'Deine Nachricht wird vorbereitet und gesendet...',
        success: '<span class="text-highlight-yellow">Deine Nachricht wurde erfolgreich gesendet!</span>',
        error: '<span style="color: red;">Beim Senden ist ein Fehler aufgetreten. Bitte lade die Seite neu und versuche es erneut. Fehler: '
      },
      emailConfig: {
        targetEmail: 'business.scarex@gmail.com',
        serviceId: 'service_9zlfc6r',
        templateId: 'template_ydtk36a',
        userId: 'GWGejU9WHXmTh3F5R'
      },
      inputs: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    sendEmail(e) {
      e.preventDefault();
      const me = this;

      if(me.sent) return;
      me.sent = true;

      me.response = me.snippets.sending;
      emailjs.sendForm(me.emailConfig.serviceId, me.emailConfig.templateId, e.target, me.emailConfig.userId)
        .then(function () {
          me.response = me.snippets.success;
          e.target.style.display = 'none';
        }).catch(function (error) {
          me.response = `${me.snippets.error} ${error} </span>`;
          console.error('FAILED...', error);
        });
    },
  },
};
</script>