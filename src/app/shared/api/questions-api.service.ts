import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Question } from './question';
import { map } from 'rxjs/operators';
import { JSON5 } from '../../vendor';

@Injectable({
  providedIn: 'root'
})
export class QuestionsApiService {

  constructor(private apiService: ApiService) {
  }

  getQuestions(levelId: string): Observable<Question[]> {
    return this.apiService.get<Question[]>(`/levels/${levelId}/questions`).pipe(map(questions => {
      return questions.map(question => {
        return {
          ...question,
          optional: JSON5.parse((question.optional as unknown as string).replace(/[‘’]/g, '"'))
        };
      });
    }));
  }
}
