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
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('api/companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post('register')
  async create(@Body() createCompanyDto: CreateCompanyDto) {
    return await this.companiesService.create(createCompanyDto);
  }

  @Get()
  async index() {
    return await this.companiesService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.companiesService.findOne(+id);
  // }

  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.companiesService.findOneByOrFail({ id });
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string, 
    @Body() updateCompanyDto: UpdateCompanyDto,
  ) {
    return await this.companiesService.update(id, updateCompanyDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.companiesService.remove(id);
  }
}
