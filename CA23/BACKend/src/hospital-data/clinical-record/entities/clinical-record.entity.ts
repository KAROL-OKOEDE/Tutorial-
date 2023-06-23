import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BioDatum } from "src/hospital-data/bio-data/entities/bio-datum.entity";
@Entity()
export class ClinicalRecord {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    clinicDate: Date;
    @Column()
    natureOfAilment: string;
    @Column()
    medicinePrescribed: string;
    @Column()
    procedureUndertaken: string;
    @Column()
    dateOfNextAppointment: Date;

    @ManyToOne(() => BioDatum, (patient) => patient.clinicrecords)
    BioDatum: BioDatum;
   
}
