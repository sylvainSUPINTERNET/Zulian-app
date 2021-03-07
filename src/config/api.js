'use strict';


const config = {
    apiPpc:'http://localhost:5999/api/v1',
    apiUrl: 'http://localhost:9999/api/v1', // API for auth
    apiUrlMapZulian: 'http://localhost:8080/api/v1', // APi for map
    apiPpcJava: 'http://localhost:7777/api/v1',
    // at least, should be one path (proxy with nginx)
    wsUrl: 'ws://localhost:8080/api/v1/socket',
    wsZgUrl: 'ws://localhost:4999',
    wsPpcUrl: "http://localhost:5999/api/v1"
};

export default config;
