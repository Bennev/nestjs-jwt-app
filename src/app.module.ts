import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UsersModule } from './app/users/users.module';
// import { ConfigModule } from '@nestjs/config';
import { typeOrmConfig } from 'typeorm.config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UsersModule, AuthModule],
  controllers: [],
  providers: [],
})

// @Module({
//   imports: [
//     ConfigModule.forRoot(),
//     TypeOrmModule.forRoot({
//       type: process.env.TYPEORM_CONNECTION,
//       host: process.env.TYPEORM_HOST,
//       port: process.env.TYPEORM_POSRT,
//       username: process.env.TYPEORM_USERNAME,
//       password: process.env.TYPEORM_PASSWORD,
//       database: process.env.TYPEORM_DATABASE,
//       entities: [join(__dirname + '/**/*.entity{.js,.ts}')],
//       synchronize: true,
//     } as TypeOrmModuleOptions),
//     UsersModule,
//   ],
//   controllers: [],
//   providers: [],
// })
export class AppModule {}
