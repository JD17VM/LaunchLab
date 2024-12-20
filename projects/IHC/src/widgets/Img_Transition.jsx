import React, { useState, useEffect } from "react";

import imageHelper from '../utils/imageHelper'

export function Img_Transition() {
    const images = [
        imageHelper.imagen__principal_index_LL_1,
        imageHelper.imagen__principal_index_LL_2,
        imageHelper.imagen__principal_index_LL_3,
    ];

    const [currentIndex, setCurrentIndex] = useState(0); // Índice de la imagen actual
    const [opacity, setOpacity] = useState(1); // Control de opacidad para la transición

    useEffect(() => {
        // Intervalo para cambiar la imagen
        const interval = setInterval(() => {
            setOpacity(0); // Inicia la transición de desvanecimiento
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setOpacity(1); // Restablece la opacidad
            }, 1000); // El tiempo debe coincidir con la duración de la transición (1s)
        }, 5000); // Cambiar imagen cada 5 segundos

        return () => clearInterval(interval); // Limpiar intervalo al desmontar
    }, [images.length]);

    return (
        <img
            src={images[currentIndex]}
            alt={`Imagen ${currentIndex + 1}`}
            style={{
                transition: "opacity 1s ease-in-out", // Transición suave
                opacity: opacity, // Control de visibilidad
            }}
        />
    );
}
