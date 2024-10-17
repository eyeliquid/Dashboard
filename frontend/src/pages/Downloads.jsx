import Card from '../components/Card';
import { DOWNLOADS_GAMES_FOLDER, DOWNLOADS_SERVER_FILES_FOLDER } from '../constants/links';

const Downloads = () => {
  return (
    <div className="min-h-screen">
      <div className="p-4 text-white">
        <h1 className="text-2xl font-bold mb-4">Downloads</h1>
        <p className="mb-4">Download the latest game clients and server files here.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card title="Game Client">
            <p className="mb-2">Download the game client to play the game.</p>
            <a href={DOWNLOADS_GAMES_FOLDER} className="block text-blue-500 hover:underline">Go to games folder</a>
          </Card>
          <Card title="Server Files">
            <p className="mb-2">Download the server files to host your own server.</p>
            <a href={DOWNLOADS_SERVER_FILES_FOLDER} className="block text-blue-500 hover:underline">Go to server files folder</a>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Downloads