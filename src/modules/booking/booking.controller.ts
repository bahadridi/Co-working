import { Body, Controller, Get, Injectable, Post } from '@nestjs/common';
import { BookingService } from './booking.service';
import { NewBookingDto } from 'src/utils/validatations/newBooking.dto';
import {ApiTags} from '@nestjs/swagger';

@ApiTags('booking')
@Controller('booking')
export class BookingController {
  constructor(private bookingService :BookingService) {}

  @Get()
  async getBooking(){
    return this.bookingService.getBookings()
  }

  @Post()
  async newBooking(@Body()  booking :NewBookingDto ){
    return this.bookingService.createBooking(booking)
  }
}
