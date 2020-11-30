import React, {useEffect, useState, useMemo} from "react";


import Menu from "../Menu";
import Thick from "../../api/CoinDashboard/Thick";
import {pushBack} from "../../utils/coinDashboardUtils";
import useMousePosition from "../mouseTracker";
import config from "../../config/api";

export const CoinDashboard = () => {
    let [userLocalisationData, setUserLocalisationData] = useState({});

    let [bi, setTest] = useState("salut");
    let [wsIsConnected, setWsConnected] = useState(false);

    let useMousePositionResponse = useMousePosition();
    const { x, y } = useMousePositionResponse[0];
    //const matrixMove = useMousePositionResponse[1];
    const hasMovedCursor = typeof x === "number" && typeof y === "number";



    //let [ws, setWs] = useState(new WebSocket('wss://ws-feed.pro.coinbase.com'));
    let [listThick, setListThick] = useState([]);


    let test = []


    const ws = new WebSocket(config.wsUrl)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition( async (success) => {
            const getUserLocalisationInfos = await fetch (`http://nominatim.openstreetmap.org/reverse?format=json&lat=${success.coords.latitude}&lon=${success.coords.longitude}&zoom=18&addressdetails=1`)
            const jsonUserInfosLocalisation = await getUserLocalisationInfos.json();
            const { country, country_code, county, municipality, postcode, state, town } = jsonUserInfosLocalisation.address;
            
            setUserLocalisationData(
                {
                    country,
                    country_code,
                    county,
                    municipality,
                    postcode,
                    state,
                    town,
                    browserLanguage: navigator.language,
                    devicePlatform : navigator.platform
                }
            );
        

            ws.send(JSON.stringify(                {
                country,
                country_code,
                county,
                municipality,
                postcode,
                state,
                town,
                browserLanguage: navigator.language,
                browserPlatform : navigator.platform
            }));

        }, (err) => {

            })
        //console.log(ws);
    }, []);

    ws.onopen = (openEv) => {
        setWsConnected(true);
    }


    ws.onmessage = (msgEv) => {
        console.log("message", msgEv)
    }

    ws.onerror = (errEv) => {
        setWsConnected(false);

    }

    /*
    ws.onopen = () => {
        ws.send(JSON.stringify({
            "type": "subscribe",
            "product_ids": [
                "ETH-USD",
                "ETH-EUR"
            ],
            "channels": [
                {


                    "name": "ticker",
                    "product_ids": [
                        "ETH-BTC",
                        "ETH-USD"
                    ]
                }
            ]
        }));
    }*/


    /*
    ws.onmessage = async msg => {

        /*
        const r = await fetch('http://localhost:8080/api/v1/products');
        console.log(await r.json());

         */

        /*
        let thick = JSON.parse(msg.data);

        let hasOneValueUndefined = Object.values(thick).filter( th => typeof th === "undefined");

        // Reject thick with undefined value
        if ( hasOneValueUndefined.length === 0 ) {

            const {
                best_ask,
                best_bid,
                high_24h,
                last_size,
                low_24h,
                open_24h,
                price,
                product_id,
                sequence,
                side,
                time,
                trade_id,
                type,
                volume_24h,
                volume_30d
            } = thick;

            let thickObj = new Thick(best_ask,
                best_bid,
                high_24h,
                last_size,
                low_24h,
                open_24h,
                price,
                product_id,
                sequence,
                side,
                time,
                trade_id,
                type,
                volume_24h,
                volume_30d)


            setListThick(pushBack(listThick, thickObj, 5))

         */


            /*
            if ( listThick.length > 5) {
                console.log(listThick.pop())
                setListThick([thickObj,...listThick])
            } else {
                setListThick([...listThick, thickObj])
            }*/


    /*
        }
        */

    let displayUserLocalisationInformations = () => {
        if ( Object.values(userLocalisationData).length > 0 ) {
            return (
                <div>
                    {
                        Object.keys(userLocalisationData).map( key => {
                            return <pre className="black-background">{key} : {userLocalisationData[key]}</pre>
                        })
                    }
                </div>
            )
        } else {
            return (
                <div>
                    <p> loading user info ...</p>
                </div>
            )
        }
    }

    return (
        <div className="">
            <header className="">
                <Menu activeTab=""/>
            </header>

            <p>TEST : { wsIsConnected } </p>
            { displayUserLocalisationInformations() }

            <main className="container witness mb-4">
                <h1>
                    {hasMovedCursor
                        ? `Your cursor is at ${x}, ${y}.`
                        : "Move your mouse around."}
                </h1>
                <div className="row">
                    <ul>

                        {/*
                        {
                            listThick.map(thick => {
                                if ( thick ) {
                                    return (
                                        <pre>
                                            <li><p style={{color: 'white', margin: '10px'}}> {thick.best_ask}</p></li>
                                        </pre>
                                    )
                                }
                            })

                        }*/}

                    </ul>
                </div>

            </main>
        </div>

    )
}