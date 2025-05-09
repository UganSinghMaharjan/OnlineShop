import React from "react";
import { Layout, Typography, Avatar, Space, Input } from "antd";
import { UserOutlined, BellOutlined, SearchOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { Title } = Typography;

const CustomHeader = () => {
  return (
    <Header
      style={{
        background: "#9F838C",
        padding: "0 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Title level={3} style={{ margin: 0 }}>
        PandaWagon Admin
      </Title>

      <Space size="middle">
        <Input
          placeholder="Search..."
          prefix={<SearchOutlined />}
          style={{ width: 200 }}
        />
        <BellOutlined style={{ fontSize: 20 }} />
        <Avatar icon={<UserOutlined />} />
      </Space>
    </Header>
  );
};

export default CustomHeader;
