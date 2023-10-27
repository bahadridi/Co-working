import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
import { User } from './user';
import { MeetingRoom } from './meetingRoom';
import { ApiProperty} from '@nestjs/swagger'

  @Entity()
  export class Booking {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ApiProperty()
    @Column({ nullable: false })
    startDate!: Date;
  
    @ApiProperty()
    @Column({ nullable: false })
    endDate!: Date;

    @ApiProperty()
    @ManyToOne(() => User, user => user.bookings)
    user: User;
  
    @ApiProperty()
    @ManyToOne(() => MeetingRoom, meetingRoom => meetingRoom.bookings)
    meetingRoom: MeetingRoom;

}
  