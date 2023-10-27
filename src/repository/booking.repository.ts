import { Booking } from 'src/models/booking';
import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { NewBookingDto } from 'src/utils/validatations/newBooking.dto';

@Injectable()
export class BookingRepository extends Repository<Booking> {
  constructor(private dataSource: DataSource) {
    super(Booking, dataSource.createEntityManager());
  }

  //Create New Booking 
  async createBooking(newBooking : any): Promise<Booking> {
    return await this.dataSource.getRepository(Booking).save(newBooking);
  }

  //get A booking BY ID
  async getBookingByID(bookingID: number): Promise<Booking | null> {
    return await this.dataSource
      .getRepository(Booking)
      .findOne({ where: { id: bookingID } });
  }

  //get All bookings
  async getBookings(): Promise<Booking[]> {
    return await this.dataSource.getRepository(Booking).find();
  }
}
