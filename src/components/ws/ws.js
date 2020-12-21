import config from "../../config/api";

export const getWsConnection = () => {
    return new WebSocket(config.wsUrl);
}

