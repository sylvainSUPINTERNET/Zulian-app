'use strict';


const config = {
    apiUrl: 'http://localhost:9999/api/v1', // API for auth
    apiUrlMapZulian: 'http://localhost:4999/api/v1', // APi for map
    // at least, should be one path (proxy with nginx)
    wsUrl: 'ws://localhost:8080/socket'
};

export default config;
