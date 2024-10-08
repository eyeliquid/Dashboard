import PropTypes from 'prop-types'
import PlayerList from './PlayerList'
import CardParagraph from './CardParagraph'


export const ServerInfo = ({ server }) => (
  <div className="p-4">
    <h2 className="text-xl font-bold mb-2 truncate">{server.raw ?
      server.raw.game || server.raw.gamename : 'Server down'}</h2>
    <CardParagraph name="Server name: " value={server.name} truncate={true} />
    <CardParagraph name="IP: " value={server.connect} truncate={true} />
    <CardParagraph name="Map: " value={server.map || 'N/A'} truncate={true} />
    <CardParagraph name="Players: " value={server.players ? server.players.length : 0} />
    {server.players && server.players.length > 0 && (
      <PlayerList players={server.players} />
    )}
  </div>
)

ServerInfo.propTypes = {
  server: PropTypes.object.isRequired,
}