import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/user';
import { MeetingRoom } from 'src/models/meetingRoom';
import { Booking } from 'src/models/booking';
import { BookingRepository } from 'src/repository/booking.repository';
import { UserRepository } from 'src/repository/user.repository';
import { MeetingRoomRepository } from 'src/repository/meetingRooms.repository';

@Module({
    imports :[
        TypeOrmModule.forFeature([User, MeetingRoom ,Booking])

    ],
    controllers : [BookingController],
    providers :[BookingService,BookingRepository,UserRepository,MeetingRoomRepository]
})
export class BookingModule {}
