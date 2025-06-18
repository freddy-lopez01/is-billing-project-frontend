'use client' 

import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import Props from '@/app/lib/definitions'; 

const COLORS = {
  paid: '#22c55e',    // green
  pending: '#facc15', // yellow
  denied: '#ef4444',  // red
};


export default function InvoiceDonutChart({ statusCounts }: Props) {
  const data = [
    { name: 'Paid', value: statusCounts.paid, color: COLORS.paid },
    { name: 'Pending', value: statusCounts.pending, color: COLORS.pending },
    { name: 'Denied', value: statusCounts.denied, color: COLORS.denied },
  ];

  return (
    <div className="w-auto max-w-md mx-auto">
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={100}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

