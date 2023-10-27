import { BadRequestException, Injectable } from '@nestjs/common';
import { MeetingRoom } from 'src/models/meetingRoom';
import { MeetingRoomRepository } from 'src/repository/meetingRooms.repository';
import { CreateMeetingRoomDto } from 'src/utils/validatations/createMeetingRoom.dto';

@Injectable()
export class MeetingRoomService {
  constructor(private readonly meetingRoomRepository: MeetingRoomRepository) {}

  async addMeetingRoom(
    meetingRoom: CreateMeetingRoomDto,
  ): Promise<MeetingRoom> {
    return await this.meetingRoomRepository.createMeetingRoom(meetingRoom);
  }

  async getMeetingRooms() {
    return await this.meetingRoomRepository.getMeetingRooms();
  }
}
