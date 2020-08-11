import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity()
export class Group {
  @PrimaryGeneratedColumn('increment', { type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 255, comment: '组件分类值' })
  @Index({ unique: true })
  value: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;
}
