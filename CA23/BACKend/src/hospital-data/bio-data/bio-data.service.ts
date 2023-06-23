import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBioDatumDto } from './dto/create-bio-datum.dto';
import { UpdateBioDatumDto } from './dto/update-bio-datum.dto';
import { BioDatum } from './entities/bio-datum.entity';

@Injectable()
export class BioDataService {
  constructor(
    //inject Biodata repository for use here in bio-data-Service as if it is part of the class
    @InjectRepository(BioDatum)
    private BioDataRepository: Repository<BioDatum>
  ) { }

  async create(createBioDatumDto: CreateBioDatumDto) {
    const newBioDatum: BioDatum = this.BioDataRepository.create(createBioDatumDto)
    return this.BioDataRepository.save(newBioDatum);
    //return 'This action adds a new BioData';
  }

  async findAll() {
    //return `This action returns all bioData`;
    return await this.BioDataRepository.find();
  }

  async findOne(id: number) {
    //return `This action returns a #${id} Biodata`;
    return await this.BioDataRepository.findOne({
      where: {
        id // same as id:id
      }
    });
  }

  async update(id: number, updateBioDatumDto: UpdateBioDatumDto) {
    //return `This action updates a #${id} Biodatum`;
    return await this.BioDataRepository.update(id, updateBioDatumDto);
  }

  async remove(id: number) {
    //return `This action removes a #${id} Biodatum`;
    return await this.BioDataRepository.delete(id);
  }
}
