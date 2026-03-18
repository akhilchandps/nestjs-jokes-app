import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Joke {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string; // ✅ NEW FIELD

  @Column()
  content: string;

  @Column()
  email: string;
}