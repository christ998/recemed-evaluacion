export interface Doctor {
    id: number;
    status: string;
    address: string;
    email: string;
    inserted_at: string;
    rut: string;
    user_id: number;
    first_name: string;
    last_name: string;
    speciality: string;
    billing_address: string;
    billing_email: string;
    billing_phone: string;
    billing_tax_id: string;
    business_activity: string;
    company_name: string;
    deleted_at: string | null;
    license_number: number;
    phone: string;
}
