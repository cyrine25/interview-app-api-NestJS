import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { Question } from '../types/questions.interface';
import { Tracks } from '../types/tracks.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('questions')
  getQuestions(): ReadonlyArray<Question> {
    const questions = this.appService.getQuestions();

    return questions;
  }
  @Get('greetings')
  getGreetings(@Query('firstname') firstname: string) {
    return this.appService.getGreetings(firstname);
  }
  @Get('tracks')
  getTracks(): ReadonlyArray<Tracks> {
    return this.appService.getTracks();
  }
}
