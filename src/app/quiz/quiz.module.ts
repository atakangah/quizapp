import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizService } from '../services/quiz.service';



@NgModule({
  declarations: [
    QuizPageComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule
  ],
  providers: [
    QuizService
  ]
})
export class QuizModule { }
