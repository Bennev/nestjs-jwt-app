import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm'
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { LocationEntity } from './entities/location.entity';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(LocationEntity)
    private readonly locationsRepository: Repository<LocationEntity>
  ) {}

  async create(createLocationDto: CreateLocationDto) {
    const location = this.locationsRepository.create(createLocationDto)
    return await this.locationsRepository.save(location)
  }

  async findAll() {
    return await this.locationsRepository.find({ 
      select: ['id', 'name', 'address','company'],
    })
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} location`;
  // }

  async findOneByOrFail(where: FindOptionsWhere<LocationEntity>) {
    try {
      return await this.locationsRepository.findOneByOrFail(where)
    } catch (error) {
      throw new NotFoundException(error.message)
    }
  }

  async update(id: string, updateLocationDto: UpdateLocationDto) {
    const location = await this.findOneByOrFail({ id })
    this.locationsRepository.merge(location, updateLocationDto)
    return await this.locationsRepository.save(location)
  }

  async destroy(id: string) {
    await this.locationsRepository.findOneByOrFail({ id })
    this.locationsRepository.softDelete({ id })
  }
}
