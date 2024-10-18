export function SkeletonServerCard() {
  return (
    <div className="w-[318px] h-[530px] flex flex-col justify-between text-white h-full p-4 bg-slate-700 shadow-lg rounded overflow-hidden border-2 border-gray-500 animate-pulse">
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="h-6 bg-gray-600 rounded w-3/4"></div>
          <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
        </div>
        <div className="flex gap-2 mt-2 mb-3">
          <div className="h-5 bg-gray-600 rounded w-16"></div>
        </div>
        <div className="space-y-2 mb-3">
          <div className="h-4 bg-gray-600 rounded w-full"></div>
          <div className="h-4 bg-gray-600 rounded w-5/6"></div>
          <div className="h-4 bg-gray-600 rounded w-4/6"></div>
        </div>
        <div className="h-[285px] bg-gray-600 rounded-lg" />
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="h-8 bg-gray-600 rounded w-1/3"></div>
        <div className="h-8 bg-gray-600 rounded w-1/3"></div>
      </div>
    </div>
  );
}
