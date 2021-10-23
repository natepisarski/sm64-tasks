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
export const Leaderboard = ({leaderboardData}) => {
    const getPlayerRow = (player, score) => {
        // TODO: Styling, discord link
        return <tr key={player.id}>
            <td className={'text-center'}>
                {player.name}
            </td>
            <td className={'text-center'}>
                {score}
            </td>
        </tr>
    }

    if (leaderboardData.length === 0) {
        return <div />
    }

    return <table className={'w-24 text-2xl text-gray-600 mb-6'}>
        <thead>
            <tr>
                <th className={'text-center'}>Player</th>
                <th className={'text-center'}>Score</th>
            </tr>
        </thead>
        <tbody>
        {leaderboardData.map(data => {
            return getPlayerRow(data.player, data.score);
        })}
        </tbody>
    </table>
};
