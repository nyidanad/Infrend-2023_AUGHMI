import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { RetrieveDTO } from '../../../model';
import { Vehicle } from './Vehicle';
import { Rental } from './Rental';

@Entity()
export class Retrieve implements RetrieveDTO{
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  damaged: boolean;

  @Column()
  sum: number;

  @ManyToOne(() => Rental, (rental) => rental.id)
  rentals: Rental;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.id)
  vehicles: Vehicle;
}