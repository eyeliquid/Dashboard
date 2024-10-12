import Card from '../components/Card';
import { GAMES } from '../../../constants/games';

const Games = () => (
  <div className="h-screen overflow-y-auto bg-gray-900 text-white">
    <div className="container mx-auto p-4 pb-16 mb-24">
      <h1 className="text-2xl font-bold mb-8">Which games do we play?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {GAMES.map((server) => (
          <Card 
            key={server.name} 
            title={server.name}
          >
            <p>{server.description}</p>
          </Card>
        ))}
      </div>
    </div>
  </div>
)

export default Games;
