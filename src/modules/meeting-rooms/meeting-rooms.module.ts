import { Module } from '@nestjs/common';
import { MeetingRoomController } from './meeting-rooms.controller';
import { MeetingRoomService } from './meeting-rooms.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeetingRoom } from 'src/models/meetingRoom';
import { MeetingRoomRepository } from 'src/repository/meetingRooms.repository';

@Module({
    imports:[
        TypeOrmModule.forFeature([MeetingRoom])
    ],
    controllers : [MeetingRoomController],
    providers : [MeetingRoomService, MeetingRoomRepository]
})
export class MeetingRoomsModule {}
