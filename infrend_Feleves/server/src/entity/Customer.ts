import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { CustomerDTO } from '../../../model';

@Entity()
export class Customer implements CustomerDTO{
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  fname!: string;

  @Column()
  lname!: string;

  @Column()
  address!: string;

  @Column()
  idCardNum!: string;

  @Column()
  phone!: string;
}