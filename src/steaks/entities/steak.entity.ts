import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({})
export class Steak {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'name_eng',
  })
  nameEng: string;

  @Column({
    name: 'name_cht',
  })
  nameCht: string;

  @Column({
    name: 'desc_eng',
  })
  descEng: string;

  @Column({
    name: 'desc_cht',
  })
  descCht: string;
}
