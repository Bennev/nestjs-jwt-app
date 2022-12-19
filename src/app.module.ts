import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UsersModule } from './app/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CompaniesModule } from './app/companies/companies.module';
import { LocationsModule } from './app/locations/locations.module';
import { AccountablesModule } from './app/accountables/accountables.module';
import { TicketsModule } from './app/tickets/tickets.module';
import { join } from 'path'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION,
      host: process.env.TYPEORM_HOST,
      port: process.env.TYPEORM_PORT,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
    } as TypeOrmModuleOptions), 
      UsersModule, 
      AuthModule, 
      CompaniesModule, 
      LocationsModule, 
      AccountablesModule,
      TicketsModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
