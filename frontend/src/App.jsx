import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import MobileNavbar from './components/MobileNavbar';
import ServerOverview from './pages/ServerOverview';
import Downloads from './pages/Downloads';
import ServerConfig from './pages/ServerConfig';
import Games from './pages/Games';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="h-screen w-screen bg-gray-900 overflow-hidden">
      <Topbar />
      {/* On mobile, the navbar is displayed on top of the content */}
      <MobileNavbar />
      <div className="flex flex-1 pt-16 sd:pt-32">
        {/* On desktop, the sidebar is displayed on the left */}
        <Sidebar />
        <main className="w-full xl:pl-64">
          <div className="h-full w-full bg-gray-900 my-16 lg:my-8">
            <Routes>
              <Route path="/" element={<ServerOverview />} />
              <Route path="/games" element={<Games />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/config" element={<ServerConfig />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
