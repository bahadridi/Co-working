import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { BookingModule } from './modules/booking/booking.module';
import { MeetingRoomsModule } from './modules/meeting-rooms/meeting-rooms.module';
import { databaseConnection } from './config/database';
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot(),
    databaseConnection(),
    UserModule,
    BookingModule,
    MeetingRoomsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
