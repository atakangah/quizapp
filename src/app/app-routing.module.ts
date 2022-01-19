import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeCardComponent } from './views/welcome-card/welcome-card.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: WelcomeCardComponent,
  },
  {
    path: 'quiz',
    loadChildren: () =>
      import('src/app/quiz/quiz.module').then((m) => m.QuizModule),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
