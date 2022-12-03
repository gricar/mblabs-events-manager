import { CreateDateColumn, Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('events')
export class Event {
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

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
