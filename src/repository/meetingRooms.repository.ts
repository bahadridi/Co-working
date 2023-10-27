import { DataSource, Repository } from 'typeorm';
import { BadRequestException, Injectable,NotFoundException } from '@nestjs/common';
import { MeetingRoom } from 'src/models/meetingRoom';
import { CreateMeetingRoomDto } from 'src/utils/validatations/createMeetingRoom.dto';

@Injectable()
export class MeetingRoomRepository extends Repository<MeetingRoom> {
  constructor(private dataSource: DataSource) {
    super(MeetingRoom, dataSource.createEntityManager());
  }

  //get All MeetingRooms
  async getMeetingRooms(): Promise<MeetingRoom[]> {
    return await this.dataSource.getRepository(MeetingRoom).find();
  }

  //Create New Booking
  async createMeetingRoom(newRoom :CreateMeetingRoomDto): Promise<MeetingRoom> {
    const meetingroom = await this.dataSource.getRepository(MeetingRoom).save(newRoom);
    if (!meetingroom){
      throw new BadRequestException('Something Went Wrong');
    }
    return meetingroom
  }

  /**
   * This method finds meeting room by ID
   * @param id id of the room
   * @returns Promise with Room or Null
   */
  async findMeetingRoomById(id: number) : Promise <MeetingRoom | null> {
    return await this.findOneBy({ id })
  }

  //get Available Rooms
  async getAvailableRooms() {
    return await this.dataSource
      .getRepository(MeetingRoom)
      .find({ where: { available: true } });
  }

  //change availabality
  async updateRoom(roomId : number){
    const room =  await this.dataSource.getRepository(MeetingRoom).findOne({where : { id:roomId}})
    if (!room){
      throw new NotFoundException('room not found')
    }
    room.available = false ;
    return await this.dataSource.getRepository(MeetingRoom).save(room)
  }
}
