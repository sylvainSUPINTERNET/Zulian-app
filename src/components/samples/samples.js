
import React, {useEffect} from "react";
import Menu from "../Menu";
import {TreeList} from "../treeList/treeList";
import add from '../../icons/add.svg';
import {Style} from "../profil/profil.style";
import {album} from "../../api/sampleAlbum/sampleAlbum";
import socketIOClient from "socket.io-client";
import * as conf from "../../api/conf"
export const Samples= (props) => {

    const [newAlbum, setNewAlbum] = React.useState("");
    const [disable, setDisable] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

//INTERESSTING : https://www.valentinog.com/blog/socket-react/

    useEffect( () => {
        const socket = socketIOClient(conf.default.chat.URL);
        socket.on("channel1", data => {
            console.log("Response : ", data)
        })
    }, []);

    const createAlbumSubmit = async ev => {
        ev.preventDefault();

        setIsLoading(true);
        setDisable(true);

        let resp = await album.createAlbum(newAlbum);
        const { status } = await resp.json();

        if ( status === 200 ) {
            console.log("OK")
        } else {
            console.log("NOT OK")
        }
        console.log("CREATE", ev);
    }

    const onChangeCreateAlbum = ev => {
        setNewAlbum(ev.target.value)
    }

    return (
        <div className="">
            <header className="">
                <Menu></Menu>
            </header>
            <div className="container">
                <div className="black-background">
                    <p className="text-white ml-3 display-4"> Manage your albums</p>
                        <div className="d-flex align-items-center justify-content-center">
                            <button className="btn btn-lg rainbow-box white-text mb-3 lead" data-toggle="collapse" data-target="#collapseContainer" >
                                <i className="fa fa-plus rainbow"> </i>  Ajouter un album
                            </button>
                        </div>
                    <div className="collapse" id="collapseContainer">
                        <div className="d-flex align-items-center justify-content-center flex-column">
                            <form onSubmit={createAlbumSubmit}>
                                <input type="text" placeholder="Super album" className="rainbow-box text-center" style={Style.formCreateAlbumInput} onChange={onChangeCreateAlbum}/>
                                <input style={Style.formCreateAlbumSubmit} className="btn witness" type="submit" value="Ajouter"/>
                            </form>
                        </div>
                    </div>
                    <TreeList/>
                </div>
            </div>
        </div>
    )

}

