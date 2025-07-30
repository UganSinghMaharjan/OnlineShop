import React, { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/get-all-user"
        );
        setUsers(response.data.data); // Adjust based on actual response shape
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

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
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-t border-gray-200">
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
