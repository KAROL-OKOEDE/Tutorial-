import { Module } from '@nestjs/common';
import { BioDataModule } from './bio-data/bio-data.module';
import { ClinicalRecordModule } from './clinical-record/clinical-record.module';

@Module({
  imports: [BioDataModule, ClinicalRecordModule]
})
export class HospitalDataModule {}
