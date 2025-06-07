import { useQuery } from "@apollo/client";
import { GET_ENTRIES } from "../../graphql/queries/query";
import CompostTrendChart from "../../CompostTrendChart";
import { useAuth } from "../auth/AuthContext";

type CompostEntry = {
  id: string;
  userId: string;
  date: string;
  weightKg: number;
  materialType: string;
};
function Dashboard() {
    const {user}= useAuth();
    const {data, loading, error} = useQuery(GET_ENTRIES);
    const entries = data?.compostEntries || [];
    const totalWeight= entries.reduce((sum:number, e: CompostEntry)=> sum + e.weightKg,0);
    const co2Saved = (totalWeight*0.9).toFixed(2);
    const chartData= entries.map((e: CompostEntry)=> ({
        date : new Date(e.date).toLocaleDateString(),
        weight: e.weightKg,
      }))

    if(loading) return <p>Loading ...</p>
    if(error) return <p>Error fetching data</p>
  return (
    <div className="min-h-screen bg-green-50 p-6 font-sans">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Welcome to Compost Impact Dashboard {user?.name}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-4 rounded-xl shadow">
                <h2 className="text-gray-500 text-sm">Total Composted</h2>
                <p className="text2xl font-bold text-green-600">{totalWeight.toFixed(1)} Kg</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow">
                <h2 className="text-gray-500 text-sm">CO₂ Saved</h2>
                <p className="text-2xl font-bold text-green-600">{co2Saved} kg</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow">
                <h2 className="text-gray-500 text-sm">Entries</h2>
                <p className="text-2xl font-bold text-green-600">{entries.length}</p>
            </div>
        </div>

    <div className="bg-white rounded-xl shadow p-4">
         <h2 className="text-lg font-semibold text-green-700 mb-4">Your Entries</h2>
         { loading ? (<p> Loading ...</p>) : error  ? (
           <p className="text-red-500">Error loading entries</p>
         ):(
             <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-green-100 text-left">
                <th className="p-2">Date</th>
                <th className="p-2">Weight (kg)</th>
                <th className="p-2">Material</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((e: any) => (
                <tr key={e.id} className="border-t">
                  <td className="p-2">{new Date(e.date).toLocaleDateString()}</td>
                  <td className="p-2">{e.weightKg}</td>
                  <td className="p-2">{e.materialType}</td>
                </tr>
              ))}
            </tbody>
          </table>
         )}
    </div>

    <div className="h-[300px] bg-gray-100">
      <CompostTrendChart data={chartData} />
    </div>



    </div>
  );
}
export default Dashboard;
