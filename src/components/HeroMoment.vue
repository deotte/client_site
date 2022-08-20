<template>
  <div class="heroMoment">
    <div class="content">
      <h1>Discover Yourself</h1>
      <h2>From Built by Otters</h2>
      <p>Welcome to our personality test. We're so glad you're here and starting the journey to learn about yourself.</p>
      <button v-on:click="showForm">Take me to the quiz</button>
    </div>
    <div class="logo">
      <img src="../assets/otters.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroMoment',
  emits: ['show-form'],
  methods: {
    showForm() {
      this.$emit('show-form');
    }
  }
}
</script>