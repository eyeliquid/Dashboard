import { NavLink } from 'react-router-dom';
import { NAVIGATION_ITEMS } from '../constants';

function MobileNavbar() {
  const navLinkClass = ({ isActive }) => 
    `flex flex-col items-center p-2 min-w-[80px] ${
      isActive ? 'text-blue-600' : 'text-gray-300'
    }`;

  return (
    <nav className="xl:hidden fixed top-16 left-0 right-0 bg-gray-800 border-b border-gray-700 overflow-x-auto">
      <ul className="flex">
        {NAVIGATION_ITEMS.map((item) => (
          <li key={item.name}>
            <NavLink to={item.path} className={navLinkClass} end>
              <item.icon size={20} />
              <span className="text-xs mt-1 break-keep">{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MobileNavbar;
