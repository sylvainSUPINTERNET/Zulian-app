import React from 'react'


const Menu = (props) => {
    const {activeTab} = props;
    const routes = {
      "home": "home",
      "profil": "profil"
    };

    return (
    <div>
        <nav className="p-4 navbar navbar-expand-lg navbar-dark black-background">
            <a className="navbar-brand" href="#">
                <img src="https://static.vecteezy.com/system/resources/previews/000/480/309/non_2x/supermassive-black-hole-vector-graphic.jpg" width="30" height="30" alt=""/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link menu-nav-text" href="/">Accueil</a>
                    <a className="nav-item nav-link menu-nav-text" href="/produits">Nos produits</a>
                    <a className="nav-item nav-link menu-nav-text" href="#">Compte</a>
                    <a className="nav-item nav-link menu-nav-text" href="/dashboard">Dashboard</a>

                </div>
            </div>
        </nav>
    </div>
    )
};

export default Menu;
