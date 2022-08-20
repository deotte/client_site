<template>
  <h3>{{ question.question }}</h3>

  <template v-if="question.step === 3">
    <input type="date" id="birthday" v-model="answer"/>
  </template>

  <template v-else-if="question.step === 5">
    <select v-model="answer">
      <option disabled value="">Please select one</option>
      <option value="windows">Windows</option>
      <option value="mac">Mac</option>
    </select>
  </template>

  <template v-else-if="question.step === 6">
    <div class="input"> 
      <label>PC</label>
      <input type="radio" v-model="answer" value="pc" />
    </div>
    <div class="input"> 
      <label>Playstation</label>
      <input type="radio" v-model="answer" value="playstation" />
    </div>
    <div class="input"> 
      <label>Xbox</label>
      <input type="radio" v-model="answer" value="xbox" />
    </div>
    <div class="input"> 
      <label>Nintendo</label>
      <input type="radio" v-model="answer" value="nintendo" />
    </div>
  </template>

  <template v-else>
    <input type="text" id="question.step" v-model="answer"/>
  </template>
</template>

<script>
export default {
  name: 'Step',
  props: {
    question: {}
  },
  data() {
    return {
      answer: ''
    }
  },
  created() {
    if (this.question.answer !== "") {
      this.answer = this.question.answer;
    }
  },
  updated() {
    if (this.question.answer !== "") {
      this.answer = this.question.answer;
    } else if (this.question.answer == "") {
      this.answer = "";
    }
  },
  methods: {
    setAnswer(event) {
      this.answer = event.target.value;
    }
  },
  watch: {
    answer(newAnswer, oldAnswer) {
      if (newAnswer !== oldAnswer) {
        this.$store.commit('answerQuestion', { step: this.question.step, answer: this.answer });
      }
    }
  }
}
</script>

<style scoped>
</style>