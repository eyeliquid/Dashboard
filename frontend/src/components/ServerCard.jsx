import PropTypes from 'prop-types'
import { ServerInfo } from './ServerInfo'
import { GAME_IMAGE_URLS } from '../../../constants/gameImageUrls'
import { Users } from 'lucide-react';

export const ServerCard = ({ server }) => (
  <article className="w-[318px] max-h-[480px] flex-col justify-center text-white h-full p-4 bg-slate-700 shadow-lg rounded overflow-hidden">
    <div className="flex items-center justify-between">
      <h2 className="text-xl font-bold line-clamp-1">{server.raw ?
        server.name || server.raw.game || server.raw.gamename : 'Server down'}</h2>
      <div 
        className={`w-4 h-4 rounded-full m-2 ${
          server.numplayers && server.numplayers > 0 ? 'bg-green-500' : 'bg-red-500'
        }`}
      >
      </div>
    </div>
    <div className="">
      <ServerInfo server={server} />
    </div>
    <div className="w-[302px] h-[200px] flex items-center justify-center">
      <img 
        src={GAME_IMAGE_URLS[server.name] || '/assets/no_image.jpeg'}   
        alt={server.name || 'Server image'} 
        className="max-w-full max-h-full object-contain rounded-lg"
      />
    </div>
    <div className="w-full flex items-center justify-between mt-4">
      <div className="flex items-center">
        <Users className="w-4 h-4" />
        <span className="text-sm ml-1">{server.numplayers} / {server.maxplayers}</span>
      </div>
      <div className="flex space-x-2">
        <button className="px-2 py-1 text-xs bg-blue-500 hover:bg-blue-600 rounded">Join game</button>
        <button className="px-2 py-1 text-xs bg-gray-500 hover:bg-gray-600 rounded">Playerlist</button>
      </div>
    </div>
  </article>
)

ServerCard.propTypes = {
  server: PropTypes.object.isRequired,
}
