import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm'
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { TicketEntity } from './entities/ticket.entity';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(TicketEntity)
    private readonly ticketsRepository: Repository<TicketEntity>
  ) {}

  async create(createTicketDto: CreateTicketDto) {
    const ticket = this.ticketsRepository.create(createTicketDto)
    return await this.ticketsRepository.save(ticket)
  }

  async findAll() {
    return await this.ticketsRepository.find({ 
      select: ['id', 'title', 'createdByUser', 'answeredByUser', 'status', 'nameLocation', 'addressLocation'],
    })
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} ticket`;
  // }

  async findOneByOrFail(where: FindOptionsWhere<TicketEntity>) {
    try {
      return await this.ticketsRepository.findOneByOrFail(where)
    } catch (error) {
      throw new NotFoundException(error.message)
    }
  }

  async update(id: string, updateTicketDto: UpdateTicketDto) {
    const ticket = await this.findOneByOrFail({ id })
    this.ticketsRepository.merge(ticket, updateTicketDto)
    return await this.ticketsRepository.save(ticket)
  }

  async destroy(id: string) {
    await this.ticketsRepository.findOneByOrFail({ id })
    this.ticketsRepository.softDelete({ id })
  }
}
