import PropTypes from 'prop-types'

const PlayerList = ({ players }) => {
  return (
    <div className="overflow-y-auto max-h-[380px]">
      {players.length > 0 ? (
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase">
              <th className="py-2 px-1 w-1/2">Name</th>
              <th className="py-2 px-1 w-1/4">Score</th>
              <th className="py-2 px-1 w-1/4">Time</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={index} className="border-t border-slate-600">
                <td className="py-1 px-1 truncate">{player.name || `Player ${index + 1}`}</td>
                <td className="py-1 px-1">{player.score || 'N/A'}</td>
                <td className="py-1 px-1">{player.time || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-400">No players currently in the server.</p>
      )}
    </div>
  )
}

PlayerList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    score: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    time: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  })).isRequired,
}

export default PlayerList;
