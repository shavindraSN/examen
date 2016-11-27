export class User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    email_verified: boolean;
    district: string;
    nic: string;
    phone: string;
    phone_no_verified: boolean;
    type_id: number;
    type: string;
    password: string;
}
export class UserType {
    id: number;
    type_name: string;
}