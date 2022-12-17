import { CompanyEntity } from 'src/app/companies/entities/company.entity';
import { 
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity({ name: 'accountables' })
export class AccountableEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  // @OneToOne(type => CompanyEntity, company => company.location)
  // company: CompanyEntity[];
  
  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'update_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'delete_at' })
  deletedAt: string;
}
