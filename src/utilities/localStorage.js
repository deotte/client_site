export function setQuestionsInLocalStorage(newQuestions) {
  const stringifiedQuestions = JSON.stringify(newQuestions);
  localStorage.setItem("questions", stringifiedQuestions);
}

export function setCurrentQuestionInLocalStorage(newQuestion) {
  const stringifiedQuestion = JSON.stringify(newQuestion);
  localStorage.setItem("currentQuestion", stringifiedQuestion);
}

export function getQuestionsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("questions"));
}

export function getCurrentQuestionFromLocalStorage() {
  return JSON.parse(localStorage.getItem("currentQuestion"));
}
