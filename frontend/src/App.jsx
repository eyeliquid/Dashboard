import { Routes, Route } from 'react-router-dom';

import Topbar from './components/Topbar';
import ServerOverview from './pages/ServerOverview';
import Downloads from './pages/Downloads';
import ServerConfig from './pages/ServerConfig';
import Games from './pages/Games';
import Contact from './pages/Contact';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="h-screen w-screen bg-gray-900 overflow-hidden">
      <Topbar />
      <div className="flex flex-1 pt-16 sd:pt-32">
        <ErrorBoundary>
          <main className="w-full">
            <div className="h-screen overflow-y-auto no-scrollbar no-scrollbar::-webkit-scrollbar bg-gray-900 text-white">
              <div className="p-4 pb-16 mt-8 mb-24">
                <div className="flex flex-col h-full items-center justify-center">
                  <Routes>
                    <Route path="/" element={<ServerOverview />} />
                    <Route path="/games" element={<Games />} />
                    <Route path="/downloads" element={<Downloads />} />
                    <Route path="/config" element={<ServerConfig />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </div>
              </div>
            </div>
          </main>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
