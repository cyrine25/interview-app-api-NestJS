import { Injectable } from '@nestjs/common';
import * as questionsData from '../../data/questions.json';
import { Question } from '../types/questions.interface';
import { greeting } from '../types/greetings.interface';
import * as tracksData from '../../data/tracks.json';
import { Tracks } from '../types/tracks.interface';

@Injectable()
export class AppService {
  getGreetings(firstName: string): greeting {
    const message = `Bonjour, ${firstName} !`;
    const response = { message };

    return response;
  }
  getQuestions(): ReadonlyArray<Question> {
    return questionsData;
  }
  getTracks(): ReadonlyArray<Tracks> {
    return tracksData;
  }
}
