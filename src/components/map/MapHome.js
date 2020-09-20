'use strict';

import React, {useEffect} from "react";
import Menu from "../Menu";
import {Map, TileLayer, Marker, Popup, Polyline} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoneyBill, faRocket, faStar} from "@fortawesome/free-solid-svg-icons";
import {Modal} from "../modal/Modal";

export const MapHome = () => {


    // TODO : https://blog.ippon.fr/2018/04/03/osrm-pour-tracer-la-route/
    // TODO : https://github.com/Project-OSRM/osrm.js
    //https://router.project-osrm.org/route/v1/driving/13.414167165756226,52.52167215019524;13.4197763,52.5003103?geometries=geojson&alternatives=true&steps=true&generate_hints=false
    // http://router.project-osrm.org/route/v1/driving/-1.8744130630953275,52.45318441573963;-1.879401971863028,52.451059431849615;-1.8783612747652496,52.44962092302177;-1.882395317123648,52.44969938835112;-1.8824275036318268,52.452046744809195;-1.8794663448793851,52.45332825709778;-1.8898840446932288,52.454230523991356
    // TODO -> checker le zoom pour gagner en precision>
    // EXEMPLE : avec matrice pour dessiner la ligne
    //http://router.project-osrm.org/route/v1/driving/-5.81336,43.495596;-5.81779973,43.51087296?overview=full&geometries=geojson

    // https://routing.openstreetmap.de/routed-bike/route/v1/driving/2.2668435,48.827963;2.4324353,48.7037392?overview=false&alternatives=true&steps=true

    //https://routing.openstreetmap.de/routed-car/route/v1/driving/2.2668435,48.827963;2.2646917,48.8275859?overview=false&alternatives=true&steps=true&geometries=geojson
    const [showParkinginfos, setShowParkingInfo] = React.useState(false);
    const [showLoaderParkingInfo, setShowLoaderParkingInfo] = React.useState(false);

    const [position, setPosition] = React.useState([0, 0]);

    useEffect(() => {
        // TODO
        // 1) -> create Parking with auto generate coord (from nominatim) coord of street
        // 2) -> with nominatim get coord of current position
        // 3) -> send 2 positions to API (update API too) to generate the matrix for polyline
        // 4) rerender the component with the polyline (if user click on "drive")
        
         let getTestData = async () => {
             const test = await fetch(`http://localhost:4999/api/v1/map/vectorize/eazeae;ezaeaea`);
             const testJson = await test.json();

             console.log("data -> ", testJson);
        };

        console.log(getTestData());

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

                        <Polyline positions={
                            [
                                [
                                    48.827963,
                                    2.266844,
                                ],
                                [
                                    48.828046,
                                    2.266657,
                                ],
                                [
                                    48.828054,
                                    2.266638,
                                ],
                                [
                                    48.828179,
                                    2.266365,
                                ],
                                [
                                    48.828308,
                                    2.266049,
                                ],
                                [
                                    48.828367,
                                    2.265886,
                                ],
                                [
                                    48.828367,
                                    2.265886,
                                ],
                                [
                                    48.828273,
                                    2.265721,
                                ],
                                [
                                    48.827586,
                                    2.264692,
                                ],
                                [
                                    48.827586,
                                    2.264692,
                                ],
                                [
                                    48.827586,
                                    2.264692,
                                ],
                                [
                                    48.828120,
                                    2.2646200
                                ]
                            ]
                        } color={'blue'} />

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
                                    <img className="img-fluid mb-3" src="data:image/jpeg;base64,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"/>
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
                                <div className="mt-3 mb-3">
                                    <Modal idModal="parking-rent-modal" btnClassNameTrigger="btn btn-success" btnTextTrigger="Je réserve" title="This is my modal" footerBtnTextClose="close" footerBtnTextAction="apply" content="salut" wrapperTriggerBtnClassName="text-center" className="modal-dialog modal-full-height modal-right"></Modal>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>)
};

