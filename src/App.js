import React, {VideoHTMLAttributes, useEffect, useState, useRef} from 'react';
import {uuidv4} from "./utils/generator";
import {constraints, config} from './config/WebRTC.config';
import Menu from "./components/Menu";
import {useSelector, useDispatch} from 'react-redux'
import allActions from "./redux/actions/allActions";

// https://gabrieltanner.org/blog/webrtc-video-broadcast



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

function App() {


    const counter = useSelector(state => state.incrementReducer);
    console.log("Counter", counter);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allActions.incrementAction.increment());
    }, []);
    console.log(counter);


    let ws;
    let connected;
    ws = new WebSocket(`ws://localhost:8080/chat/${uuidv4()}`);

    ws.onopen = () => {
        connected = true
    };


    return (
        <div className="">
            <header className="">
                <Menu></Menu>
            </header>
            <main className="container">
                <p>ok</p>
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
