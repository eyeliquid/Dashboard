import Card from '../components/Card';
import { gameServerInfo } from '../../../constants/gameServerInfo'; 

const ServerManagement = () => {
  return (
    <div className="h-screen bg-gray-900 text-white overflow-y-auto">
      <div className="container mx-auto p-4 pb-16 mb-24">
        <h1 className="text-2xl font-bold mb-8">Game Server Information</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gameServerInfo.map((server) => (
            <Card key={server.title} title={server.title}>
              {server.instructions.map((instruction, index) => (
                <p key={index}>{instruction}</p>
              ))}
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServerManagement;