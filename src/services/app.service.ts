import { Injectable } from '@nestjs/common';
import * as questionsData from '../../data/questions.json';
import { Question } from 'src/types/questions.interface';
import { greeting } from 'src/types/greetings.interface';

@Injectable()
export class AppService {
  getGrettings(firstName: string): greeting {
    const message = `Bonjour, ${firstName} !`;
    const response = { message };

    return response;
  }
  getQuestions(): ReadonlyArray<Question> {
    return questionsData;
  }
}
