import { Test, TestingModule } from '@nestjs/testing';
import { SteaksController } from './steaks.controller';

describe('SteaksController', () => {
  let controller: SteaksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SteaksController],
    }).compile();

    controller = module.get<SteaksController>(SteaksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
