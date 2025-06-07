import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

type ChartEntry = {
    date: string,
    weight: number
};

type Props = {
    data : ChartEntry[];
}


function CompostTrendChart({data}: Props) {
  return (
     <div className="bg-white rounded-xl shadow p-4 mt-8">
     <h2 className="text-lg font-semibold text-green-700 mb-4">Compost Trend Over Time</h2>
     <div className="h-[300px] w-full">
     <ResponsiveContainer width="100%" height="100%">
     <LineChart data={data}>
        <CartesianGrid stroke="#e5e7eb" strokeDasharray="5 5"/>
        <XAxis dataKey="date"/>
        <YAxis/>
        <Tooltip/>
         <Line type="monotone" dataKey="weight" stroke="#16a34a" strokeWidth={2} />
     </LineChart>
     </ResponsiveContainer>
     </div>
     </div>
  )
}

export default CompostTrendChart