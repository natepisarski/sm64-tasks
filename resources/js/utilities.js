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

/**
 * TaskScore is a measure of how well a player is doing overall. The ideal mathematical formula would take these
 * factors into account:
 * - Consistency across all tasks
 * - High-profile "bops", where they knock a consistent / skilled player off the top of a leaderboard.
 * - Participation, to prevent weighted-average-abuse (where they do 1 task, win, and have an untouchable score)
 * - Placement, how well they did compared to their peers on a given task.
 *
 * Right now, until the formula can be worked out, it takes the average, minus how many tasks they've done.
 * It's a bit of a ghetto way of factoring in placement and participation.
 * @param tasks
 * @param getScoreFromTask
 */
export const calculateTaskScore = (tasks, getScoreFromTask = task => task.pivot.score) => {
    if (tasks.length === 0) {
        return 25; // This is an arbitrarily high number that basically says "hey, nothing has happened; you can't win with this"
    }

    // First, we need to find the average score they got on the tasks.
    // Average is (sum) / tasks
    let sumOfTaskScores = tasks.reduce( (col, it) => col + getScoreFromTask(it), 0);
    let averageScore = sumOfTaskScores / tasks.length;
    return averageScore - tasks.length;
};

/** Do absolutely nothing; makes a good Placeholder function. */
export const unit = () => {};
