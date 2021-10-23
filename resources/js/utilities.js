export const goTo = history => url => () => {
    console.debug('Trying to go to: ', url);
    history.push(`${url}`);
};
