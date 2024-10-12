import PropTypes from 'prop-types'

const PlayerList = ({ players }) => (
  <div className="mt-2">
    <h3 className="font-semibold mb-1">Player List:</h3>
    <ul className="text-xs max-h-24 overflow-y-auto">
      { players.map((player, playerIndex) => (
        <li key={playerIndex} className="mb-1 truncate">
          <span className="font-semibold">{player.name}</span>
          <span className="text-gray-400"> - Score: {player.score}</span>
        </li>
      )) }
    </ul>
  </div>
)

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
}

export default PlayerList;