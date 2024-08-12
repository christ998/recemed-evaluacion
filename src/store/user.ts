import { ILoginData } from '@/server/types/apiResponses/login/ILogin';
import { atom } from 'nanostores';

export const $user = atom<ILoginData>({
  token: '',
  profiles: [],
});

export function addUser(user: ILoginData) {
  $user.set(user);
}
