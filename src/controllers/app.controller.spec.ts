import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import * as questionsData from '../../data/questions.json';
import * as tracksData from '../../data/tracks.json';
import { AppService } from '../services/app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: {
            getQuestions: jest.fn().mockReturnValue(questionsData),
            getGreetings: jest.fn(),
            getTracks: jest.fn().mockReturnValue(tracksData),
          },
        },
      ],
    }).compile();

    appController = module.get<AppController>(AppController);
    appService = module.get<AppService>(AppService);
  });
  it('should return questions', async () => {
    jest
      .spyOn(appService, 'getQuestions')
      .mockImplementation(() => questionsData);
    expect(await appController.getQuestions()).toBe(questionsData);
  });
  it('should return a greeting message', () => {
    const firstname = 'Mr. le testeur';
    const greeting = { message: 'Hello, Mr. le testeur!' };
    jest.spyOn(appService, 'getGreetings').mockReturnValue(greeting);

    expect(appController.getGreetings(firstname)).toEqual(greeting);
  });

  it('should return an array of tracks', async () => {
    jest.spyOn(appService, 'getTracks').mockImplementation(() => tracksData);

    expect(await appController.getTracks()).toBe(tracksData);
  });
});
