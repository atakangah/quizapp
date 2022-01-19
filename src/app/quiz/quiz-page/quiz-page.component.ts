import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/Quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css'],
})
export class QuizPageComponent implements OnInit {
  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.getRandomQuiz().subscribe(
      (response: Quiz[]) => {
        console.log(response);
      },
      (error: any) => {
        console.log('error', error);
      }
    );
  }
}
