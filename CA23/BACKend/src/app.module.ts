import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HospitalDataModule } from './hospital-data/hospital-data.module';

@Module({
  imports: [TypeOrmModule.forRoot({
  type: "postgres",
  host: "localhost",
  port: 5434,
  username: "postgres",
  password: "postgres",
  database: "hospital-data",
  entities: [
  "dist/**/*.entity{.ts,.js}"
  ],
  synchronize: true
  }), HospitalDataModule],
  controllers: [AppController],
  providers: [AppService],
  })
  export class AppModule {}