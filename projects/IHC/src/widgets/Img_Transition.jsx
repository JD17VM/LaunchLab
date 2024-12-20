import React, { useState, useEffect } from "react";

export function Img_Transition() {
    const images = [
        "https://via.placeholder.com/400x200?text=Imagen+1",
        "https://jd17vm.github.io/LaunchLab/assets/Foto_JuanDiego-oZNpuWJe.jpg",
        "https://via.placeholder.com/400x200?text=Imagen+3",
    ];

    const [currentIndex, setCurrentIndex] = useState(0); // Índice de la imagen actual

    useEffect(() => {
        const interval = setInterval(() => {
            // Cambiar al siguiente índice (vuelve al inicio si llega al final)
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Cambia cada 5000ms (5 segundos)

        return () => clearInterval(interval); // Limpiar el intervalo al desmontar
    }, [images.length]);

    return (
        <img
            src={images[currentIndex]}
            alt={`Imagen ${currentIndex + 1}`}
        />
    );
}
