import { 
  Body, 
  Controller, 
  Delete, 
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe, 
  Post, 
  Put,
} from '@nestjs/common';
import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  // @UseGuards(AuthGuard('jwt'))
  @Post('register')
  async create(@Body() createLocationDto: CreateLocationDto) {
    return await this.locationsService.create(createLocationDto);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Get()
  async index() {
    return await this.locationsService.findAll();
  }

  // @UseGuards(AuthGuard('jwt'))
  @Get('byCompanyId/:companyId')
  async findAllByCompanyId(@Param('companyId', new ParseUUIDPipe()) companyId: string) {
    return await this.locationsService.findAllByCompanyId(companyId);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.locationsService.findOne(+id);
  // }

  // @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.locationsService.findOneByOrFail({ id });
  }

  // @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateLocationDto: UpdateLocationDto,
  ) {
    return await this.locationsService.update(id, updateLocationDto);
  }
  
  // @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.locationsService.destroy(id);
  }
}
