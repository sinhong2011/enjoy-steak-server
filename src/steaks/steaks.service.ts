import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Steak } from './entities/steak.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SteaksService {
  constructor(
    @InjectRepository(Steak)
    private steakRepository: Repository<Steak>,
  ) {}

  async findAll(): Promise<Steak[]> {
    return this.steakRepository.find();
  }
}
