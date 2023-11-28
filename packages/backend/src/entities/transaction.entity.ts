import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column('decimal', { precision: 10, scale: 2, default: 0, nullable: true })
  amount: number;

  @Column({ default: 'EUR' })
  currency: string;

  @Column({ default: 'OK' })
  status: string;
}
