import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ClinicalRecord } from "src/hospital-data/clinical-record/entities/clinical-record.entity";
@Entity()
export class BioDatum {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    firstName: string;
    @Column()
    surName: string;
    @Column()
    middleName: string;
    @Column()
    dateOfBirth: Date;
    @Column()
    homeAddress: string;
    @Column()
    dateOfRegistration: Date;
    @Column()
    matriculationNumber: number;
    @OneToMany(() => ClinicalRecord, Clinicalrecord => Clinicalrecord.BioDatum)
    clinicrecords: ClinicalRecord[]
}
