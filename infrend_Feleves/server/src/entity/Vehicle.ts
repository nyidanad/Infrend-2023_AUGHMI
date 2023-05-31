import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import { VehicleDTO } from '../../../model';

@Entity()
export class Vehicle implements VehicleDTO{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand: string;

  @Column()
  type!: string;

  @Column()
  regNum: string;

  @Column()
  purchaseDate: Date;

  @Column()
  rentalFee: number;

  @Column()
  mileage: number;

  @Column()
  status: string;

  @Column()
  imgUrl: string;
}