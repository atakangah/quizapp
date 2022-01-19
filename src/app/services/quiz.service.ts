import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quiz } from '../models/Quiz';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private httpClient: HttpClient) {}

  getRandomQuiz(): Observable<Quiz[]> {
    return this.httpClient.get<Quiz[]>(`${environment.APIURL}/questions?apiKey=${environment.APIKEY}&category=Linux`);
  }
}
