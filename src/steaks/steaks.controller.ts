import { SteaksService } from '@/steaks/steaks.service';
import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { get } from 'http';
import { Steak } from './entities/steak.entity';
import { SteakDTO } from './dto/steak.dto';

@ApiTags('steaks')
@Controller('steaks')
export class SteaksController {
  constructor(private steakService: SteaksService) {}

  @Get()
  @ApiOkResponse({
    description: 'The record has been successfully created.',
    type: Steak,
  })
  async findAll(): Promise<{ ok: boolean; data: SteakDTO[] }> {
    const rs = await this.steakService.findAll();
    console.log('rs >>> ', rs);
    return {
      ok: true,
      data: rs,
    };
  }
}
