import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import ServerOverview from './pages/ServerOverview';
import Downloads from './pages/Downloads';
import ServerManagement from './pages/ServerManagement';
import Games from './pages/Games';
import Contact from './pages/Contact';
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="h-screen w-screen bg-gray-900 overflow-hidden">
      <Topbar toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 pt-16">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} className="w-64" />
        <main className="flex-1 pl-64">
          <div className="h-full w-full bg-gray-900 p-6">
            <Routes>
              <Route path="/" element={<ServerOverview />} />
              <Route path="/games" element={<Games />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/management" element={<ServerManagement />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;