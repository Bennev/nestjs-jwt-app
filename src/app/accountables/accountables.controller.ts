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
import { UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { AccountablesService } from './accountables.service';
import { CreateAccountableDto } from './dto/create-accountable.dto';
import { UpdateAccountableDto } from './dto/update-accountable.dto';

@Controller('api/accountables')
export class AccountablesController {
  constructor(private readonly accountablesService: AccountablesService) {}

  // @UseGuards(AuthGuard('jwt'))
  @Post('register')
  async create(@Body() createAccountableDto: CreateAccountableDto) {
    return await this.accountablesService.create(createAccountableDto);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Get()
  async index() {
    return await this.accountablesService.findAll();
  }

  // @UseGuards(AuthGuard('jwt'))
  @Get('byCompanyId/:companyId')
  async findAllByCompanyId(@Param('companyId', new ParseUUIDPipe()) companyId: string) {
    return await this.accountablesService.findAllByCompanyId(companyId);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Get('byLocationId/:locationId')
  async findAllByLocationId(@Param('locationId', new ParseUUIDPipe()) locationId: string) {
    return await this.accountablesService.findAllByLocationId(locationId);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.accountablesService.findOne(+id);
  // }

  // @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.accountablesService.findOneByOrFail({ id });
  }

  // @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateAccountableDto: UpdateAccountableDto,
  ) {
    return await this.accountablesService.update(id, updateAccountableDto);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.accountablesService.destroy(id);
  }
}
