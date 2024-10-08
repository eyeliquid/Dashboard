import PropTypes from 'prop-types'
import { ServerCard } from '../components/ServerCard'

const ServerContainer = ({ servers }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
      {servers.map((server, index) => (
        <ServerCard key={index} server={server} />
      ))}
      {[...Array(5)].map((_, index) => (
        <div key={`empty-${index}`} className="hidden 2xl:block" />
      ))}
    </div>
  )
}

ServerContainer.propTypes = {
  servers: PropTypes.array.isRequired
}

export default ServerContainer