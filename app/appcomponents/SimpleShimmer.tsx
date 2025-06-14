
export default function Shimmer() {
  return (
    <div className="animate-pulse space-y-4 p-4 border rounded bg-white shadow">
      <div className="h-5 bg-gray-300 rounded w-3/4" />
      <div className="h-6 bg-gray-300 rounded w-1/2" />
      <div className="h-5 bg-gray-300 rounded w-full" />
    </div>
  );
}
