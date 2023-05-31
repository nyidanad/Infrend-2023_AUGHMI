import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToOne } from 'typeorm';
import { RentalDTO } from '../../../model';
import { Customer } from './Customer';
import { Vehicle } from './Vehicle';

@Entity()
export class Rental implements RentalDTO{
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  rentalDate!: Date;

  @ManyToOne(() => Customer, (customer) => customer.id, {eager: true})
  customers: Customer;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.id, {eager: true})
  vehicles: Vehicle;
}