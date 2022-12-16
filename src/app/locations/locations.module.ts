import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationsController } from './locations.controller';
import { LocationEntity } from './entities/location.entity';
import { LocationsService } from './locations.service';

@Module({
  imports: [TypeOrmModule.forFeature([LocationEntity])],
  controllers: [LocationsController],
  providers: [LocationsService]
})
export class LocationsModule {}
