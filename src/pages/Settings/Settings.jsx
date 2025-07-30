import React, { useState } from "react";

const Settings = () => {
  const [username, setUsername] = useState("JaneDoe");
  const [email, setEmail] = useState("jane.doe@example.com");
  const [password, setPassword] = useState("");

  const handleSave = () => {
    // Add save functionality here
    alert("Settings saved!");
  };

  return (
    <div className="min-h-screen p-10 w-[80%] text-[#1C1C1C] font-sans">
      <h2 className="text-3xl font-bold mb-6 text-[#8D7471] text-center">
        Account Settings
      </h2>

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <div className="space-y-6">
          {/* Username */}
          <div>
            <label className="block text-sm text-[#9F838C] mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-4 border rounded-xl bg-[#F9FAFB] text-[#8D7471] focus:outline-none focus:ring-2 focus:ring-[#9F838C]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-[#9F838C] mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border rounded-xl bg-[#F9FAFB] text-[#8D7471] focus:outline-none focus:ring-2 focus:ring-[#9F838C]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-[#9F838C] mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 border rounded-xl bg-[#F9FAFB] text-[#8D7471] focus:outline-none focus:ring-2 focus:ring-[#9F838C]"
            />
          </div>
        </div>

        <button
          onClick={handleSave}
          className="w-full mt-6 py-3 px-4 text-white bg-[#8D7471] rounded-lg hover:bg-[#9F838C] transition"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;
