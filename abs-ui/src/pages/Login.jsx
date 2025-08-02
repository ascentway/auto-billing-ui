// src/pages/Login.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const Login = () => {
    const [role, setRole] = useState("select");
    const [loginMode, setLoginMode] = useState("email");
    const [form, setForm] = useState({
        email: "",
        phone: "",
        password: "",
        otp: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Handle authentication logic here
        if (role === "tenant") {
            navigate("/tenant");
        } else if (role === "owner") {
            navigate("/owner");
        } else if (role === "admin") {
            navigate("/admin");
        }
    };

return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-4">
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full"
        >
            <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">
                Login to Your Account
            </h2>

            {/* Role Selection */}
            <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-medium">Select Role</label>
                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    defaultValue="select"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"

                >
                    <option value="select">Select</option>
                    <option value="tenant">Tenant</option>
                    <option value="owner">Owner</option>
                    <option value="admin">Admin</option>
                </select>
            </div>

            {/* Login Method Toggle */}
            <div className="flex justify-center mb-6">
                <button
                    onClick={() => setLoginMode("email")}
                    className={`px-4 py-2 rounded-l-lg border ${loginMode === "email"
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-100 text-gray-700"
                        }`}
                >
                    Email
                </button>
                <button
                    onClick={() => setLoginMode("phone")}
                    className={`px-4 py-2 rounded-r-lg border ${loginMode === "phone"
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-100 text-gray-700"
                        }`}
                >
                    Phone
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email / Phone Input */}
                {loginMode === "email" ? (
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        required
                    />
                ) : (
                    <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        required
                    />
                )}

                {/* Password Field (Both) */}
                {loginMode === "email" && (
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="Password"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        required
                    />
                )}

                {/* OTP Field (Phone Only) */}
                {loginMode === "phone" && (
                    <input
                        type="text"
                        name="otp"
                        value={form.otp}
                        onChange={handleChange}
                        placeholder="Enter OTP"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                )}

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition"
                >
                    Login
                </button>

            </form>
        </motion.div>
    </div>
);
};

export default Login;
