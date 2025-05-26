import React, { useState } from "react";
import { registrarSalida } from "../services/registro.service";

const RegistrarSalida = () => {
    const [registroId, setRegistroId] = useState("");

    const handleRegistrarSalida = () => {
        const { call } = registrarSalida(parseInt(registroId));
        call.then((response) => {
            const data = response.data;
            alert(`Salida registrada con éxito. Valor a pagar: $${data.valorAPagar}`);
        }).catch((error) => {
            console.error("Error al registrar la salida:", error);
        });
    };

    return (
        <div>
            <h3>Registrar Salida</h3>
            <input
                type="text"
                placeholder="ID del registro"
                value={registroId}
                onChange={(e) => setRegistroId(e.target.value)}
            />
            <button onClick={handleRegistrarSalida}>Registrar Salida</button>
        </div>
    );
};

export default RegistrarSalida;