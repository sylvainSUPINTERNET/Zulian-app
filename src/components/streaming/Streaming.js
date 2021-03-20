import React, {useEffect, useRef} from "react";

import Menu from "../Menu";
import socketIOClient from "socket.io-client";
import conf from "../../api/conf";

export const Streaming = props => {

    /** Peer conf **/
    const messagesType = {
        "SDP": "SDP",
        "CANDIDATE": "CANDIDATE"
    }

    const peerConfiguration = {
        offerToReceiveAudio: true,
        offerToReceiveVideo: true
    }

    const [socket, setSocket] = React.useState(socketIOClient(conf.chat.URL))

    const [ pc, setPc] = React.useState(new RTCPeerConnection({configuration: peerConfiguration,
        iceServers: [
            { urls: 'stun:stun.l.google.com:19302' }
        ]}));


    const [ contrainsMediaPerm, setContrainsMediaPerm ] = React.useState({
        audio: true,
        video: {
            facingMode: "user"
        }
    })

    const [stream, setStream] = React.useState(null);
    const [streamError, setStreamError] = React.useState(null);

    const videoRef = useRef(null);



    /* Peer */

    // fired after peer connection received new tracks (e.g allow sound)
    pc.negotiationneeded = async () => {
        const offer = await pc.createOffer();
        await pc.setLocalDescription(offer);

        // Send to the signaling server for the remote peer
        socket.emit("negotiate", {
            messageType: messagesType.SDP,
            content: offer,
        });
    }

    pc.onicecandidate = iceEv => {
        if ( iceEv && iceEv.candidate ) {
            console.log("CANDDIATE ICE : ",iceEv);

        }
    }

    pc.ontrack = (ev) => {
        console.log("ON TRACK")
        videoRef.current.srcObject = ev.streams[0];
    }

    /* end peer */


    // article
    //https://gist.github.com/Dornhoth/7560fb8ab49dc7cd1ac591839b22d066

    const mediaPerm = async (constraints) => {
        try {

            // Get access permission + set constraints
            let userMediaStream = await navigator.mediaDevices.getUserMedia(constraints)

            setStream(userMediaStream);
            videoRef.current.srcObject = userMediaStream // contains all tracks ( related to constraints passed)

            console.log("Start PeerConnection : Adding tracks ...")
            console.log(pc)

            userMediaStream
                .getTracks()
                .map( track => {
                    pc.addTrack(track, userMediaStream)
                });
            console.log(pc)
            pc.addEventListener("track", e => {
                console.log(e);
            }, false);



            return stream;
        } catch (e) {
            setStreamError(e.toString());
            return null;
        }
    }

    useEffect( () => {
        mediaPerm(contrainsMediaPerm);

    }, [])

    return (
        <div>
            <header className="">
                <Menu/>
            </header>
            <p>OK</p>
            <div>
                <p>Error :</p>
                <code>{streamError}</code>
            </div>
            <div>
                <video controls ref={videoRef}>
                </video>
            </div>
        </div>
        )
}