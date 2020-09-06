'use strict';

import React, {useEffect} from "react";
import Menu from "../Menu";
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


export const MapHome = () => {

    const [position, setPosition] = React.useState([0, 0]);

    useEffect(() => {
        const L = require("leaflet");


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
    }, []);


    const style = {

        map: {
            height:'60vh',
        }
    };

    return (<div>
        <Menu/>
        <div className="">
            <div className="row">
                <div className="col-md-12 col-12">
                    <Map
                        className="map" style={style.map}
                        center={[position[0], position[1]]}
                        zoom={17}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        <Marker position={position}>
                            <Popup>
                                A pretty CSS3 popup. <br/> Easily customizable.
                            </Popup>
                        </Marker>
                    </Map>
                </div>
                <div className="col-md-12 col-12">
                    <div className="container mt-2">
                        <div className="card" style={{width: '18rem'}}>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>)
};

