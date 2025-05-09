import React from 'react';

const User = () => {
  const users = [
    {
      name: "Jane Doe",
      email: "jane.doe@example.com",
      role: "Customer",
      joined: "March 2024"
    },
    {
      name: "John Smith",
      email: "john.smith@example.com",
      role: "Admin",
      joined: "February 2023"
    },
    {
      name: "Alice Brown",
      email: "alice.brown@example.com",
      role: "Vendor",
      joined: "January 2025"
    },
    {
      name: "Leo White",
      email: "leo.white@example.com",
      role: "Customer",
      joined: "April 2025"
    }
  ];

  return (
    <div className="min-h-screen p-10 w-[80%] text-[#816F68] font-sans">
      <h2 className="text-3xl font-bold mb-6 text-[#8D7471] text-center">User Directory</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-2xl shadow-lg overflow-hidden">
          <thead className="bg-[#C9C9EE] text-left">
            <tr>
              <th className="px-6 py-3 text-sm text-[#816F68]">Name</th>
              <th className="px-6 py-3 text-sm text-[#816F68]">Email</th>
              <th className="px-6 py-3 text-sm text-[#816F68]">Role</th>
              <th className="px-6 py-3 text-sm text-[#816F68]">Joined</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="px-6 py-4 text-[#8D7471] font-medium">{user.name}</td>
                <td className="px-6 py-4 text-[#9F838C]">{user.email}</td>
                <td className="px-6 py-4 text-[#816F68]">{user.role}</td>
                <td className="px-6 py-4 text-[#816F68]">{user.joined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
