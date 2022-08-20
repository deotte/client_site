<template>
  <h1>Quiz Results</h1>
  <div v-for="question of questions" :key="question.step" class="summaryQuestion">
    <h2>{{ question.question }}</h2>
    <p>{{ question.answer }}</p>
    <button v-on:click="editQuestion(question.step)">Edit Answer</button>
  </div>
</template>

<script>
export default {
  name: 'SummaryPage',
  emits: ['edit-question'],
  props: {
    questions: Array
  },
  data() {
    return {
    }
  },
  methods: {
    editQuestion(step) {
      this.$emit('edit-question', step);
    }
  }
}
</script>

<style scoped>
</style>