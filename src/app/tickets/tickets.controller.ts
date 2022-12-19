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
import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  // @UseGuards(AuthGuard('jwt'))
  @Post('register')
  async create(@Body() createTicketDto: CreateTicketDto) {
    return await this.ticketsService.create(createTicketDto);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Get()
  async index() {
    return await this.ticketsService.findAll();
  }

  // @UseGuards(AuthGuard('jwt'))
  @Get('byUserId/:userId')
  async findAllByUserId(@Param('userId', new ParseUUIDPipe()) userId: string) {
    return await this.ticketsService.findAllByUserId(userId);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.ticketsService.findOne(+id);
  // }

  // @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.ticketsService.findOneByOrFail({ id });
  }

  // @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string, 
    @Body() updateTicketDto: UpdateTicketDto,
    ) {
    return await this.ticketsService.update(id, updateTicketDto);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.ticketsService.destroy(id);
  }
}
