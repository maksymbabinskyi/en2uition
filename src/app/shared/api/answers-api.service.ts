import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Answer } from './answer';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnswersApiService {

  constructor(private apiService: ApiService) {
  }

  getAnswer(questionId: string, relationshipId: string): Observable<Answer> {
    return this.apiService.get(`/questions/${questionId}/relationship/${relationshipId}/answer`)
      .pipe(map((answer: Answer) => {
        return {
          ...answer,
          answer: JSON.parse(answer.answer as unknown as string)
        };
      }));
  }

  addAnswer(questionId: string, relationshipId: string, answer: { answer: string, status: boolean }, userId: string) {
    return this.apiService.post(`/answers`, {
      questionId,
      relationshipId,
      ...this.prepareAnswerObject(answer, userId)
    });
  }

  updateAnswer(id: string, questionId: string, relationshipId: string, answer: { answer: string, status: boolean }, userId: string) {
    return this.apiService.put(`/answers/${id}`, {
      questionId,
      relationshipId,
      ...this.prepareAnswerObject(answer, userId)
    });
  }

  deleteAnswer(id: string) {
    return this.apiService.delete(`/answers/${id}`);
  }

  getAnswers(relationshipId: string): Observable<Answer[]> {
    return this.apiService.get('/answers', {
      params: {
        $filter: `relationshipId eq ${relationshipId}`
      }
    }).pipe(map((answers: Answer[]) => {
      return answers.map(answer => {
        return {
          ...answer,
          answer: JSON.parse(answer.answer as unknown as string)
        };
      });
    }));
  }

  private prepareAnswerObject(answer: { answer: string, status: boolean }, userId: string) {
    return {
      userId,
      answer: JSON.stringify(answer.answer),
      status: answer.status
    };
  }
}
