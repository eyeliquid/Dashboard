export function SkeletonGameCard() {
  return (
    <div className="bg-gray-800 h-full lg:w-[320px] rounded-lg overflow-hidden shadow-lg transition-all duration-300 border-2 border-gray-500 flex flex-col animate-pulse">
      <div className="aspect-w-16 aspect-h-9 p-4 rounded-lg">
        <div className="w-full h-full bg-gray-700 rounded-lg"></div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
        <div className="space-y-2 mb-4 flex-grow">
          <div className="h-4 bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-700 rounded w-5/6"></div>
          <div className="h-4 bg-gray-700 rounded w-4/6"></div>
        </div>
        <div className="mt-auto">
          <div className="w-full h-10 bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  );
}
