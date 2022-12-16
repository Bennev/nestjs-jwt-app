import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompaniesController } from './companies.controller';
import { CompanyEntity } from './entities/company.entity';
import { CompaniesService } from './companies.service';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyEntity])],
  controllers: [CompaniesController],
  providers: [CompaniesService]
})
export class CompaniesModule {}
