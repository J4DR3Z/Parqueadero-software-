import api from "./axios.service";

// Registrar entrada de un vehículo
export const registrarEntrada = (registro: any) => {
    const controller = new AbortController();
    const call = api.post(`/registro/entrada`, registro, { signal: controller.signal });
    return { call, controller };
};

// Registrar salida de un vehículo
export const registrarSalida = (id: number) => {
    const controller = new AbortController();
    const call = api.post(`/registro/salida/${id}`, {}, { signal: controller.signal });
    return { call, controller };
};