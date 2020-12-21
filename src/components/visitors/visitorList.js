import React, {useEffect} from "react";
import {visitor} from "../../api/visitors/visitors";
import {
    AccessAlarm, DevicesTwoTone, Language, LanguageTwoTone,
    LocationCityTwoTone,
    LocationOn,
    LocationOnTwoTone,
    OutlinedFlagTwoTone,
    ThreeDRotation
} from '@material-ui/icons';
import Card from "../card/Card";


export const VisitorList = (props) => {
    let [visitors, setVisitors] = React.useState([]);
    let [progressBarValue, setProgressBarValue] = React.useState(0);
    let [visitorIsLoaded, setVisitorIsLoaded] = React.useState(false);

    // TODO :
    // - Add WS support
    // - Change event server side, to received properly notification whe nnew user is added
    // - Popup for users added ? => no


    useEffect( () => {

        const getVisitors = async (page, size, filter) => {
            for (let x =0; x <= 100; x++) {
                
                setTimeout( async() => {
                    setProgressBarValue(x);

                    if ( x === 100 ) {
                        try {
                            const resp = await visitor.getVisitors(page, size, filter);
                            const jsonData = await resp.json();
                            setVisitors(jsonData.content);
                            setTimeout( () => {
                                setVisitorIsLoaded(true);
                            }, 1500)
                            return jsonData;
                        } catch (e) {
                            console.log(e);
                        }
                    }
                },1000);


            }

        }

        const {size, page, filter} = props;
        getVisitors(page,size, filter);

        //stuff that happens upon initial render
        ///and subsequent re-renders
        //e.g. make a fetch request, open a socket connection
        return () => {
            //stuff that happens when the component unmounts
            //e.g. close socket connection
        }
    }, [props.page]);


    return (
        <div className="">
            <div className="">
                <div className={visitorIsLoaded === true ? "d-none" : "progress"}>
                    <div className={"progress-bar progress-bar-striped progress-bar-animated witness"} role="progressbar"
                         aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{"width": progressBarValue + "%"}}>
                        Synchronization ...
                    </div>
                </div>
            </div>

            <div className="">
                {
                    visitors.map( visitor => {
                        return    <div className="shadow p-3 card mt-3 text-white rainbow-box" style={{"background": "#000000"}}>
                            <div className="card-body rainbow3">
                                <h4 className="card-title">{visitor.id}</h4>
                                <div className="card-text text-white text-justify">
                                    <p>
                                        <OutlinedFlagTwoTone style={{"color": "#BE90D4"}} className="mr-2"/>
                                        {visitor.country} - {visitor.countryCode}
                                    </p>
                                </div>
                                <div className="card-text text-white text-justify">
                                    <p>
                                        <LocationOnTwoTone style={{"color": "#BE90D4"}} className="mr-2"/>
                                        {visitor.state} - {visitor.town} - {visitor.postcode}
                                    </p>
                                </div>
                                <div className="card-text text-white text-justify">
                                    <p>
                                        <LocationCityTwoTone style={{"color": "#BE90D4"}} className="mr-2"/>
                                        {visitor.county} - {visitor.municipality} - {visitor.postcode}
                                    </p>
                                </div>
                                <hr className={"bg-danger"}></hr>
                                <h5>Browser infos</h5>
                                <div className="card-text text-white text-justify">
                                    <p>
                                        <LanguageTwoTone style={{"color": "#BE90D4"}} className="mr-2"/>
                                        {visitor.browserLanguage}
                                    </p>
                                </div>
                                <div className="card-text text-white text-justify">
                                    <p>
                                        <DevicesTwoTone style={{"color": "#BE90D4"}} className="mr-2"/>
                                        {visitor.browserPlatform}
                                    </p>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>

        </div>
    )
}