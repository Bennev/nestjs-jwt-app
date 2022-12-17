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
import { AccountablesService } from './accountables.service';
import { CreateAccountableDto } from './dto/create-accountable.dto';
import { UpdateAccountableDto } from './dto/update-accountable.dto';

@Controller('api/accountables')
export class AccountablesController {
  constructor(private readonly accountablesService: AccountablesService) {}

  @Post('register')
  create(@Body() createAccountableDto: CreateAccountableDto) {
    return this.accountablesService.create(createAccountableDto);
  }

  @Get()
  findAll() {
    return this.accountablesService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.accountablesService.findOne(+id);
  // }

  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.accountablesService.findOneByOrFail({ id });
  }

  @Put(':id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateAccountableDto: UpdateAccountableDto,
  ) {
    return this.accountablesService.update(id, updateAccountableDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.accountablesService.destroy(id);
  }
}
