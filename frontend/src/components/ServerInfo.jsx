import PropTypes from 'prop-types'
import PlayerList from './PlayerList'
import CardParagraph from './CardParagraph'


export const ServerInfo = ({ server }) => (
  <div className="my-4">
    <CardParagraph name="Server name: " value={server.name} />
    <CardParagraph name="IP: " value={server.connect} truncate={true} />
    <CardParagraph name="Map: " value={server.map || 'N/A'} truncate={true} />
    {/* {server?.numplayers > 0 && (
      <PlayerList players={server?.players || []} />
    )} */}
  </div>
)

ServerInfo.propTypes = {
  server: PropTypes.object.isRequired,
}