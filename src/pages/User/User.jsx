import React, { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);

  // Fetch users from backend
  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/get-all-user"
      );
      setUsers(response.data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Toggle block/unblock status
  const toggleBlock = async (user) => {
    try {
      const action = user.isBlocked ? "unblock" : "block";
      const url = `http://localhost:5000/api/v1/${action}/${user._id}`;
      console.log("Calling API:", url);

      const response = await axios.put(url);
      console.log("API response data:", response.data.data);

      if (response.data.success) {
        const updatedUser = response.data.data;
        setUsers((prevUsers) =>
          prevUsers.map((u) => (u._id === updatedUser._id ? updatedUser : u))
        );
      } else {
        console.error("API responded with failure:", response.data.message);
      }
    } catch (error) {
      console.error("Error updating user status:", error);
    }
  };

  return (
    <div className="min-h-screen p-10 w-[80%] text-[#1C1C1C] font-sans">
      <h2 className="text-3xl font-bold mb-6 text-[#8D7471] text-center">
        User Directory
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-2xl shadow-lg overflow-hidden">
          <thead className="bg-[#C9C9EE] text-left">
            <tr>
              <th className="px-6 py-3 text-sm text-[#1C1C1C]">Name</th>
              <th className="px-6 py-3 text-sm text-[#1C1C1C]">Email</th>
              <th className="px-6 py-3 text-sm text-[#1C1C1C]">Role</th>
              <th className="px-6 py-3 text-sm text-[#1C1C1C]">Joined</th>
              <th className="px-6 py-3 text-sm text-[#1C1C1C]">Status</th>
              <th className="px-6 py-3 text-sm text-[#1C1C1C]">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-t border-gray-200">
                <td className="px-6 py-4 text-[#8D7471] font-medium">
                  {user.name || `${user.firstName} ${user.lastName}`}
                </td>
                <td className="px-6 py-4 text-[#9F838C]">{user.email}</td>
                <td className="px-6 py-4 text-[#9F838C]">{user.role}</td>
                <td className="px-6 py-4 text-[#1C1C1C]">
                  {user.createdAt
                    ? new Date(user.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "N/A"}
                </td>
                <td className="px-6 py-4 text-[#1C1C1C]">
                  {user.isBlocked ? (
                    <span className="text-red-600 font-semibold">Blocked</span>
                  ) : (
                    <span className="text-green-600 font-semibold">Active</span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => toggleBlock(user)}
                    className={`px-4 py-1 rounded ${
                      user.isBlocked
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {user.isBlocked ? "Unblock" : "Block"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
