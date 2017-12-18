(function() {

  angular
    .module('QuizApp')
    .factory('quizFactory', quizFactoryFunc);

    // data from factories can be passed to different controllers as they can't comunnicate between each other
    function quizFactoryFunc() {

      var quizObject = {
        //for quiz page
        quizActive: false,
        //for result page
        resultsActive: false,
        changeState: function(show, state) {
          //display quiz
          if (show === "quiz") {
            // in activateQuiz (listCtrl) changeState("quiz", true) changes quizActive
            quizObject.quizActive = state;
          }
          //display results page
          else if (show === "results") {
            quizObject.resultsActive = state;
          }
          else {
            return false;
          }
        }
      };
      return quizObject;
    }

})();
