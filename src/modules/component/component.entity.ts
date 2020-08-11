import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  Unique,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Group } from '../group/group.entity';

@Entity()
@Unique(['groupId', 'libName'])
export class Component {
  @PrimaryGeneratedColumn('increment', { type: 'int', comment: '主键，组件Id' })
  id: number;

  //   @Column({ type: 'int', comment: '关联group的表id' })
  //   groupId: number;

  @Column({
    type: 'varchar',
    length: 255,
    comment: '组件文件夹名',
  })
  libName: number;

  @Column({
    type: 'varchar',
    length: 255,
    comment: '组件的中文展示名称',
  })
  name: number;

  @Column({
    type: 'varchar',
    length: 255,
    comment: 'tnpm上的安装报名',
    nullable: true,
  })
  npmName: number;

  @Column({ type: 'varchar', length: 255, comment: '最近版本号' })
  lastVersion: number;

  @Column({ type: 'varchar', length: 255, comment: '创建组件者姓名' })
  createUserName: number;

  @Column({ type: 'varchar', length: 255, comment: 'git地址' })
  gitUrl: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  repUrl: number;

  @Column({
    type: 'tinyint',
    default: 0,
    length: 255,
    comment: '是否已废弃，1废弃，0在用',
  })
  isDelete: number;

  @Column({ type: 'int', default: 1, length: 255, comment: '1-pc端，2-移动端' })
  platform: number;

  @Column({
    type: 'tinyint',
    default: 0,
    length: 1,
    comment: '0-未审核，1-审核通过，2-审核拒绝',
  })
  isChecked: number;

  @OneToOne(() => Group)
  @JoinColumn()
  group: Group;

  @CreateDateColumn({ type: 'timestamp' })
  createTime: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updateTime: Date;
}
