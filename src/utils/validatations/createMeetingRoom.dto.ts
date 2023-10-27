import { IsNotEmpty ,IsString, IsEmail, IsEnum} from "class-validator";
import { RoomType } from "../enums/room.type";
import { ApiProperty } from '@nestjs/swagger';


export class CreateMeetingRoomDto {

    @ApiProperty()
    @IsNotEmpty()
    available: boolean;

    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(RoomType)
    roomType: string;
}