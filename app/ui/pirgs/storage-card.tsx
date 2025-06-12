import { StorageEntry } from '@/app/lib/definitions';

export default function StorageCard({ entry }: { entry: StorageEntry }) {
  return (
    <div className="bg-gray border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow max-w-4xl w-full">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="flex-1 max-w-2xl">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            📦 Volume Name: <span className="font-bold">{entry.volume_name}</span>
          </h2>
          <p className="text-sm text-gray-700 mb-1">
            👤 <span className="font-medium">Owner:</span> {entry.owner}
          </p>
          <p className="text-sm text-gray-700">
            💾 Ceph Storage Size: <span className="font-medium">{entry.size_tb} TB</span>
          </p>
        </div>

        <div className="flex-1 text-sm text-gray-700">
          <p className="text-gray-500">📅 Date: {entry.date}</p>
          <p className="text-gray-500">🗂️ Index: {entry.index}</p>
          <p className="mt-2 font-medium text-gray-700">Users:</p>
          <ul className="list-disc list-inside">
            {entry.users.map((user, i) => (
              <li key={i}>{user}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
