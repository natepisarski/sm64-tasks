/**
 * If you give this the react router 'history' object from useHistory(), it returns a function that can take a URL.
 * The function that gets returned can then be used in an onClick() handler.
 * @param history
 * @returns {function(*=): function(): void}
 */
export const goTo = history => url => () => {
    console.debug('Trying to go to: ', url);
    history.push(`${url}`);
};

/**
 * Given your array, this will return 1 random element from it.
 * @param array
 */
export const getRandomItemFromArray = (array) => {
    // WARNING: Binary magic shit below, ripped off from a comment in https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
    return array[array.length * Math.random() | 0];
};
