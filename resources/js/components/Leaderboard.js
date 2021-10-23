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
        return <tr>
            <td>
                {player.name}
            </td>
            <td>
                {score}
            </td>
        </tr>
    }
    return <table>
        <th>Player</th>
        <th>Score</th>
        <tbody>
        {leaderboardData.map(data => {
            return getPlayerRow(data.player, data.score);
        })}
        </tbody>
    </table>
};
