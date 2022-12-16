import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountablesController } from './accountables.controller';
import { AccountableEntity } from './entities/accountable.entity';
import { AccountablesService } from './accountables.service';

@Module({
  imports: [TypeOrmModule.forFeature([AccountableEntity])],
  controllers: [AccountablesController],
  providers: [AccountablesService]
})
export class AccountablesModule {}
