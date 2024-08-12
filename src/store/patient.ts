import { atom } from 'nanostores';

interface Patient {
  rut: string;
  password: string;
}

export const $patient = atom<Patient>({
  rut: '',
  password: '',
});

export function addPatient(patient: Patient) {
  $patient.set(patient);
}
