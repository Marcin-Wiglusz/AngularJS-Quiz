(function() {

  angular
    .module('QuizApp')
    .controller('quizController', quizFunc);

    quizFunc.$inject = ['quizFactory', 'questionsService'];

    function quizFunc(quizFactoryData, questionsServiceData) {

      this.quizFactory = quizFactoryData;
      this.questionsService = questionsServiceData;

    }
})();
