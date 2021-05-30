import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt } from 'class-validator';

export class SteakDTO {
  @ApiProperty({ example: 1 })
  @IsInt()
  id: number;

  @ApiProperty({ example: 'Flat Iron' })
  @IsString()
  nameEng: string;

  @ApiProperty({ example: '平鐵牛排' })
  @IsString()
  nameCht: string;

  @ApiProperty({ example: 'yummy' })
  @IsString()
  descEng: string;

  @ApiProperty({ example: 'yummy' })
  @IsString()
  descCht: string;
}
