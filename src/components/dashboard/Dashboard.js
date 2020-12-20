import React, {useEffect} from 'react';
import Menu from "../Menu";
import Card from "../card/Card";
import {auth as authentication} from "../../api/authentication/authentication";
import {Redirect, useHistory} from "react-router-dom";
import {VisitorList} from "../visitors/visitorList";
import {People} from "@material-ui/icons";

export const Dashboard = (props) => {
    const history = useHistory();

    // pagination visitor list
    const [page, setPage] = React.useState(0);
    const [size, setSize] = React.useState(10);
    const [filter, setFilter] = React.useState("createdAt");

    useEffect(() => {

        //stuff that happens upon initial render
        ///and subsequent re-renders
        //e.g. make a fetch request, open a socket connection
        return () => {
            //stuff that happens when the component unmounts
            //e.g. close socket connection
        }
    }, []);


 return (
     <div className="">
         <header className="">
             <Menu activeTab="home"></Menu>
         </header>
         <button onClick={ () => {
             setPage(page + 1);
         }}>
             change page {page}
         </button>
         <main className="container-fluid witness mb-4">
             <div className="row black-background mt-4">
                 <div className="col-md-6">
                     <div className="card m-3 rainbow3 shadow p-3 mb-5 rounded rainbow-box" >
                         <h3 className="card-title m-3 text-lg">
                             <People className="mr-2" style={{color: '#BE90D4'}}></People>
                             Visitors registered</h3>
                         <div className="overflow-auto card-body">
                            <VisitorList page={page} size={size} filter={filter}/>
                         </div>
                     </div>
                 </div>

             </div>

         </main>
     </div>
 )
};
