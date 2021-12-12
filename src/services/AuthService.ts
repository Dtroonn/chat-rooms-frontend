import { ILoginFormValues } from "components/LoginForm";
import { $axios } from "core/axios";
import { IUser } from "redux/ducks/auth/contracts/state";

export interface IAuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}

export class AuthService {
    static async login(data: ILoginFormValues): Promise<IAuthResponse> {
        const response = await $axios.post<IAuthResponse>("auth/login", data);

        return response.data;
    }

    static async refresh(): Promise<IAuthResponse> {
        const response = await $axios.get<IAuthResponse>("auth/refresh");

        return response.data;
    }

    static async confirmMail(token: string): Promise<IAuthResponse> {
        const response = await $axios.get<IAuthResponse>(`auth/verify-mail/${token}`);

        return response.data;
    }
}
