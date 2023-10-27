import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Booking } from './booking';
import { ApiProperty} from '@nestjs/swagger'


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ nullable: true })
  firstName!: string;

  @ApiProperty()
  @Column({ nullable: true })
  lastName!: string;

  @ApiProperty()
  @Column({ unique: true })
  email!: string;

  @ApiProperty()
  @Column()
  phoneNumber: string;

  @ApiProperty()
  @OneToMany(() => Booking, booking => booking.user)
  bookings: Booking[];

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public createdAt: Date;

  /**
   * DB last update time.
   */
  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updatedAt: Date;
}
