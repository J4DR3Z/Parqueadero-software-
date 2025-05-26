import React, { useEffect, useState } from "react";
import { getParqueaderosDisponibles } from "../api/services/parqueadero.service";

const ParqueaderosDisponibles = () => {
    const [parqueaderos, setParqueaderos] = useState([]);

    useEffect(() => {
        const { call, controller } = getParqueaderosDisponibles();
        call.then((response) => {
            setParqueaderos(response.data);
        }).catch((error) => {
            console.error("Error al cargar los parqueaderos disponibles:", error);
        });

        return () => controller.abort();
    }, []);

    return (
        <div>
            <h3>Parqueaderos Disponibles</h3>
            <ul>
                {parqueaderos.map((parqueadero: any) => (
                    <li key={parqueadero.id}>
                        Código: {parqueadero.codigo} - Tipo: {parqueadero.tipo}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ParqueaderosDisponibles;