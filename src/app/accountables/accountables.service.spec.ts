import { Test, TestingModule } from '@nestjs/testing';
import { AccountablesService } from './accountables.service';

describe('AccountablesService', () => {
  let service: AccountablesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountablesService],
    }).compile();

    service = module.get<AccountablesService>(AccountablesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
