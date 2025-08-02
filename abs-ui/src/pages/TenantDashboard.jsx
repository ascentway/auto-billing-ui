import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const TenantDashboard = () => {
  const [bills, setBills] = useState({
    rent: { amount: 5000, dueDate: "2025-08-05", paid: false },
    water: { amount: 300, dueDate: "2025-08-07", paid: false },
    electricity: { amount: 1000, dueDate: "2025-08-06", paid: false },
    gas: { amount: 450, dueDate: "2025-08-09", paid: false },
  });

  const username = "Dhruv"; // replace with dynamic user value if needed

  const allPaid = Object.values(bills).every((bill) => bill.paid);

  const payBill = (billType) => {
    setBills((prev) => ({
      ...prev,
      [billType]: { ...prev[billType], paid: true },
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-pink-500 p-6">
      <div className="text-white text-3xl font-semibold mb-6">
        <Typewriter
          options={{
            strings: [`Hello ${username}, welcome to your dashboard!`, "Here are your current bills"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(bills).map(([key, bill]) => (
          <div
            key={key}
            className={`rounded-2xl p-4 text-white shadow-lg transition duration-300 ease-in-out transform hover:scale-105 ${
              bill.paid ? "bg-green-500" : "bg-red-500"
            }`}
          >
            <h3 className="text-xl capitalize font-bold mb-2">{key} Bill</h3>
            {bill.paid ? (
              <p className="text-sm">✅ Paid</p>
            ) : (
              <>
                <p className="text-sm">Amount Due: ₹{bill.amount}</p>
                <p className="text-sm">Due Date: {bill.dueDate}</p>
                <button
                  onClick={() => payBill(key)}
                  className="mt-2 px-3 py-1 text-sm bg-white text-black rounded-full hover:bg-gray-200"
                >
                  Pay Now
                </button>
              </>
            )}
          </div>
        ))}
      </div>

      {allPaid && (
        <div className="mt-8 text-center text-white text-xl font-semibold">
          🎉 No dues left. You're all clear!
        </div>
      )}
    </div>
  );
};

export default TenantDashboard;
