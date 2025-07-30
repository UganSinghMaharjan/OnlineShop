import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
  AppstoreAddOutlined,
  LogoutOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Dashboard from "../../pages/Dashboard/Dashboard";
import CustomHeader from "../CustomHeader/CustomHeader";
import AddProducts from "../../pages/AddProducts/AddProducts";
import User from "../../pages/User/User";
import EditProductList from "../../pages/EditProductList/EditProductList";
import { setLogout } from "../../redux/features/authSlice/authSlice";
import logo from "../../assets/images/logo.png";

const { Header: AntHeader, Content, Sider } = Layout;
const siderWidth = 260;
const headerHeight = 64;

const Admin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const defaultSelectedKey = location.state?.selectedKey || "1";
  const [selectedKey, setSelectedKey] = useState(defaultSelectedKey);

  const handleLogout = () => {
    dispatch(setLogout());
    localStorage.removeItem("user");
    localStorage.removeItem("AccessToken");
    window.location.href = "/";
  };

  const handleMenuClick = (e) => {
    const { key } = e;

    if (key === "5") {
      handleLogout();
    } else {
      setSelectedKey(key);
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider
        width={siderWidth}
        style={{
          backgroundColor: "#9F838C",
          position: "fixed",
          height: "100vh",
          top: 0,
          left: 0,
          zIndex: 1000,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px 0",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              objectFit: "cover",
              backgroundColor: "#fff", // optional: gives it a white border background
              padding: "4px", // optional: adds padding inside the circle
            }}
          />
        </div>

        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          onClick={handleMenuClick}
          style={{
            backgroundColor: "#9F838C",
            marginTop: "20px",
          }}
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
          <Menu.Item key="4" icon={<EditOutlined />}>
            Edit Products List
          </Menu.Item>
          <Menu.Item key="5" icon={<LogoutOutlined />}>
            Log Out
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Main Content Layout */}
      <Layout style={{ marginLeft: siderWidth }}>
        {/* Header */}
        <AntHeader
          style={{
            position: "fixed",
            top: 0,
            left: siderWidth,
            right: 0,
            height: `${headerHeight}px`,
            zIndex: 1000,
            background: "#fff",
            padding: 0,
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <CustomHeader
            selectedKey={selectedKey}
            handleMenuClick={setSelectedKey}
          />
        </AntHeader>

        {/* Page Content */}
        <Content
          style={{
            marginTop: headerHeight,
            padding: "24px",
            minHeight: "100vh",
            backgroundColor: "#f7f7f7",
          }}
        >
          {selectedKey === "1" && <Dashboard />}
          {selectedKey === "2" && <User />}
          {selectedKey === "3" && <AddProducts />}
          {selectedKey === "4" && <EditProductList />}

          {selectedKey === "5" && (
            <div className="w-full h-full flex items-center justify-center text-red-500 text-xl font-semibold">
              Logged out successfully!
            </div>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Admin;
