import { useGetData } from '../hooks/useApi';
import ServerContainer from '../containers/ServerContainer';
import { Spinner } from '../components/Spinner';

function ServerOverview() {
  const { data, isLoading, error } = useGetData('/api/servers');

  return (
    <div className="w-full h-screen flex flex-col overflow-y-auto">
      <div className="p-4 text-white">
        <h1 className="text-2xl font-bold mb-4">Server Overview</h1>
        <p className="mb-4">View the status of all your servers here.</p>
      </div>
      <div className="flex-grow">
        <div className="p-4 pb-36 h-full">
          {isLoading ? (
            <Spinner />
          ) : error ? (
            <Error />
          ) : (
            <ServerContainer servers={data} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ServerOverview;