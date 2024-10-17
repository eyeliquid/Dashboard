import { useMemo, lazy, Suspense } from 'react';

import { useServerData } from '../hooks/useServerData';
import { Error } from '../components/Error';
import { SkeletonServerCard } from '../components/servers/SkeletonServerCard';
import { DUMMY_SERVERS } from '../constants/dummyServers';
import ErrorBoundary from '../components/ErrorBoundary';

const LazyServerCard = lazy(() => import('../components/servers/ServerCard'));

function ServerOverview() {
  const { data, isLoading, error } = useServerData();

  const sortedServers = useMemo(() => {
    const serverData = import.meta.env.MODE === 'development' ? DUMMY_SERVERS : data;
    if (!serverData || !Array.isArray(serverData)) return [];
  
    return [...serverData]
      .filter(server => server && typeof server === 'object')
      .sort((a, b) => (b.numplayers || 0) - (a.numplayers || 0));
  }, [data]);

  return (
    <div className="h-screen overflow-y-auto no-scrollbar no-scrollbar::-webkit-scrollbar bg-gray-900 text-white">
      <div className="p-4 pb-16 mb-24">
        <div className="flex flex-col h-full items-center justify-center">
          {error ? (
            <Error />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-4">
              {isLoading || !data
                ? Array(12).fill().map((_, index) => (
                  <SkeletonServerCard key={index} />
                ))
                : sortedServers.map((server, index) => (
                  <ErrorBoundary key={server.id || index}>
                    <Suspense fallback={<SkeletonServerCard />}>
                      <LazyServerCard server={server} />
                    </Suspense>
                  </ErrorBoundary>
                ))} 
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ServerOverview;
