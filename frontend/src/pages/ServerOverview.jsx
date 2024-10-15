import { Suspense, useMemo } from 'react';

import { useGetData } from '../hooks/useApi';
import { Spinner } from '../components/Spinner';
import { Error } from '../components/Error';
import { ServerCard } from '../components/ServerCard';
import { DUMMY_SERVERS } from '../../../constants/dummyServers';

function ServerOverview() {
  const { data, isLoading, error } = useGetData('/api/servers');

  const sortedServers = useMemo(() => {
    const serverData = import.meta.env.MODE === 'development' ? DUMMY_SERVERS : data;

    if (!serverData) return [];
  
    return [...serverData].sort((a, b) => b.numplayers - a.numplayers);
  }, [data]);

  return (
    <div className="h-screen overflow-y-auto no-scrollbar no-scrollbar::-webkit-scrollbar bg-gray-900 text-white">
      <div className="container p-4 pb-16 mb-24">
        <h1 className="text-2xl font-bold mb-8">Who&apos;s playing what?</h1>
        {error ? (
          <Error />
        ) : isLoading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
            {sortedServers.map((server, index) => (
              <ServerCard key={index} server={server} />
            ))} 
          </div>
        )}
      </div>
    </div>
  );
}

export default ServerOverview;
