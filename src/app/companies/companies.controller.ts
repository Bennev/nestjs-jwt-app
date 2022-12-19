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
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('api/companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('register')
  async create(@Body() createCompanyDto: CreateCompanyDto) {
    return await this.companiesService.create(createCompanyDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async index() {
    return await this.companiesService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('byUserId/:userId')
  async findAllByUserId(@Param('userId', new ParseUUIDPipe()) userId: string) {
    return await this.companiesService.findAllByUserId(userId);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.companiesService.findOne(+id);
  // }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.companiesService.findOneByOrFail({ id });
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string, 
    @Body() updateCompanyDto: UpdateCompanyDto,
  ) {
    return await this.companiesService.update(id, updateCompanyDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.companiesService.destroy(id);
  }
}
