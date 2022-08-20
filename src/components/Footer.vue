<template>
  <footer>
    <h3>Copyright @ {{ currentYear() }} Built by Otters</h3>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style scoped>
</style>