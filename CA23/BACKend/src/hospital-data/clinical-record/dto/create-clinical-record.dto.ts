export class CreateClinicalRecordDto {
    readonly clinicalDate: Date;
    readonly natureofAilment: string;
    readonly medicinePrescribed: string;
    readonly procedureUndertaken: string;
    readonly dateOfNextAppointment: Date;
}
