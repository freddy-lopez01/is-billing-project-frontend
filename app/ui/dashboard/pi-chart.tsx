'use client' 

import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import Props from '@/app/lib/definitions'; 

const COLORS = {
  paid: 'rgba(113, 231, 150, 1)',    // soft green
  pending: 'rgba(253, 240, 150, 1)', // soft yellow
  denied: 'rgba(252, 110, 150, 1)',  // soft red
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

