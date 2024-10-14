import React, { Suspense } from 'react';
import { useGetData } from '../hooks/useApi';
import { Spinner } from '../components/Spinner';
import { Error } from '../components/Error';

import { DUMMY_SERVERS } from '../../../constants/dummyServers';

const ServerContainer = React.lazy(() => import('../containers/ServerContainer'));

function ServerOverview() {
  const { data, isLoading, error } = useGetData('/api/servers');

  const sortedServers = React.useMemo(() => {
    const serverData = import.meta.env.MODE === 'development' ? DUMMY_SERVERS : data;

    if (!serverData) return [];
  
    return [...serverData].sort((a, b) => b.numplayers - a.numplayers);
  }, [data]);

  return (
    <div className="w-full h-screen flex flex-col overflow-y-auto">
      <div className="p-4 text-white">
        <h1 className="text-2xl font-bold mb-4">Server Overview</h1>
        <p className="mb-4">Who&apos;s playing what?</p>
      </div>
      <div className="flex-grow relative mb-32">
        {error ? (
          <Error />
        ) : isLoading ? (
          <Spinner />
        ) : (
          <Suspense fallback={<Spinner />}>
            <ServerContainer servers={sortedServers} />
          </Suspense>
        )}
      </div>
    </div>
  );
}

export default ServerOverview;
