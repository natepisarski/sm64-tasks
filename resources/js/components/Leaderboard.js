const dataFormatter = data => data.name; // The formatter for what appears in the LEFT hand column.
// For instance (for players) : task => <Link to={`/tasks/${task.id}}>{task.name} </Link>
const dataAccessor = data => data.player; // The accessor that takes one instance of leaderboardData, and returns an object that dataFormatter can use + a score.
// For instance (for players) : task => task (since a list of tasks with 'score' are given)

const rightColumnAccessor = data => data.score; // How is the right column (traditionally 'score') retrieved?
// For instance this might be data => data.pivot.score

/**
 * Displays a leaderboard for these players.
 *
 * This is the structure of leaderboardData:
 * [
 *   {
 *       'player': {<player_object>}
 *       'score': 2
 *   }
 * ]
 *
 * @type {{leaderboardData: *}}
 */
export const Leaderboard = ({
                                leaderboardData,
                                leftColumnName = 'Player',
                                leftColumnFormatter = dataFormatter,
                                leftColumnAccessor = dataAccessor,
                                scoreAccessor = rightColumnAccessor,
                            }) => {
    if (leaderboardData.length === 0) {
        return <div/>
    }

    // The formatter for what appears in the LEFT hand column

    return <table className={'text-2xl text-gray-600 mb-6'}>
        <thead className={'bg-gray-700 text-white rounded-sm'}>
        <tr>
            <th className={'text-center p-3'}>{leftColumnName}</th>
            {/* The right-hand side is always score so far. If that changes we will need a rightColumnName prop. */}
            <th className={'text-center p-3'}>Score</th>
        </tr>
        </thead>
        <tbody>
        {leaderboardData.sort((first, second) => scoreAccessor(first) > scoreAccessor(second)).map(data => {
            return getLeaderboardRow(leftColumnAccessor(data), scoreAccessor(data), leftColumnFormatter);
        })}
        </tbody>
    </table>
};

/**
 * Gets a row of the leaderboard. 'data' in this case is an object that is "Leaderboardable". This might be a Task (for the player page)
 * or a Player (for the Seasons and Tasks page).
 *
 * "data" should have id and name. score should be a number.
 * @param data A piece of data. This can be anything. This gets passed wholesale to leftColumnFormatter.
 * @param score The score for this row.
 * @param leftColumnFormatter This function accepts 'data', and returns anything as a result. Can be used for embedding elements or changing presentation.
 * @returns {JSX.Element}
 */
const getLeaderboardRow = (data, score, leftColumnFormatter) => {
    // TODO: Styling, discord link
    return <tr key={data.id} className={'border-b-2 border-gray-200'}>
        <td className={'text-center p-3'}>
            {leftColumnFormatter(data)}
        </td>
        <td className={'text-center p-3'}>
            {score}
        </td>
    </tr>
}
