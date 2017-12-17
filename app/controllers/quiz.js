(function() {

  angular
    .module('QuizApp')
    .controller('quizController', quizFunc);

    quizFunc.$inject = ['quizFactory', 'questionsService'];

    function quizFunc(quizFactoryData, questionsServiceData) {

      this.quizFactory = quizFactoryData;
      this.questionsService = questionsServiceData;
      this.activeQuestion = 0;
      // this.setActiveQuestion = setActiveQuestion;

      var numberOfAnswers = 0;


      this.setActiveQuestion = function setActiveQuestion() {
        var breakout = false;
        // quizLenght will be referencing activeQuestion są (index of last question will always be 1 less than lenght of array)
        var quizLenght = questionsServiceData.quizQuestions.length - 1;
        //while loop is searching for unanswered question while breakout is false
        while (!breakout) {
          // ... = checks if activeQuestion i less than lenght (if so/not ...)
          this.activeQuestion = this.activeQuestion < quizLenght?++this.activeQuestion: 0;
          //if current question is not answered, set breakout to true to break the loop
          if (questionsServiceData.quizQuestions[this.activeQuestion].selected === null) {
            breakout = true;
          }
        }
      }


      this.questionAnswered = function questionAnswered() {
        console.log('asdasd');
        var quizLenght = questionsServiceData.quizQuestions.length;

        if (questionsServiceData.quizQuestions[this.activeQuestion].selected !== null) {
          numberOfAnswers++;

          if (numberOfAnswers >= quizLenght) {
            //then end quiz
          }
        }

        this.setActiveQuestion();
      }
    }
})();
