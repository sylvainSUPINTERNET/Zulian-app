'use strict';

import React, {useEffect} from "react";
import Menu from "../Menu";
import {Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export const MapHome = () => {

    const [position, setPosition] =  React.useState([19, 19]);

    useEffect( () => {
        navigator.geolocation.getCurrentPosition(
            pos => {
                const lat = JSON.stringify(pos.coords.latitude);
                const lon = JSON.stringify(pos.coords.longitude);
                setPosition([lat, lon])
            },err => {
                alert(err)
            }, {
                enableHighAccuracy: true, timeout: 20000, maximumAge: 1000
            }

        )
    }, []);

    const style = {
        map: {
            height: '100vh'
        }
    };

    return (<div>
        <Menu/>
        <Map
            className="map" style={style.map}
            center={[position[0], position[1]]}
            zoom={17}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <Marker
        position={position}
        onMouseOver={ (e) => {

        }}
        onMouseOutr={ (e) => {

        }}>
        </Marker>
        </Map>
    </div>)
};

