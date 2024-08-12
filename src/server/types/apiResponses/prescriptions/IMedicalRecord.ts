import { Commune } from "./ICommune";
import { Doctor } from "./IDoctor";
import { Patient } from "./IPatient";

export interface MedicalRecord {
    code: string;
    id: number;
    type: string;
    detail: string;
    duration: number;
    inserted_at: string;
    old_id: number;
    doctor: Doctor;
    patient: Patient;
    institution: string | null;
    speciality: string;
    folio: number;
    medical_address: string;
    patient_address: string;
    medical_commune: Commune;
    patient_commune: Commune;
    ges: string | null;
    isapre: string;
    observation: string | null;
    ean13: string;
}