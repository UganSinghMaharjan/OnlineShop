import React from "react";
import { Layout, Menu, Typography, Card, Row, Col } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
  AppstoreAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

const Admin = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        width={250}
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

      <Layout>
        <Header style={{ background: "#fff", padding: 0, paddingLeft: 24 }}>
          <Title level={3} style={{ margin: 0 }}>
            Dashboard Overview
          </Title>
        </Header>

        <Content style={{ margin: "24px 16px 0" }}>
          <div style={{ padding: 24, minHeight: 360, background: "#fff" }}>
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Users" bordered={false}>
                  1,245
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Orders" bordered={false}>
                  312
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Revenue" bordered={false}>
                  $12,430
                </Card>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Admin;
