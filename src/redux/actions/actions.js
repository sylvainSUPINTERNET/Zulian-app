export const increaseCounterAction = (nb) => {
    return {
        type: 'increaseCounter',
        payload: {
            nb: nb,
        },
    }
};
