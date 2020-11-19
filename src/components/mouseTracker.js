import { useState, useEffect } from "react";

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    const updateMousePosition = ev => {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
        console.log(window.pageXOffset)
        let torch = document.createElement("div");
        torch.setAttribute("id","mouseTrackerTorch")
        torch.style.position = "absolute";
        torch.style.width = '20px';
        torch.style.height = '20px';
        torch.style.left = ev.clientX + 'px';
        torch.style.top = ev.clientY + 'px';
        torch.style.backgroundColor = '#00ff00';
        torch.style.borderRadius = "50%";
        if ( document.getElementById("mouseTrackerTorch") === null ) {
            document.body.appendChild(torch);
        } else {
            document.body.removeChild(document.getElementById("mouseTrackerTorch"));
            document.body.appendChild(torch);
        }


    };

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);



        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return mousePosition;
};

export default useMousePosition;