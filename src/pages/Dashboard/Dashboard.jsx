import React from 'react';

const Dashboard = () => {
  const stats = [
    { title: "Users", value: "1,245" },
    { title: "Orders", value: "587" },
    { title: "Revenue", value: "$12,340" },
    { title: "Growth", value: "+18%" },
  ];

  return (
    <div className=" p-8 min-h-screen text-[#816F68] font-sans w-[80%]">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-[#8D7471] mb-4">
        Welcome Back, Admin!
      </h1>
      <p className="text-lg text-[#9F838C] mb-8">
        Here’s what’s blooming in your dashboard today.
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-lg flex flex-col justify-between"
          >
            <h2 className="text-[#816F68] text-lg">{stat.title}</h2>
            <p className="text-3xl font-semibold text-[#8D7471]">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity Placeholder */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-[#8D7471] mb-4">
          Recent Activity
        </h2>
        <div className="h-48 bg-[#C9C9EE] rounded-xl flex items-center justify-center text-[#816F68] shadow-inner">
          Chart or Table Placeholder
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
