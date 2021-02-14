
import React, {useEffect} from "react";
import Menu from "../Menu";
import {TreeList} from "../treeList/treeList";

export const Samples= (props) => {
    return (
        <div className="">
            <header className="">
                <Menu></Menu>
            </header>
            <div className="container">
                <div className="black-background">
                    <p className="text-white">Salut</p>
                    <TreeList/>
                </div>
            </div>
        </div>
    )

}

