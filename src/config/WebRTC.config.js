'use strict';

// Media contrains
export const constraints = {
    video: { facingMode: "user" },
    // Uncomment to enable audio
    audio: true
};


export const config = {
    iceServers: [
        {
            urls: ["stun:stun.l.google.com:19302"]
        }
    ]
};
