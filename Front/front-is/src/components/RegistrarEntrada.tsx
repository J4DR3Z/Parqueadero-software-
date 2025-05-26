import React, { useState } from "react";
import { registrarEntrada } from "../services/registro.service";

const RegistrarEntrada = () => {
    const [placa, setPlaca] = useState("");
    const [parqueaderoId, setParqueaderoId] = useState("");

    const handleRegistrarEntrada = () => {
        const registro = {
            vehiculo: { placa },
            parqueadero: { id: parseInt(parqueaderoId) },
        };

        const { call } = registrarEntrada(registro);
        call.then((response) => {
            alert("Entrada registrada con éxito");
        }).catch((error) => {
            console.error("Error al registrar la entrada:", error);
        });
    };

    return (
        <div>
            <h3>Registrar Entrada</h3>
            <input
                type="text"
                placeholder="Placa del vehículo"
                value={placa}
                onChange={(e) => setPlaca(e.target.value)}
            />
            <input
                type="text"
                placeholder="ID del parqueadero"
                value={parqueaderoId}
                onChange={(e) => setParqueaderoId(e.target.value)}
            />
            <button onClick={handleRegistrarEntrada}>Registrar Entrada</button>
        </div>
    );
};

export default RegistrarEntrada;