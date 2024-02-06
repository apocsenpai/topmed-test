import api from "@/services/api"

export interface ICredentials {
    email: string;
    password: string;
}

export const signIn = (credentials : ICredentials) => api.post("/sign-in", credentials)