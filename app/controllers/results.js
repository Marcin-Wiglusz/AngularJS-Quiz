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
    }

})();
