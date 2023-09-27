import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let appService: AppService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    appService = module.get<AppService>(AppService);
  });
  it('should be defined', () => {
    expect(appService).toBeDefined();
  });
  it('should return a greeting message with the given first name', () => {
    const firstName = 'John';

    const result = appService.getGrettings(firstName);

    expect(result).toBeDefined();
    expect(result.message).toBe(`Bonjour, ${firstName} !`);
  });
});
