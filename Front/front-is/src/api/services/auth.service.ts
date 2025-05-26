import api from "./axios.service";

export const login = (correo: string, password: string) => {
    const controller = new AbortController();
    const call = api.post(`/auth/login`, { correo, password }, { signal: controller.signal });
    return { call, controller };
};

export const register = (userData: any) => {
    const controller = new AbortController();
    const call = api.post(`/auth/register`, userData, { signal: controller.signal });
    return { call, controller };
};