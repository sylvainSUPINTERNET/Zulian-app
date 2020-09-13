'use strict';

import React, {useEffect} from "react";
import Menu from "../Menu";
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoneyBill, faRocket, faStar} from "@fortawesome/free-solid-svg-icons";

export const MapHome = () => {

    const [showParkinginfos, setShowParkingInfo] = React.useState(false);
    const [showLoaderParkingInfo, setShowLoaderParkingInfo] = React.useState(false);

    const [position, setPosition] = React.useState([0, 0]);

    useEffect(() => {
        const L = require("leaflet");

        console.log("INFO parking : ", showParkinginfos);

        // import for icon marker
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
            iconUrl: require("leaflet/dist/images/marker-icon.png"),
            shadowUrl: require("leaflet/dist/images/marker-shadow.png")
        });

        navigator.geolocation.getCurrentPosition(
            pos => {
                const lat = JSON.stringify(pos.coords.latitude);
                const lon = JSON.stringify(pos.coords.longitude);
                setPosition([lat, lon])
            }, err => {
                alert(err)
            }, {
                enableHighAccuracy: true, timeout: 20000, maximumAge: 1000
            }
        )
    }, [showParkinginfos, showLoaderParkingInfo]);




    const style = {

        map: {
            height:'60vh',
        },
        loadingCardTitle: {
            backgroundColor: "#f5f6fa", width: '100%', height: '20px'
        },
        loadingCardContent1: {
            backgroundColor: "#f5f6fa", width: '70%', height: '20px'
        },
        loadingCardContent2: {
            backgroundColor: "#f5f6fa", width: '70%', height: '20px'
        },
        loadingCardContent3: {
            backgroundColor: "#f5f6fa", width: '70%', height: '20px'
        }
    };

    const markerClick = (ev) => {
            setShowParkingInfo(false);
            setShowLoaderParkingInfo(true);

            setTimeout( () => {
                setShowParkingInfo(true);
                setShowLoaderParkingInfo(false);
            }, 2000);

    };

    const meIcon = new L.Icon({
        iconUrl: 'https://vignette3.wikia.nocookie.net/wowwiki/images/d/db/Spell_shadow_possession.png/revision/latest?cb=20061125015057',
        iconAnchor: [20, 40],
        popupAnchor: [-6, -37],
        iconSize: [25, 25],
    });

    const parkingIcon = new L.Icon({
        iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_charm.jpg',
        iconAnchor: [20, 40],
        popupAnchor: [-6, -37],
        iconSize: [25, 25],
    });
    return (<div>
        <Menu/>
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-12">
                    <Map
                        className="map" style={style.map}
                        center={[position[0], position[1]]}
                        zoom={17}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

                        <Marker position={position} icon={meIcon} id="myPosition">
                            <Popup>
                                Vous êtes ici
                            </Popup>
                        </Marker>

                        <Marker position={[
                            48.828144,2.2646452
                        ]} onClick={markerClick} icon={parkingIcon}>
                            <Popup>
                                Exemple parking expectedh ere
                            </Popup>
                        </Marker>
                    </Map>
                </div>


                <div className={ showLoaderParkingInfo === true ? 'col-md-12 col-12 loaderBlink': "d-none"}>
                    <div className="container mt-2 mb-3">
                        <div className="card border-0 mx-auto">
                            <div className="card-body">
                                <img className="img-fluid mb-3" src="https://voyagesaucoeurdelascience.fr/wp-content/uploads/2019/02/light-grey-background.png"/>
                                <div className="" style={style.loadingCardTitle}>
                                </div>
                                <div className="card-text mt-2" style={style.loadingCardContent1}></div>
                                <div className="card-text mt-2" style={style.loadingCardContent2}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={ showParkinginfos === false ? 'd-none': "col-md-12 col-12"}>
                    <div className="container mt-2 mb-3">
                        <div className="card border-0 mx-auto">
                            <div className="card-body">
                                <h5 className="card-title">Parking voiture sport</h5>
                                <div className="text-center">
                                    <img className="img-fluid mb-3" src="https://lh3.googleusercontent.com/proxy/YlgV2Eq1vpseViPM6WB0TnLMdWOm6hpjOS8yVRqJ4bxy-KI8QYhI4zPFTSoWdk_ZxxRD1zSf5mT3vTBDf__WPwQPVfWKt7uQjKa_6m5nbhQ-ZnwdbYS0bAhFb5yDlVEwF_4qzWPtjtDNYnq4JIKXiNONV5meejWSUffzdtCouvk4DkgpFQBH-Bt8TrNiBA"/>
                                </div>
                                <div className="row mt-2 mb-2">
                                    <div className="col-7 mt-2">
                                        <p className="text-center">(487 avis)</p>
                                        <p className="text-center"><FontAwesomeIcon icon={faStar} color={'blue'} size="1x" className={"ml-2"}/><FontAwesomeIcon icon={faStar} color={'blue'} size="1x" className={"ml-2"}/><FontAwesomeIcon icon={faStar} color={'blue'} size="1x" className={"ml-2"}/></p>
                                        <p className="text-center">10 / h <FontAwesomeIcon icon={faMoneyBill} color={'green'} size="2x" className={"ml-2"}/></p>
                                    </div>
                                    <div className="col-5">
                                        <h6 className="text-center">Jean Marc</h6>
                                        <img className="img-fluid rounded-circle" src="https://wow.zamimg.com/uploads/screenshots/normal/875650.jpg" />
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <p className="text-justify card-text">Pellentesque eleifend ipsum ac nisl faucibus congue. Pellentesque condimentum, nunc pellentesque faucibus gravida, ante odio pulvinar est, non porttitor diam urna et tortor. Morbi in quam neque. Cras gravida, velit eget vulputate vestibulum, lorem odio elementum dui, ac euismod mi dui id justo</p>
                                </div>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>)
};

