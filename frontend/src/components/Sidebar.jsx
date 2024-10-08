import { NavLink } from 'react-router-dom';

import { NAVIGATION_ITEMS } from '../constants';

function Sidebar() {
  const navLinkClass = ({ isActive }) => 
    `flex items-center space-x-2 p-2 rounded-md transition-colors ${
      isActive ? 'bg-blue-600 hover:text-white text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`;

  return (
    <nav className="max-h-lvh	text-white w-64 fixed top-0 left-0 h-full pt-16 flex-shrink-0 border-r-2 border-gray-700">
      <ul className="space-y-2 p-4">
        {NAVIGATION_ITEMS.map((item) => (
          <li key={item.name}>
            <NavLink to={item.path} className={navLinkClass} end>
              <item.icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
