import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
  AppstoreAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import Dashboard from "../../pages/Dashboard/Dashboard";
import CustomHeader from "../CustomHeader/CustomHeader";
import AddProducts from "../../pages/AddProducts/AddProducts";
import User from "../../pages/User/User";
import Settings from "../../pages/Settings/Settings";




const { Header: AntHeader, Content, Sider } = Layout;

const siderWidth = 220;

const Admin = () => {
  const [selectedKey, setSelectedKey] = useState("1");

  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        width={siderWidth}
        breakpoint="lg"
        collapsedWidth="0"
        style={{ backgroundColor: "#9F838C" }}
      >
        <div
          style={{
            color: "white",
            padding: "24px 20px 12px",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          PandaWagon Admin
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={handleMenuClick}
          style={{ backgroundColor: "#9F838C" }}
        >
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            Users
          </Menu.Item>
          <Menu.Item key="3" icon={<AppstoreAddOutlined />}>
            Add Products
          </Menu.Item>
          <Menu.Item key="4" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
          <Menu.Item key="5" icon={<LogoutOutlined />}>
            Log Out
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout
        style={{
          marginLeft: 0,
        }}
        className="bg-[#f7f7f7] overflow-x-hidden"
      >
         <AntHeader style={{ background: "#fff", padding: 0 }}>
          <CustomHeader selectedKey={selectedKey} handleMenuClick={setSelectedKey} />
        </AntHeader>

        <Content className="min-h-screen min-w-screen bg-[#f7f7f7] flex rounded-2xl">
  {selectedKey === "1" && <Dashboard />}
  {selectedKey === "2" && <User/>}
  {selectedKey === "3" && <AddProducts/>}
  {selectedKey === "4" && <Settings/>}
</Content>
      </Layout>
    </Layout>
  );
};

export default Admin;
