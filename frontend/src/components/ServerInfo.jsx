import PropTypes from 'prop-types'

import CardParagraph from './CardParagraph'

export const ServerInfo = ({ server }) => (
  <div className="my-4">
    <CardParagraph name="Server name: " value={server.name} />
    <CardParagraph name="IP: " value={server.connect} truncate={true} />
    <CardParagraph name="Map: " value={server.map || 'N/A'} truncate={true} />
  </div>
)

ServerInfo.propTypes = {
  server: PropTypes.object.isRequired,
}