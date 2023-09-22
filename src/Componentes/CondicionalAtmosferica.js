import React, { useState, useEffect } from "react";

function CondicionalAtmosferica() {
    const url = "https://api.datos.gob.mx/v1/condiciones-atmosfericas";
    const estadosMx = [
        { "id": 1, "name": "Aguascalientes" },
        { "id": 2, "name": "Baja California" },
        { "id": 3, "name": "Baja California Sur" },
        { "id": 4, "name": "Campeche" }, { "id": 5, "name": "Chiapas" }, { "id": 6, "name": "Chihuahua" }, { "id": 7, "name": "Ciudad de México" }, { "id": 8, "name": "Coahuila " },
        { "id": 9, "name": "Colima" }, { "id": 10, "name": "Durango" }, { "id": 11, "name": "Estado de México" }, { "id": 12, "name": "Guanajuato" }, { "id": 13, "name": "Guerrero" },
        { "id": 14, "name": "Hidalgo" }, { "id": 15, "name": "Jalisco" }, { "id": 16, "name": "Michoacán" }, { "id": 17, "name": "Morelos" }, { "id": 18, "name": "Nayarit" },
        { "id": 19, "name": "Nuevo León" }, { "id": 20, "name": "Oaxaca" }, { "id": 21, "name": "Puebla" }, { "id": 22, "name": "Querétaro " }, { "id": 23, "name": "Quintana Roo" },
        { "id": 24, "name": "San Luis Potosí" }, { "id": 25, "name": "Sinaloa" }, { "id": 26, "name": "Sonora" }, { "id": 27, "name": "Tabasco" }, { "id": 28, "name": "Tamaulipas" },
        { "id": 29, "name": "Tlaxcala" }, { "id": 30, "name": "Veracruz" }, { "id": 31, "name": "Yucatán " },
        { "id": 32, "name": "Zacatecas" }
    ];

    const [datos, setDatos] = useState([]);
    const [estadoActual, setEstadoActual] = useState(""); // Corrección aquí

    const consultarDatos = () => {
        return fetch(url)
            .then((res) => res.json())
            .then((condicionAtm) => setDatos(condicionAtm.results));
    };

    useEffect(() => {
        consultarDatos();
    }, []);

    // Filtra las ciudades según el estado actual
    const ciudadesFiltradas = datos.filter((ciudad) => ciudad.state === estadoActual);

    return (
        <>
            <select
                onChange={(e) => setEstadoActual(e.target.value)}
                value={estadoActual} // Añadido para reflejar el estado seleccionado
            >
                <option value="">SELECCIONA UN ESTADO</option>
                {estadosMx.map((opcion) => (
                    <option key={opcion.id} value={opcion.name}>
                        {opcion.name}
                    </option>
                ))}
            </select>
            {ciudadesFiltradas.map((ciudad, index) => {
                return (
                    <div key={index}>
                        <p>
                            {ciudad.name} - <i>{ciudad.skydescriptionlong}</i>
                        </p>
                    </div>
                );
            })}
        </>
    );
}

export default CondicionalAtmosferica;
