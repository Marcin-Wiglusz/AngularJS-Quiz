(function() {

  angular
    .module('QuizApp')
    .factory('quizFactory', quizFactoryFunc);

    // data from factories can be passed to different controllers as they can't comunnicate between each other
    function quizFactoryFunc() {

      var quizObject = {
        quizActive: false,
        changeState: function(state) {

          quizObject.quizActive = state;
        }
      };
      return quizObject;
    }

})();
