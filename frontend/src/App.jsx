import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import MobileNavbar from './components/MobileNavbar';
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
      {/* On mobile, the navbar is displayed on top of the content */}
      <MobileNavbar />
      <div className="flex flex-1 pt-16 sd:pt-32">
        {/* On desktop, the sidebar is displayed on the left */}
        <Sidebar />
        <ErrorBoundary>
          <main className="w-full xl:pl-64">
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
