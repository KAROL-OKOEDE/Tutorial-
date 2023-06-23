import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClinicalRecordDto } from './dto/create-clinical-record.dto';
import { UpdateClinicalRecordDto } from './dto/update-clinical-record.dto';
import { ClinicalRecord } from './entities/clinical-record.entity';

@Injectable()
export class ClinicalRecordService {
  constructor(
    //inject Biodata repository for use here in bio-data-Service as if it is part of the class
    @InjectRepository(ClinicalRecord)
    private ClinicalRecordsRepository: Repository<ClinicalRecord>
  ) { }

  async create(createClinicalRecordDto: CreateClinicalRecordDto){
    const newClinicalRecord: ClinicalRecord = this.ClinicalRecordsRepository.create(createClinicalRecordDto)
    return this.ClinicalRecordsRepository.save(newClinicalRecord);
    //return 'This action adds a new ClinicalRecord';
  }

  async findAll() {
    //return `This action returns all ClinicalRecords`;
    return await this.ClinicalRecordsRepository.find();
  }

  async findOne(id: number) {
    //return `This action returns a #${id} ClinicalRecords`;
    return await this.ClinicalRecordsRepository.findOne({
      where: {
         // same as id:id
      }
    });
  }

  async update(id: number, updateClinicalRecordDto: UpdateClinicalRecordDto) {
    //return `This action updates a #${id} ClinicalRecord`;
    return await this.ClinicalRecordsRepository.update(id, updateClinicalRecordDto);
  }

  async remove(id: number) {
    //return `This action removes a #${id} ClinicalRecord`;
    return await this.ClinicalRecordsRepository.delete(id);
  }
}
