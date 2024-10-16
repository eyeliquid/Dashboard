import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const handleJoinGame = (steamId, connect) => {
  if (steamId) {
    const steamURL = `https://steam://connect/${connect}`;
    window.location.href = steamURL;
  }
};

export const isSteamGame = (server) => {
  return server.raw?.steamid?.length > 0;
};