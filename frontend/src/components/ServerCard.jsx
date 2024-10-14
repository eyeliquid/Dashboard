import PropTypes from 'prop-types'
import { ServerInfo } from './ServerInfo'
import { GAME_IMAGE_URLS } from '../../../constants/gameImageUrls'

export const ServerCard = ({ server }) => (
  <div className="flex justify-center text-white h-full">
    <div 
      className={`bg-slate-700 shadow-lg rounded-lg overflow-hidden ${
        server.numplayers && server.numplayers > 0 ? 'border-green-500' : 'border-red-500'
      } border-b-8 w-full flex flex-col`}>
      <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 flex items-center justify-center bg-slate-800">
        <img 
          src={GAME_IMAGE_URLS[server.name] || '/assets/no_image.jpeg'}   
          alt={server.name || 'Server image'} 
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div className="flex-grow p-4">
        <ServerInfo server={server} />
      </div>
    </div>
  </div>
)

ServerCard.propTypes = {
  server: PropTypes.object.isRequired,
}
