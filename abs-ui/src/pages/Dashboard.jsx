// src/pages/Dashboard.jsx
import React from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: 'Jan', bills: 5 },
  { name: 'Feb', bills: 4 },
  { name: 'Mar', bills: 6 },
  { name: 'Apr', bills: 3 },
  { name: 'May', bills: 7 },
];

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Welcome Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800">Welcome back, Dhruv 👋</h1>
        <p className="text-gray-500">Here’s what’s happening with your tenants and bills.</p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { title: "Bills This Month", value: "₹12,500", icon: "📄" },
          { title: "Pending Payments", value: "3", icon: "📥" },
          { title: "Tenants", value: "8", icon: "👤" },
          { title: "Alerts Sent", value: "21", icon: "🔔" }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4"
          >
            <div className="text-3xl">{item.icon}</div>
            <div>
              <div className="text-gray-500 text-sm">{item.title}</div>
              <div className="text-xl font-semibold">{item.value}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-8">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Billing History (Last 5 Months)</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="bills" fill="#6366F1" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl shadow hover:bg-indigo-700 transition">
          ➕ Add Tenant
        </button>
        <button className="bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:bg-green-700 transition">
          💳 View Bills
        </button>
        <button className="bg-yellow-500 text-white px-6 py-3 rounded-xl shadow hover:bg-yellow-600 transition">
          ⚙️ Generate Bill
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
