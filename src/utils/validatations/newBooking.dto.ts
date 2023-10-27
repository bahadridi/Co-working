import { IsNotEmpty ,IsString, MinDate} from "class-validator";
import { User } from "src/models/user";
import { ApiProperty } from '@nestjs/swagger'

export class NewBookingDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinDate(new Date())
    startDate: Date;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    endDate: Date;

    @ApiProperty()
    user : User ;

    @ApiProperty()
    meetingRoomId : number
}