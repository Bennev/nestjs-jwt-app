import { 
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  } from 'typeorm'
import { hashSync } from 'bcrypt'
import { CompanyEntity } from '../companies/entities/company.entity';
import { TicketEntity } from '../tickets/entities/ticket.entity';

@Entity({ name: 'users' })
export class UsersEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(type => CompanyEntity, company => company.user)
  companies: CompanyEntity[];

  @OneToMany(type => TicketEntity, ticket => ticket.createdByUser)
  ticketsCreated: TicketEntity[];

  @OneToMany(type => TicketEntity, ticket => ticket.answeredByUser)
  ticketsAnswered: TicketEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'update_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'delete_at' })
  deletedAt: string;

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10)
  }
}