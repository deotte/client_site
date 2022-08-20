import { createStore } from "vuex";
import { setCurrentQuestionInLocalStorage, setQuestionsInLocalStorage } from "../utilities/localStorage"
import formQuestions from "../utilities/formQuestions";

export default createStore({
  state() {
    return {
      currentQuestion: {},
      questions: formQuestions,
      currentTheme: 'halloween'
    };
  },
  mutations: {
    answerQuestion(state, { step, answer }) {
      const question = state.questions.find((q) => q.step === step);
      question.answer = answer;
      setQuestionsInLocalStorage(state.questions);
    },
    autoSelectFirstQuestion(state) {
      const firstQuestion = state.questions[0];
      state.currentQuestion = firstQuestion;
    },
    setCurrentQuestion(state, step) {
      const question = state.questions.find((q) => q.step === step);
      state.currentQuestion = question;
      setCurrentQuestionInLocalStorage(state.currentQuestion);
    },
    setThemeToNormal(state) {
      state.currentTheme = 'normal';
    },
    setThemeToHalloween(state) {
      state.currentTheme = 'halloween';
    },
    setToPreviousQuestion(state, currentStep) {
      const question = state.questions.find(q => q.step === currentStep - 1);
      state.currentQuestion = question;
      setCurrentQuestionInLocalStorage(state.currentQuestion);
    },
    setToNextQuestion(state, currentStep) {
      const question = state.questions.find(q => q.step === currentStep + 1);
      state.currentQuestion = question;
      setCurrentQuestionInLocalStorage(state.currentQuestion);
    },
    setQuestions(state, questions) {
      state.questions = questions;
    }
  }
})