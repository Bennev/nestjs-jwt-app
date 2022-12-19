import { 
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { UsersEntity } from 'src/app/users/users.entity';

@Entity({ name: 'tickets' })
export class TicketEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @ManyToOne(() => UsersEntity, (user) => user.ticketsCreated)
  createdByUser: UsersEntity;

  @ManyToOne(() => UsersEntity, (user) => user.ticketsAnswered)
  answeredByUser: UsersEntity;

  @Column({ default: "PENDENTE" })
  status: string;

  @Column()
  nameLocation: string;

  @Column()
  addressLocation: string;
  
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'update_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'delete_at' })
  deletedAt: Date;
}
