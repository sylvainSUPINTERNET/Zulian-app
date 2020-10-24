import React, {useEffect} from 'react';
import Menu from "../Menu";
import Card from "../card/Card";
import {auth as authentication} from "../../api/authentication/authentication";
import {Redirect, useHistory} from "react-router-dom";


export const Dashboard = (props) => {
    const history = useHistory();

    useEffect( () => {

    }, []);


 return (
     <div className="">
         <header className="">
             <Menu activeTab="home"></Menu>
         </header>
         <main className="container witness mb-4">
             <div className="row">
                 <p>Ok</p>
             </div>

         </main>
     </div>
 )
};
