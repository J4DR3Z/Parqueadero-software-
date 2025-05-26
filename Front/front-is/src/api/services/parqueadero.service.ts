import api from "./axios.service";

// Obtener parqueaderos disponibles (visible para todos los usuarios)
export const getParqueaderosDisponibles = () => {
    const controller = new AbortController();
    const call = api.get(`/parqueaderos/disponibles`, { signal: controller.signal });
    return { call, controller };
};

// Obtener todos los parqueaderos (requiere permisos de administrador)
export const getTodosParqueaderos = () => {
    const controller = new AbortController();
    const call = api.get(`/parqueaderos`, { signal: controller.signal });
    return { call, controller };
};

// Cambiar estado de disponibilidad de un parqueadero
export const actualizarEstadoParqueadero = (id: number, disponible: boolean) => {
    const controller = new AbortController();
    const call = api.put(`/parqueaderos/${id}/estado`, { disponible }, { signal: controller.signal });
    return { call, controller };
};