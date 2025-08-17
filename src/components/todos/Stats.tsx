import { CheckCircle, Clock, TrendingUp } from "lucide-react";
import React from "react";

const Stats = ({
  todosSize,
  completedCount,
  pendingCount,
  completionRate,
}: {
  todosSize: number;
  completionRate: number;
  pendingCount: number;
  completedCount: number;
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Todos</p>
            <p className="text-2xl font-bold text-gray-900">{todosSize}</p>
          </div>
          <TrendingUp className="h-8 w-8 text-blue-600" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Completed</p>
            <p className="text-2xl font-bold text-green-600">
              {completedCount}
            </p>
          </div>
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Pending</p>
            <p className="text-2xl font-bold text-orange-600">{pendingCount}</p>
          </div>
          <Clock className="h-8 w-8 text-orange-600" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Completion Rate</p>
            <p className="text-2xl font-bold text-blue-600">
              {completionRate}%
            </p>
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-blue-600 font-bold text-sm">%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
