import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Booking } from './booking';
import { RoomType } from 'src/utils/enums/room.type';
import { ApiProperty} from '@nestjs/swagger'

@Entity()
export class MeetingRoom {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column('enum', { enum: RoomType, default: 'small' })
  roomType: string;

  @ApiProperty()
  @Column({ default: true })
  available!: boolean;
  
  @ApiProperty()
  @OneToMany(() => Booking, booking => booking.meetingRoom)
  bookings: Booking[];
}
