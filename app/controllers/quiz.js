(function() {

  angular
    .module('QuizApp')
    .controller('quizController', quizFunc);

    quizFunc.$inject = ['quizMetrics'];

    function quizFunc(quizMetricsData) {

      this.quizMetrics = quizMetricsData;

    }
})();
