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
        return <tr key={player.id} className={'border-b-2 border-gray-200'}>
            <td className={'text-center p-3'}>
                {player.name}
            </td>
            <td className={'text-center p-3'}>
                {score}
            </td>
        </tr>
    }

    if (leaderboardData.length === 0) {
        return <div />
    }

    return <table className={'text-2xl text-gray-600 mb-6'} style={{width: '25vw'}}>
        <thead className={'bg-gray-700 text-white rounded-sm'}>
            <tr>
                <th className={'text-center p-3'}>Player</th>
                <th className={'text-center p-3'}>Score</th>
            </tr>
        </thead>
        <tbody>
        {leaderboardData.sort((first, second) => first.score > second.score).map(data => {
            return getPlayerRow(data.player, data.score);
        })}
        </tbody>
    </table>
};
