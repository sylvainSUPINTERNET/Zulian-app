import React, {useEffect, useState, useMemo} from "react";


import Menu from "../Menu";
import Thick from "../../api/CoinDashboard/Thick";
import {pushBack} from "../../utils/coinDashboardUtils";


export const CoinDashboard = () => {

    let [ws, setWs] = useState(new WebSocket('wss://ws-feed.pro.coinbase.com'));
    let [listThick, setListThick] = useState([]);


    let test = []


    useEffect(() => {
        console.log(ws);
    });

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
    }


    ws.onmessage = async msg => {
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


            /*
            if ( listThick.length > 5) {
                console.log(listThick.pop())
                setListThick([thickObj,...listThick])
            } else {
                setListThick([...listThick, thickObj])
            }*/


        }
    }


    return (
        <div className="">
            <header className="">
                <Menu activeTab=""/>
            </header>
            <main className="container witness mb-4">
                <div className="row">
                    <ul>

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

                        }

                    </ul>
                </div>
            </main>
        </div>

    )
}