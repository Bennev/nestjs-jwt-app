import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm'
import { CreateAccountableDto } from './dto/create-accountable.dto';
import { UpdateAccountableDto } from './dto/update-accountable.dto';
import { AccountableEntity } from './entities/accountable.entity';

@Injectable()
export class AccountablesService {
  constructor(
    @InjectRepository(AccountableEntity)
    private readonly accountablesRepository: Repository<AccountableEntity>
  ) {}


  async create(createAccountableDto: CreateAccountableDto) {
    const accountable = this.accountablesRepository.create(createAccountableDto)
    return await this.accountablesRepository.save(accountable)
  }

  async findAll() {
    return await this.accountablesRepository.find({ 
      select: ['id', 'name', 'phone', 'address'],
    })
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} accountable`;
  // }

  async findOneByOrFail(where: FindOptionsWhere<AccountableEntity>) {
    try {
      return await this.accountablesRepository.findOneByOrFail(where)
    } catch (error) {
      throw new NotFoundException(error.message)
    }
  }

  async update(id: string, updateAccountableDto: UpdateAccountableDto) {
    const accountable = await this.findOneByOrFail({ id })
    this.accountablesRepository.merge(accountable, updateAccountableDto)
    return await this.accountablesRepository.save(accountable)
  }

  async destroy(id: string) {
    await this.accountablesRepository.findOneByOrFail({ id })
    this.accountablesRepository.softDelete({ id })
  }
}
