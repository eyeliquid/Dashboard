import { Home, Download, Server, Mail } from 'lucide-react';

export const PAGES = [
  { 
    name: 'Servers', 
    path: '/', 
    icon: Home, 
    element: () => import('../pages/ServerOverview')
  },
  // { 
  //   name: 'Games', 
  //   path: '/games', 
  //   icon: Gamepad, 
  //   element: () => import('../pages/Games')
  // },
  { 
    name: 'Downloads', 
    path: '/downloads', 
    icon: Download, 
    element: () => import('../pages/Downloads')
  },
  { 
    name: 'Config', 
    path: '/config', 
    icon: Server, 
    element: () => import('../pages/ServerConfig')
  },
  { 
    name: 'Contact', 
    path: '/contact', 
    icon: Mail, 
    element: () => import('../pages/Contact')
  },
];
