import { IsNotEmpty ,IsString, IsEmail} from "class-validator";
import { ApiProperty } from '@nestjs/swagger';


export class CreateUserDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    lastName: string;
  
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string;
  
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    phoneNumber: string;
}