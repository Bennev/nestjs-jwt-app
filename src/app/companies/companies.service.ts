import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm'
import { UsersEntity } from '../users/users.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { CompanyEntity } from './entities/company.entity';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(CompanyEntity)
    private readonly companiesRepository: Repository<CompanyEntity>
  ) {}

  async create(createCompanyDto: CreateCompanyDto) {
    const company = this.companiesRepository.create(createCompanyDto)
    return await this.companiesRepository.save(company)
  }

  async findAll() {
    return await this.companiesRepository.find({ 
      select: ['id', 'name', 'cnpj', 'description', 'user', 'locations'],
    })
  }

  async findAllByUserId(userId: string) {
    return await this.companiesRepository.find({
      relations: {
        user: true
      },
      where: {
        user: {
          id: userId
        }
      },
      select: ['id', 'name', 'cnpj', 'description', 'locations'],
    })
  }

  async findOneByOrFail(where: FindOptionsWhere<CompanyEntity>) {
    try {
      return await this.companiesRepository.findOneByOrFail(where)
    } catch (error) {
      throw new NotFoundException(error.message)
    }
  }

  async update(id: string, updateCompanyDto: UpdateCompanyDto) {
    const company = await this.findOneByOrFail({ id })
    this.companiesRepository.merge(company, updateCompanyDto)
    return await this.companiesRepository.save(company)
  }

  async destroy(id: string) {
    await this.companiesRepository.findOneByOrFail({ id })
    this.companiesRepository.softDelete({ id })
  }
}
