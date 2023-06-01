import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { RetrieveDTO } from '../../../model';
import { Vehicle } from './Vehicle';
import { Customer } from './Customer';
import { Rental } from './Rental';

@Entity()
export class Retrieve implements RetrieveDTO{
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  retrieveDate: Date;
  
  @Column()
  retrieveMileage: number;

  @Column()
  damaged: boolean;

  @Column()
  sum: number;

  @ManyToOne(() => Rental, (rental) => rental.id)
  rentals: Rental;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.id)
  vehicles: Vehicle;

  @ManyToOne(() => Customer, (customer) => customer.id)
  customers: Customer;
}