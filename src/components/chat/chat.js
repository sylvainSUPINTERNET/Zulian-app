import React, {useEffect} from "react";
import Menu from "../Menu";
import socketIOClient from "socket.io-client";
import conf from "../../api/conf";
import confChat from "../../api/chatConf";
import {rooms} from "../../api/rooms/rooms";
import {getUserDetails} from "../../api/authentication/authentication";

export const Chat = () => {

    const [userInfos, setUserInfos] = React.useState(null);
    const [profiles, setProfiles] = React.useState([]);
    const [loadedRooms, setLoadedRooms] = React.useState([]);
    const [currentSocket, setCurrentSocket] = React.useState(null);


    const getUserInfos = async () => {
        const resp = await getUserDetails()
        const jsonUserInfo = await resp.json();
        setUserInfos(jsonUserInfo);
        return jsonUserInfo;
    }

    const loadRooms = async (socket, userInfos) => {
        const resp = await rooms.getMyRooms();

        if ( resp.status === 200 ) {
            const {data} = await resp.json();
            setLoadedRooms(data);
            if ( data.length > 0 ) {
                data.map( room => socket.emit(confChat.joinChannel, {
                    roomName: room.uuid,
                    userName: userInfos.data.name
                }));
            }
            return data;
        }

    }

    const interestingProfile = (event) => {
        // TODO
        // socket io => join room
        // user 1 => socket
        // socket => rooms default + room with the profil target

    }
    useEffect( () => {
        const socket = socketIOClient(conf.chat.URL);
        setCurrentSocket(socket);
        getUserInfos().then( data => {
            loadRooms(socket, data);
        }).catch(err => console.log(err));

        // WHEN LEAVE APP AND COMPONENT GET DESTROYED CLEAN UP THE EFFECT
        return () => socket.disconnect();

    }, []);

    return (<div>
        <header className="">
            <Menu/>
        </header>
        <div>
            <div className="d-flex flex-row justify-content-end mr-5 mt-5">
                <div className="card rainbow-box black-background" style={{width: "40rem", color:'ghostwhite'}}>
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="https://img-3.journaldesfemmes.fr/Cxdu-fKdSUoMh_nDDYNUNv5FZ-4=/910x607/smart/8827fd9dad5547629ccbfdb07b824609/ccmcms-jdf/15163992.jpg" alt="First slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="https://img-3.journaldesfemmes.fr/Cxdu-fKdSUoMh_nDDYNUNv5FZ-4=/910x607/smart/8827fd9dad5547629ccbfdb07b824609/ccmcms-jdf/15163992.jpg" alt="Second slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="https://img-3.journaldesfemmes.fr/Cxdu-fKdSUoMh_nDDYNUNv5FZ-4=/910x607/smart/8827fd9dad5547629ccbfdb07b824609/ccmcms-jdf/15163992.jpg" alt="Third slide"/>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                           data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                           data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>

                    <div className="card-body">
                            <h5 className="card-title">Johnny le Ouf, 40 ans</h5>
                            <p className="card-text">Chomeur au RSA</p>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nisi euismod, molestie augue vitae, tristique mi. Curabitur egestas pharetra elit vel tempor. Aliquam sagittis feugiat sapien in pulvinar.</p>
                            <div className="d-flex flex-row justify-content-between">
                                <a href="#" className="btn btn-danger">Pas mon style</a>
                                <a href="#" className="btn btn-warning">Match !</a>
                                <a href="#" className="btn btn-success" onClick={interestingProfile}>Intéressant</a>
                            </div>

                        </div>
                </div>
            </div>
        </div>
    </div>)
}