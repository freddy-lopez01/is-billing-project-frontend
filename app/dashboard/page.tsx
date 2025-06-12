// app/dashboard/page.tsx or page.jsx
//

export default async function Dashboard() {

  
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Billing Portal</h1>
	   

      <p className="text-gray-600 mb-8">
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Card One</h2>
          <p className="text-gray-600">Some placeholder content for card one.</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Card Two</h2>
          <p className="text-gray-600">More placeholder content for card two.</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Card Three</h2>1
          <p className="text-gray-600">Even more placeholder content for card three.</p>
        </div>
      </div>
    </div>
  );
}
