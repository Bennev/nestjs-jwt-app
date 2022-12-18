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

@Controller('api/locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Post('register')
  async create(@Body() createLocationDto: CreateLocationDto) {
    return await this.locationsService.create(createLocationDto);
  }

  @Get()
  async index() {
    return await this.locationsService.findAll();
  }

  @Get('byCompanyId/:companyId')
  async findAllByCompanyId(@Param('companyId', new ParseUUIDPipe()) companyId: string) {
    return await this.locationsService.findAllByCompanyId(companyId);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.locationsService.findOne(+id);
  // }

  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.locationsService.findOneByOrFail({ id });
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateLocationDto: UpdateLocationDto,
  ) {
    return await this.locationsService.update(id, updateLocationDto);
  }
  

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.locationsService.destroy(id);
  }
}
