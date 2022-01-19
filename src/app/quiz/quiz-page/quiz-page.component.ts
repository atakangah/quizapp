import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/Quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css'],
})
export class QuizPageComponent implements OnInit {
  questions: Array<any> = [];
  answers: Array<any> = [];
  showAnswers: boolean = false;
  scorePercent: string = '0%';
  numAnswersCorrect: number = -1;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.getRandomQuiz().subscribe(
      (response: Quiz[]) => {
        this.questions = response;
        this.questions.forEach(() => {
          this.answers.push(-1);
        });
      },
      (error: any) => {
        console.log('error', error);
      }
    );
  }

  selectAnswer(answerIndex: number, questionIndex: number): void {
    this.answers[questionIndex] = answerIndex;
  }

  onSubmit(): void {
    let scoreCount: number = 0;

    this.answers.forEach((answer, index) => {
      if (answer === 0 && this.questions[index].correct_answers.answer_a_correct) scoreCount+=1;
      if (answer === 1 && this.questions[index].correct_answers.answer_b_correct) scoreCount+=1;
      if (answer === 2 && this.questions[index].correct_answers.answer_c_correct) scoreCount+=1;
      if (answer === 3 && this.questions[index].correct_answers.answer_d_correct) scoreCount+=1;
    });

    this.scorePercent = `${(scoreCount/this.questions.length) * 100}%`;
    this.showAnswers = true;
    this.numAnswersCorrect = scoreCount;
  }
}
