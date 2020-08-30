'use strict';
import React from 'react'


const Menu = (props) => {
    const {activeTab} = props;
    const routes = {
      "home": "home",
      "profil": "profil"
    };

    return (
    <div>
        <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
            <li className="nav-item">
                <a className={activeTab === routes.home ? 'nav-link active': 'nav-link'} id="home-tab" data-toggle="tab" href="#home" role="tab"
                   aria-controls="home" aria-selected="true">Home</a>
            </li>
            <li className="nav-item">
                <a className={activeTab === routes.profil ? 'nav-link active': 'nav-link'} id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                   aria-controls="profile" aria-selected="false">Profile</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab"
                   aria-controls="contact" aria-selected="false">Contact</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="contact-tab" data-toggle="tab" href="#compte" role="tab"
                   aria-controls="contact" aria-selected="false">Compte</a>
            </li>
        </ul>
        {/*
        <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
        </div>
        */}
    </div>
    )
};

export default Menu;
