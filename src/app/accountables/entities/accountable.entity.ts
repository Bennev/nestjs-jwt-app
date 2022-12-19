import { CompanyEntity } from 'src/app/companies/entities/company.entity';
import { LocationEntity } from 'src/app/locations/entities/location.entity';
import { 
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
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

  @ManyToOne(() => CompanyEntity, company => company.accountables)
  company: CompanyEntity;

  @ManyToOne(() => LocationEntity, location => location.accountables)
  location: LocationEntity;
  
  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'update_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'delete_at' })
  deletedAt: string;
}
