import logo from '../assets/logoblack.jpg';
import { NavLink } from 'react-router-dom';
import { PAGES } from '../constants';

const currentYear = new Date().getFullYear();

const navLinkClass = ({ isActive }) =>
  `flex flex-col items-center p-2 min-w-[80px] ${isActive ? 'text-blue-600' : 'text-gray-300'}`;

export const Topbar = () => (
  <header
    className="h-16 bg-gray-900 text-white border-b-2 border-gray-700 p-4 flex justify-between 
      items-center fixed top-0 left-0 right-0 z-40"
  >
    <div className="flex justify-between w-full">
      <div className="hidden md:flex items-center">
        <img src={logo} alt="G4N - Ermelan" className="w-12 h-8 border-2 border-white rounded" />
        <h2 className="font-bold">&nbsp;Ermelan {currentYear}</h2>
      </div>
      <ul className="flex overflow-x-auto">
        {PAGES.map((item) => (
          <li key={item.name}>
            <NavLink to={item.path} className={navLinkClass} end>
              <item.icon size={20} />
              <span className="text-xs mt-1 break-keep">{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  </header>
);

export default Topbar;
