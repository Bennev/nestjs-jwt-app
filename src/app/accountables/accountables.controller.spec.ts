import { Test, TestingModule } from '@nestjs/testing';
import { AccountablesController } from './accountables.controller';
import { AccountablesService } from './accountables.service';

describe('AccountablesController', () => {
  let controller: AccountablesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountablesController],
      providers: [AccountablesService],
    }).compile();

    controller = module.get<AccountablesController>(AccountablesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
