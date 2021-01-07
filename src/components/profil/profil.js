import React, {useEffect} from 'react'
import Menu from "../Menu";


export const Profil = (props) => {
    return (

        <div className="">
            <header className="">
                <Menu></Menu>
            </header>
            <div className="container mt-2 black-background rounded p-3">
                <h3 className="mt-3 mb-2 white-text text-center">Vous n'avez pas de profil ?</h3>
                <div className="d-flex align-items-center justify-content-center">
                    <button className="btn btn-lg rainbow-box white-text mb-3 lead">
                        <i className="fa fa-plus rainbow"> </i>  Creer un profile
                    </button>
                </div>
            </div>
        </div>

    )
}

