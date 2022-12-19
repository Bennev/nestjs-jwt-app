import { 
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { CompanyEntity } from 'src/app/companies/entities/company.entity';
import { AccountableEntity } from 'src/app/accountables/entities/accountable.entity';

@Entity({ name: 'locations' })
export class LocationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @ManyToOne(() => CompanyEntity, company => company.locations)
  company: CompanyEntity;

  @OneToMany(type => AccountableEntity, accountable => accountable.company)
  accountables: AccountableEntity[];
  
  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'update_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'delete_at' })
  deletedAt: string;
}


