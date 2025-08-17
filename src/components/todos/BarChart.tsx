"use client";

import { TTodo } from "@/types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface TodoBarChartProps {
  todos: TTodo[];
}

export function TodoBarChart({ todos }: TodoBarChartProps) {
  const userTodoCount = todos.reduce((acc, todo) => {
    acc[todo.userId] = (acc[todo.userId] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  const data = Object.entries(userTodoCount).map(([userId, count]) => ({
    user: `User ${userId}`,
    todos: count,
  }));

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        Todos per User
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="user" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="todos" fill="#3B82F6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
