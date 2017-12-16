(function() {

  angular
    .module('QuizApp')
    .factory('quizMetrics', quizMetricsFunc);

    // data from factories can be passed to different controllers as they can't comunnicate between each other
    function quizMetricsFunc() {

      var quizObject = {
        quizActive: false,
        changeState: function(state) {

          quizObject.quizActive = state;
        }
      };
      return quizObject;
    }

})();
