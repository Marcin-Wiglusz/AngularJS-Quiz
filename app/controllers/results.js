(function(){

  angular
    .module('QuizApp')
    .controller('resultsController', resultsFunction);

    //for resultsActive
    resultsFunction.$inject = ['quizFactory', 'questionsService'];

    function resultsFunction(quizFactoryData, questionsServiceData) {

      this.quizFactory = quizFactoryData;
      this.questionsService = questionsServiceData;
      this.activeQuestion = 0

      this.setActiveQuestion = function setActiveQuestion(index) {
        this.activeQuestion = index;
      }

      this.getAnswerClass = function getAnswerClass(index) {

        if (index === quizFactoryData.correctAnswers[this.activeQuestion]) {
          return 'bg-success';
        }
        else if (index === questionsServiceData.quizQuestions[this.activeQuestion].selected) {
          return 'bg-danger';
        }
      }

      this.endScorePerc = function endScorePerc() {

        return quizFactoryData.sumOfCorrAnswers / questionsServiceData.quizQuestions.length * 100;
      }

      this.reset = function reset() {
        quizFactoryData.changeState("results", false);
        quizFactoryData.sumOfCorrAnswers = 0;

        for (var i = 0; i < questionsServiceData.quizQuestions.length; i++) {
          questionsServiceData.quizQuestions[i].selected = null;
          questionsServiceData.quizQuestions[i].correct = null;          
        }
      }
    }

})();
