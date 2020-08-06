import React, {VideoHTMLAttributes, useEffect, useState, useRef} from 'react';
import {uuidv4} from "./utils/generator";
import {constraints, config} from './config/WebRTC.config';

// https://gabrieltanner.org/blog/webrtc-video-broadcast


// WebRTC
const peerConnections = {};


const Counter = (props) => {
    console.log(props);

    return (
        <div>
            Counter
        </div>
    )
};


const Streaming = (props) => {
    const videoEl = useRef("");
    const containerEl = useRef("");

    useEffect( () => {
        console.log("ask for perm");
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then(stream => {
                videoEl.current.srcObject = stream;
                containerEl.current.style.backgroundColor = 'red'
            })
            .catch(error => console.error(error));
    }, []);
    return (
        <div ref={containerEl}>
            <video className="video" playsInline autoPlay muted width={300} height={300}  ref={videoEl}></video>
        </div>
    )
};

function App() {
    let ws;
    let connected;
    ws = new WebSocket(`ws://localhost:8080/chat/${uuidv4()}`);
    console.log(ws);
    ws.onopen = () => {
        connected = true
    };








    return (
        <div className="">
            <header className="">
                <Streaming></Streaming>
                <Counter ws={ws}></Counter>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
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
