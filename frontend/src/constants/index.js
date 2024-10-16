import { Home, Gamepad, Download, Server, Mail } from 'lucide-react';

export const NAVIGATION_ITEMS = [
  { name: 'Servers', path: '/', icon: Home },
  { name: 'Games', path: '/games', icon: Gamepad },
  { name: 'Downloads', path: '/downloads', icon: Download },
  { name: 'Config', path: '/config', icon: Server },
  { name: 'Contact', path: '/contact', icon: Mail },
];