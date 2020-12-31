import React, {useEffect} from 'react'
import Menu from "../Menu";


export const Profil = (props) => {
    return (

        <div className="">
            <header className="">
                <Menu></Menu>
            </header>
            <div className="container mt-2 black-background">
                <h3>Vous n'avez pas de profil ?</h3>
                <a href="/">Creer un profile</a>
            </div>
        </div>

    )
}

