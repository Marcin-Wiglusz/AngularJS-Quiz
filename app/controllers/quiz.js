(function() {

  angular
    .module('QuizApp')
    .controller('quizController', quizFunc);

    quizFunc.$inject = ['quizFactory', 'questionsService'];

    function quizFunc(quizFactoryData, questionsService) {

      this.quizFactory = quizFactoryData;

    }
})();
