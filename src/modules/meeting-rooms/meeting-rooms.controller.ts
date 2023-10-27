import { Body, Controller, Get, Injectable, Post } from '@nestjs/common';
import { MeetingRoomService } from './meeting-rooms.service';
import { CreateMeetingRoomDto } from 'src/utils/validatations/createMeetingRoom.dto';
import {ApiTags} from '@nestjs/swagger';

@ApiTags('meetingroom')
@Controller('meetingroom')
export class MeetingRoomController {
  constructor(private meetingRoomService : MeetingRoomService) {}

  @Get()
  async getMeetingRooms(){
    return this.meetingRoomService.getMeetingRooms()
  }

  @Post()
  async createMeetingRoom(@Body() meetingRoom : CreateMeetingRoomDto){
    return this.meetingRoomService.addMeetingRoom(meetingRoom)
  }
}
