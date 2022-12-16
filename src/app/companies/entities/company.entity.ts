import { 
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { LocationEntity } from 'src/app/locations/entities/location.entity';

@Entity({ name: 'companies' })
export class CompanyEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  cnpj: string;

  @Column()
  description: string;

  @OneToMany(type => LocationEntity, location => location.company)
  location: LocationEntity[];

  // @CreateDateColumn({ name: 'created_at' })
  // createdAt: string;

  // @UpdateDateColumn({ name: 'update_at' })
  // updatedAt: string;

  // @DeleteDateColumn({ name: 'delete_at' })
  // deletedAt: string;
}
