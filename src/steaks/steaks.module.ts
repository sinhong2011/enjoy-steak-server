import { Module } from '@nestjs/common';
import { SteaksController } from './steaks.controller';
import { SteaksService } from './steaks.service';
import { Steak } from './entities/steak.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [SteaksController],
  providers: [SteaksService],
  imports: [TypeOrmModule.forFeature([Steak])],
})
export class SteaksModule {}
