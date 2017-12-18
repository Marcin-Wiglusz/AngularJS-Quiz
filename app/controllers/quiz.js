(function() {

  angular
    .module('QuizApp')
    .controller('quizController', quizFunc);

    quizFunc.$inject = ['quizFactory', 'questionsService'];

    function quizFunc(quizFactoryData, questionsServiceData) {

      this.quizFactory = quizFactoryData;
      this.questionsService = questionsServiceData;
      this.activeQuestion = 0;
      this.error = false;
      this.endQuiz = false;
      // this.setActiveQuestion = setActiveQuestion;

      var numberOfAnswers = 0;

      //index is given from ng-click($index)
      this.setActiveQuestion = function setActiveQuestion(index) {

        // there was no click, so with index as undefined while loop is seeking next unanswered question
        if (index === undefined) {

          // quizLenght will be referencing activeQuestion są (index of last question will always be 1 less than lenght of array)
          var quizLenght = questionsServiceData.quizQuestions.length - 1;
          var breakout = false;

          //while loop is searching for unanswered question while breakout is false
          while (!breakout) {

            // ... = checks if activeQuestion i less than lenght (if so/not ...)
            this.activeQuestion = this.activeQuestion < quizLenght?++this.activeQuestion: 0;

            // if activeQuestion is reseted to 0 (not at the start of quiz but whit above line)
            if (this.activeQuestion === 0) {
              this.error = true
            }
            //if current question is not answered, set breakout to true to break the loop
            if (questionsServiceData.quizQuestions[this.activeQuestion].selected === null) {
              breakout = true;
            }
          }
        }
        // here's all the jumping between the questions
        else {
          this.activeQuestion = index;
        }


      }


      this.questionAnswered = function questionAnswered() {
        var quizLenght = questionsServiceData.quizQuestions.length;

        if (questionsServiceData.quizQuestions[this.activeQuestion].selected !== null) {
          numberOfAnswers++;
          console.log(numberOfAnswers);

          if (numberOfAnswers >= quizLenght) {

            for (var i = 0; i < quizLenght; i++) {
              //loop through questions
              if (questionsServiceData.quizQuestions[i].selected === null) {
                //and if there is any unanswered question, then jump to it
                this.setActiveQuestion(i);
                //end end loop as index to unanswered question is given
                return;
              }
            }
            //
            this.error = false;
            // do if loop wasn't executed and all answers were answered:
            this.endQuiz = true;
            // and exit function to avoid executing this.setActiveQuestion();
            console.log(this.endQuiz);
            return;
          }
        }
        this.setActiveQuestion();
      }

      this.selectAnswer = function selectAnswer(index) {
        // here selected stops beeing null
        questionsServiceData.quizQuestions[this.activeQuestion].selected = index;
      }

      this.quizSummary = function quizSummary() {
        //reset for new Quiz
        this.endQuiz = false;
        numberOfAnswers = 0;
        this.activeQuestion = 0;
        //same as above, false becase you don't want to display Quiz after you finish. true is only on 'Start' button
        quizFactoryData.changeState("quiz", false);
        quizFactoryData.changeState("results", true);
        quizFactoryData.checkAnswers();
      }

    }

})();
