import { PrimaryGeneratedColumn, Column } from 'typeorm';

export class ComponentVersion {
  @PrimaryGeneratedColumn('increment', { type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 255 })
  version: string;

  @Column({ type: 'text', comment: '组件依赖', nullable: true })
  dependencies: string;

  @Column({ type: 'varchar', length: 255 })
  userEmpid: string;

  @Column({ type: 'varchar', length: 255 })
  userName: string;

  @Column({ type: 'timestamp', default: new Date() })
  timestamp: Date;
}
