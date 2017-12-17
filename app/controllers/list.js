// Immediately Invoking Function Expression (IIFE)
// function with all it's code will run automatically when the page is run
(function() {

  angular
    .module('QuizApp')
    .controller('listController', listFunc);

    // injecting quizMetrics.js and questionsService.js data to listController
    listFunc.$inject = ['quizFactory', 'questionsService'];

    function listFunc(quizFactoryData, questionsServiceData) {

      this.data = questionsServiceData.quizData;
      this.activeRuler = {};

      // typing will change value on controller
      this.search = "";

      // quizObject is passed from quizMetrics.js under an argument and set as quizMetrics value. Access to quizActive is possible
      this.quizFactory = quizFactoryData;


      this.toggleRulerInfo = function toggleRulerInfo(index) {
        this.activeRuler = index;
      }


      this.activateQuiz = function activateQuiz() {
        console.log('gggg');
        // changeState from factory (quizMetrics passed as listFunc argument)
        //by default quizActive is false (for ng-hide). Calling changeState with 'true' as argument, sets quizObject.quizActive to true and hides list
        quizFactoryData.changeState(true);
      }
    }

})();
