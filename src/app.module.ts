import { Module } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from '@/config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Steak } from '@/steaks/entities/steak.entity';
import { SteaksModule } from './steaks/steaks.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      load: [configuration],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER, // MYSQL_USER
      password: process.env.DATABASE_PASSWORD, // MYSQL_PASSWORD
      database: process.env.DATABASE_NAME, // MYSQL_DATABASE
      entities: [Steak],
      synchronize: true,
    }),
    SteaksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
