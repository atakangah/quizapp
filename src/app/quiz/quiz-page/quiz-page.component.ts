import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/Quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css'],
})
export class QuizPageComponent implements OnInit {
  CATEGORIES = [
    'Select category of questions',
    'Linux',
    'Programming',
    'BASH',
    'PHP',
    'Docker',
    'HTML',
    'MYSQL',
    'WordPress',
    'Laravel',
    'Kubernetes',
    'JavaScript',
    'DevOps',
  ];
  DIFFICULTIES = ['Select question difficulty', 'Easy', 'Medium', 'Hard'];

  questionCategory: string = this.CATEGORIES[0];
  questionDifficulty: string = this.DIFFICULTIES[0];
  questionLimit: number = 10;

  questions: Array<any> = [];
  answers: Array<any> = [];
  quizStarted: boolean = false;
  showAnswers: boolean = false;
  scorePercent: string = '0%';
  numAnswersCorrect: number = -1;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    [...Array(this.questionLimit)].map((_) => {
      this.answers.push(-1);
    });
  }

  private loadQuestions() {
    this.quizService
      .getCustomizedQuiz(
        this.questionCategory,
        this.questionDifficulty,
        this.questionLimit
      )
      .subscribe(
        (response: Quiz[]) => {
          this.questions = response;
          this.quizStarted = true;
        },
        (error: any) => {
          if (error.status === 404) alert(error.error.error);
          console.log('error', error);
        }
      );
  }

  onStartQuiz(): void {
    this.loadQuestions();
  }

  selectAnswer(answerIndex: number, questionIndex: number): void {
    this.answers[questionIndex] = answerIndex;
  }

  onSubmit(): void {
    let scoreCount: number = 0;

    this.answers.forEach((answer, index) => {
      if (
        answer === 0 &&
        this.questions[index].correct_answers.answer_a_correct === 'true'
      )
        scoreCount += 1;
      if (
        answer === 1 &&
        this.questions[index].correct_answers.answer_b_correct === 'true'
      )
        scoreCount += 1;
      if (
        answer === 2 &&
        this.questions[index].correct_answers.answer_c_correct === 'true'
      )
        scoreCount += 1;
      if (
        answer === 3 &&
        this.questions[index].correct_answers.answer_d_correct === 'true'
      )
        scoreCount += 1;
    });

    this.scorePercent = `${(scoreCount / this.questions.length) * 100}%`;
    this.showAnswers = true;
    this.quizStarted = false;
    this.numAnswersCorrect = scoreCount;
  }
}
