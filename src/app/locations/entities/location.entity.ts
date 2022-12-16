import { 
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { CompanyEntity } from 'src/app/companies/entities/company.entity';

@Entity({ name: 'locations' })
export class LocationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @ManyToOne(type => CompanyEntity, company => company.location)
  company: CompanyEntity[];
  
  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'update_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'delete_at' })
  deletedAt: string;
}


