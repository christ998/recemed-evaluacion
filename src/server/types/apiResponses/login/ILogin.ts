import { Commune } from '../prescriptions/ICommune';

interface Profile {
  profile: string;
  address: string;
  email: string;
  rut: string;
  birthday: string;
  first_name: string;
  last_name: string;
  sex: string;
  commune: Commune;
  phone: string;
}

export interface ILoginData {
  token: string;
  profiles: Profile[];
}

export interface ILoginResponse {
  data: ILoginData;
}
