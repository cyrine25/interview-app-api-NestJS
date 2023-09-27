import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import * as questionsData from '../data/questions.json';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/questions (GET)', () => {
    return request(app.getHttpServer())
      .get('/questions')
      .expect(200)
      .expect(questionsData);
  });
  it('/greetings (GET)', async () => {
    const name = 'Mr. le testeur';
    const response = await request(app.getHttpServer())
      .get('/greetings')
      .query({ firstname: name })
      .expect(200);

    expect(response.body.message).toBe(`Bonjour, ${name} !`);
  });
});
