import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from '../services/app.service';
// import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('questions')
  getQuestions(): any {
    const questions = this.appService.getQuestions();

    return questions;
  }
  @Get('greetings')
  getGrettings(@Query('firstname') firstname: string) {
    return this.appService.getGrettings(firstname);
  }
}
