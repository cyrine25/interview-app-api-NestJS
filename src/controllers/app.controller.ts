import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { Question } from 'src/types/questions.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('questions')
  getQuestions(): ReadonlyArray<Question> {
    const questions = this.appService.getQuestions();

    return questions;
  }
  @Get('greetings')
  getGrettings(@Query('firstname') firstname: string) {
    return this.appService.getGrettings(firstname);
  }
}
