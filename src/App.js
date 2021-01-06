import React, {VideoHTMLAttributes, useEffect, useState, useRef} from 'react';
import {uuidv4} from "./utils/generator";
import {constraints, config} from './config/WebRTC.config';
import Menu from "./components/Menu";
import Card from "./components/card/Card";

import Caroussel from "./components/caroussel/Caroussel";

import {useSelector, useDispatch} from 'react-redux'
import {increaseCounterAction} from "./redux/actions/actions";
import {auth as authentication} from "./api/authentication/authentication";

// https://gabrieltanner.org/blog/webrtc-video-broadcast

import axios from 'axios';



/*
const Streaming = (props) => {
    const videoEl = useRef("");
    const containerEl = useRef("");


    useEffect( () => {
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then(stream => {
                videoEl.current.srcObject = stream;
                containerEl.current.style.backgroundColor = 'red'

                // TODO implement WebRTC PeerConnection
                const pc = new RTCPeerConnection(config);  // TURN

                // get tracks -> video / audio (check constraints)
                stream.getTracks().forEach(track => pc.addTrack(track, stream));

                pc
                    .createOffer()
                    .then(sdp => pc.setLocalDescription(sdp))
                    .then(() => {
                        console.log("Offer : ", pc.localDescription)
                        //socket.emit("offer", id, peerConnection.localDescription);
                    });

                // Trigger when peer connection is available
                pc.onicecandidate = event => {
                    console.log("New candidate")
                    if (event.candidate) {
                        console.log(`candidat`)
                        console.log(event.candidate)
                        console.log("============================")
                       // socket.emit("candidate", id, event.candidate);
                    }
                };

            })
            .catch(error => console.error(error));
    }, []);
    return (
        <div ref={containerEl}>
            <video className="video" playsInline autoPlay muted width={300} height={300}  ref={videoEl}></video>
        </div>
    )
};
*/

function App(props) {

    const o = async () => {
        /*
        const t = await fetch('http://localhost:4999/api/v1/auth/login');
        const e = await t.json();
        console.log(e)

         */

         /*
        const res = await authentication.verifyPermission("ROLE_USER");
        console.log(res);
        const jsonRes = await res.json();
        console.log(jsonRes)*/
    };



    let ws;
    let connected;  
   // ws = new WebSocket(`ws://localhost:8080/api/${uuidv4()}`);


    /*
    const [users, setUsers] = useState([]);


    const getUsers = async () => {
        const r = await fetch('http://localhost:9999/api/v1/auth/token', {credentials: 'include'});
        const e = await r.json();
        console.log("access token -> ", e)

        const resp = await fetch('http://localhost:4000/users');
        const data = await resp.json();
        setUsers(data["users"])

    };*/

    useEffect( () => {


        //getUsers();
       // o();
    }, []);


    /*
    ws.onopen = () => {
        connected = true
    };*/


    return (
        <div className="">
            <header className="">
                <Menu activeTab="home"></Menu>
            </header>
            <main className="container">
            
            <div  class="d-flex flex-column">
                <a class="btn btn-block btn-social btn-google mt-2" href="https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile&access_type=offline&redirect_uri=http://localhost:5999/connect/google&response_type=code&client_id=105171889289-nufvlvi9cit9pmqqk9ofemfhb8lpvgkj.apps.googleusercontent.com">
                    <span class="fa fa-google mt-1 mb-1"></span>
                    Connection avec Google
                </a>
                <a class="btn btn-block btn-social btn-twitter mt-2" href="https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile&access_type=offline&redirect_uri=http://localhost:5999/connect/google&response_type=code&client_id=105171889289-nufvlvi9cit9pmqqk9ofemfhb8lpvgkj.apps.googleusercontent.com">
                    <span class="fa fa-twitter mt-1 mb-1"></span>
                    Connection avec Twitter
                </a>
                <a class="btn btn-block btn-social btn-microsoft mt-2" href="https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile&access_type=offline&redirect_uri=http://localhost:5999/connect/google&response_type=code&client_id=105171889289-nufvlvi9cit9pmqqk9ofemfhb8lpvgkj.apps.googleusercontent.com">
                    <span class="fa fa-windows mt-1 mb-1"></span>
                    Connection avec microsoft
                </a>
                <a class="btn btn-block btn-social btn-facebook mt-2" href="https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile&access_type=offline&redirect_uri=http://localhost:5999/connect/google&response_type=code&client_id=105171889289-nufvlvi9cit9pmqqk9ofemfhb8lpvgkj.apps.googleusercontent.com">
                    <span class="fa fa-facebook mt-1 mb-1"></span>
                    Connection avec facebook
                </a>
                <a class="btn btn-block btn-social btn-github mt-2" href="https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile&access_type=offline&redirect_uri=http://localhost:5999/connect/google&response_type=code&client_id=105171889289-nufvlvi9cit9pmqqk9ofemfhb8lpvgkj.apps.googleusercontent.com">
                    <span class="fa fa-github mt-1 mb-1"></span>
                    Connection avec Github
                </a>
                <a class="btn btn-block btn-social btn-instagram mt-2" href="https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile&access_type=offline&redirect_uri=http://localhost:5999/connect/google&response_type=code&client_id=105171889289-nufvlvi9cit9pmqqk9ofemfhb8lpvgkj.apps.googleusercontent.com">
                    <span class="fa fa-instagram mt-1 mb-1"></span>
                    Connection avec Github
                </a>
                <a class="btn btn-block btn-social btn-pinterest mt-2" href="https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile&access_type=offline&redirect_uri=http://localhost:5999/connect/google&response_type=code&client_id=105171889289-nufvlvi9cit9pmqqk9ofemfhb8lpvgkj.apps.googleusercontent.com">
                    <span class="fa fa-pinterest mt-1 mb-1"></span>
                    Connection avec Pinterest
                </a>
            </div>
            
            
                <button onClick={ async () => {

                    try {
                    const res = await axios.get(
                        'http://localhost:5999/test',
                        {
                        withCredentials: true,
                        }
                    )
                    return res
                    } catch (error) {
                    console.log(error)
                    }
        
                    /*
                    let test = await fetch("http://localhost:5999/test", {
                                method: "GET",
                                headers: {
                                  'Accept': 'application/json',
                                  'Content-Type': 'application/json'
                                },
                                credentials: 'include'
                            });
                    let resp = await test.json();
                    

                    console.log(resp.headers.get('set-cookie'));*/
                }}>
                    CLICK
                </button>
                <Card></Card>
                <Card></Card>
                <Card></Card>

            </main>
        </div>
    );
}

const style = {
    video : {
        'width': '100%',
        'height': '100%',
        'position': 'absolute',
        'display': 'block',
        'top': '0',
        'left': '0',
        'objectFit': 'cover'
    }
};

export default App;
