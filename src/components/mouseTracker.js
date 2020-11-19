import { useState, useEffect } from "react";

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    const updateMousePosition = ev => {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
        let test = document.createElement("div").setAttribute("id","mouseTrackerTorch")
        document.body.appendChild(test)

    };

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);



        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return mousePosition;
};

export default useMousePosition;