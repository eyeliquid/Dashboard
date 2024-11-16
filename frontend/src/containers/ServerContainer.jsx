import PropTypes from 'prop-types';
import { ServerCard } from '../components/servers/ServerCard';

const ServerContainer = ({ servers }) => {
  return (
    <div className="">
      {servers.map((server, index) => (
        <ServerCard key={index} server={server} />
      ))}
    </div>
  );
};

ServerContainer.propTypes = {
  servers: PropTypes.array.isRequired,
};

export default ServerContainer;
