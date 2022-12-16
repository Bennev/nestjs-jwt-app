import { 
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
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
}


