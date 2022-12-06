import {
  CreateDateColumn,
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Company } from './Company';
import { University } from './University';
import { User } from './User';
import { IEvent } from './schemas/event';

@Entity('events')
export class Event implements IEvent {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ name: 'event_day' })
  eventDay: Date;

  @Column({ name: 'people_capacity' })
  peopleCapacity: number;

  @Column({ name: 'tickets_available' })
  ticketsAvailable: number;

  @Column({ name: 'sold_out', default: false })
  soldOut: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => University, (university) => university.events)
  university: University;

  @ManyToOne(() => Company, (company) => company.events)
  company: Company;

  @ManyToMany(() => User, (user) => user.events)
  @JoinTable({ name: 'users_events' })
  users: User[];
}
