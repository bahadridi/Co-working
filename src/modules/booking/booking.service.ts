import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { Booking } from 'src/models/booking';
import { User } from 'src/models/user';
import { BookingRepository } from 'src/repository/booking.repository';
import { MeetingRoomRepository } from 'src/repository/meetingRooms.repository';
import { UserRepository } from 'src/repository/user.repository';
import { NewBookingDto } from 'src/utils/validatations/newBooking.dto';

@Injectable()
export class BookingService {
  constructor(
    private readonly bookingRepository: BookingRepository,
    private readonly userRepository: UserRepository,
    private readonly meetingRoomRepository: MeetingRoomRepository,
  ) {}

  async createBooking(data : NewBookingDto): Promise<Booking> {
    //check & get the meeting room
    const meetingRoom = await this.meetingRoomRepository.findMeetingRoomById(data.meetingRoomId);
    if (!meetingRoom  || !meetingRoom.available) {
      throw new NotFoundException('Meeting room not Available');
    }

    // Change the availability of the meeting room
    const meetingRoomb = await this.meetingRoomRepository.updateRoom(data.meetingRoomId)
    
    //Save User
    const user = new User();
    user.firstName = data.user.firstName;
    user.lastName = data.user.lastName;
    user.phoneNumber = data.user.phoneNumber;
    user.email = data.user.email;
    const newUser = await this.userRepository.createUser(user);
    if (!newUser) {
      throw new BadRequestException('Something Went Wrong');
    }

    //save The new booking
    const booking = new Booking();
    booking.meetingRoom = meetingRoomb;
    booking.user = newUser;
    booking.startDate = data.startDate;
    booking.endDate = data.endDate;

    await this.bookingRepository.createBooking(booking);
    return booking;
  }

  async getBookings(): Promise<Booking[]> {
    return this.bookingRepository.find();
  }
}
