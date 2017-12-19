(function() {

  angular
    .module('QuizApp')
    .factory('quizFactory', quizFactoryFunc);

    // need it for correct answers
    quizFactoryFunc.$inject = ['questionsService'];

    // data from factories can be passed to different controllers as they can't comunnicate between each other
    function quizFactoryFunc(questionsServiceData) {

      var quizObject = {
        //for quiz page
        quizActive: false,
        //for result page
        resultsActive: false,
        changeState: changeState,
        checkAnswers: checkAnswers,
        correctAnswers: [],
        sumOfCorrAnswers: 0
      };
      return quizObject;

      function changeState(show, state) {
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

      function checkAnswers() {

        quizObject.correctAnswers = questionsServiceData.correctAnswers;

        for (var i = 0; i < questionsServiceData.quizQuestions.length; i++) {
          if (questionsServiceData.quizQuestions[i].selected === quizObject.correctAnswers[i]) {
            //correct answer if above
            questionsServiceData.quizQuestions[i].correct = true;
            quizObject.sumOfCorrAnswers++;
          }
          else {
            questionsServiceData.quizQuestions[i].correct = false;
          }
        }
      }
    }

})();
