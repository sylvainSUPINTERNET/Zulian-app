import React, {useEffect} from "react";
import {visitor} from "../../api/visitors/visitors";


export const VisitorList = (props) => {
    let [visitors, setVisitors] = React.useState([]);

    useEffect( () => {

        const getVisitors = async (page, size, filter) => {
            try {
                const resp = await visitor.getVisitors(page, size, filter);
                const jsonData = await resp.json();
                setVisitors(jsonData.content);

                return jsonData;
            } catch (e) {
                console.log(e);
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
            {
                visitors.map( visitor => {
                    return <ul>
                        <li>{visitor.id}</li>
                        <li>{visitor.country}</li>
                    </ul>
                })
            }
        </div>
    )
};