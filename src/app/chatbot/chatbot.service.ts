import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ChatbotService {

  constructor(private http: Http) { }

  ask(question: string) {
    return new Promise((resolve, reject) => {
      this.http.post('/api/chatbot/ask', question)
      .toPromise()
      .then(res => res.json())
      .then(res => resolve(res.data))
      .catch(err => reject(err));
    });
  }
}
