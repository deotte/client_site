<script>
import HelloWorld from './components/HelloWorld.vue'
import Form from "./components/Form.vue"
import store from './store';
import HeroMoment from './components/HeroMoment.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Form,
    HeroMoment,
    Footer
},
  data() {
    return {
      formHidden: true
    }
  },
  methods: {
    showForm() {
      this.formHidden = false;
    }
  }
}
</script>

<template>
  <HeroMoment @show-form="showForm" v-if="formHidden"></HeroMoment>
  <Form v-else></Form>

  <Footer></Footer>
</template>

<style>
@import "./reset.css";
@import "./style.css";
@import "./heroMoment.css";
@import "./form.css";
@import "./theme.css";
</style>
