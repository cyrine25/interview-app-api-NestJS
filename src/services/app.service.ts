import { Injectable } from '@nestjs/common';
import * as questionsData from '../../data/questions.json';

@Injectable()
export class AppService {
  getGrettings(firstName: string) {
    const message = `Bonjour, ${firstName} !`;
    const response = { message };

    return response;
  }
  getQuestions(): any {
    return questionsData;
  }
}
