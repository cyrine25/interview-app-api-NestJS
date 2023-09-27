import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import * as questionsData from '../../data/questions.json';
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
});
