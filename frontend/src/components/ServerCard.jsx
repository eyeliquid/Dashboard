import PropTypes from 'prop-types'
import { ServerInfo } from './ServerInfo'
import { GAME_IMAGE_URLS } from '../../../constants/gameImageUrls'

export const ServerCard = ({ server }) => (
  <div className="flex justify-center text-white">
    <div 
      className={`bg-slate-700 shadow-lg rounded-lg overflow-hidden ${server.numplayers && server.numplayers > 0 ? 
        'border-green-500' : 'border-red-500'} border-b-8 w-full max-w-[312px]`}>
      <div className="w-full h-48 overflow-hidden">
        <img 
          src={GAME_IMAGE_URLS[server.name] || '/assets/no_image.jpeg'}   
          alt={server.name || 'Server image'} 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <ServerInfo server={server} />
    </div>
  </div>
)

ServerCard.propTypes = {
  server: PropTypes.object.isRequired,
}
