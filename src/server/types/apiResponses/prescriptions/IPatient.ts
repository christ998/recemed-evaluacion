export interface Patient {
    id: number;
    address: string;
    email: string;
    inserted_at: string;
    rut: string;
    birthday: string;
    user_id: number;
    first_name: string;
    last_name: string;
    sex: string;
    deleted_at: string | null;
    phone: string;
}