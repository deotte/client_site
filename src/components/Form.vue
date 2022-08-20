<template>
  <div class="formWrapper">
    <SummaryPage v-if="onSummaryPage" :questions="questions" @edit-question="showFormAndEditQuestion"></SummaryPage>
    <div class="container" v-else>
      <div class="currentStep">
        <!-- <button :class="currentTheme" v-on:click="changeTheme">Change Theme</button> -->
        <h2>Step {{ currentQuestion.step }} of {{ questions.length }}</h2>
        <Step :question="currentQuestion"></Step>
  
        <div class="buttons">
          <button :class="currentTheme" v-on:click="goToPreviousQuestion" v-if="currentQuestionIsNotFirst" id="previous-btn">Previous</button>
  
          <button :class="currentTheme" v-on:click="submitForm" v-if="currentQuestionIsLast" id="submit-form">Submit Form</button>
          <button :class="currentTheme" v-on:click="goToNextQuestion" id="next-btn" v-else>Next</button>
        </div>
      </div>
      <div class="image">
        <img src="../assets/halloween.png" v-if="currentTheme === 'halloween'" />
        <img src="../assets/otter.png" v-else-if="currentTheme === 'normal'" />
        <button :class="currentTheme" v-on:click="changeTheme">Change Theme</button>

      </div>
    </div>
  </div>
</template>

<script>
import {
  getCurrentQuestionFromLocalStorage,
  getQuestionsFromLocalStorage,
} from "../utilities/localStorage";

import SummaryPage from "../components/SummaryPage.vue";
import Step from "../components/Step.vue";

export default {
  name: "Form",
  components: {
    SummaryPage,
    Step
  },
  created() {
    this.checkLocalStorage();
  },
  data() {
    return {
      onSummaryPage: false
    }
  },
  methods: {
    changeTheme() {
      if (this.currentTheme === 'normal') {
        this.$store.commit('setThemeToHalloween');
      } else if (this.currentTheme === 'halloween') {
        this.$store.commit('setThemeToNormal');
      }
    },
    checkLocalStorage() {
      const questionsFromLocalStorage = getQuestionsFromLocalStorage();
      const currentQuestion = getCurrentQuestionFromLocalStorage();

      if (questionsFromLocalStorage && questionsFromLocalStorage.length) {
        this.$store.commit("setQuestions", questionsFromLocalStorage);
      }

      if (currentQuestion !== null && Object.keys(currentQuestion).length > 0) {
        this.$store.commit("setCurrentQuestion", currentQuestion.step);
      } else {
        this.$store.commit("autoSelectFirstQuestion");
      }
    },
    goToNextQuestion() {
      this.$store.commit('setToNextQuestion', this.currentQuestion.step);
      console.log(this.currentQuestion);
    },
    goToPreviousQuestion() {
      this.$store.commit('setToPreviousQuestion', this.currentQuestion.step);
      console.log(this.currentQuestion);
    },
    showFormAndEditQuestion(step) {
      this.onSummaryPage = false;
      this.$store.commit('setCurrentQuestion', step);
    },
    submitForm() {
      this.onSummaryPage = true;
    }
  },
  computed: {
    questions() {
      return this.$store.state.questions;
    },
    currentQuestion() {
      return this.$store.state.currentQuestion;
    },
    currentQuestionIsNotFirst() {
      return this.currentQuestion !== this.questions[0];
    },
    currentQuestionIsLast() {
      return this.currentQuestion === this.questions[this.questions.length - 1];
    },
    currentTheme() {
      return this.$store.state.currentTheme;
    }
  },
};
</script>

<style scoped>
</style>