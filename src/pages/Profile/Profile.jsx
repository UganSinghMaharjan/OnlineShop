import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import {
  Card,
  Avatar,
  Typography,
  Row,
  Col,
  Button,
  List,
  Tag,
  Space,
  Spin,
  Alert,
} from "antd";
import {
  StarOutlined,
  ShoppingCartOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import Header from "../../components/Header/Header";

const { Title, Text, Paragraph } = Typography;

const Profile = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Get actual user info from Redux store (auth slice)
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (!user?._id) return; // Wait until user ID is ready

    const fetchOrders = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/orders/user/${user._id}`
        );
        setOrders(response.data.data);
      } catch (err) {
        setError(
          err.response?.data?.message || err.message || "Failed to fetch orders"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user?._id]);

  const userName = user ? `${user.firstName} ${user.lastName}` : "Profile";
  const userEmail = user?.email || "No email provided";
  const userBio = user?.bio || "This seller has not written a bio yet.";
  const userMobile = user?.mobile || "No number provided";
  const userAvatarLetter = user?.firstName?.[0]?.toUpperCase() || "U";

  return (
    <>
      <Header />
      <div style={{ padding: "40px", backgroundColor: "#F9F9FB" }}>
        <Row gutter={[32, 32]} align="top">
          {/* Profile Section */}
          <Col xs={24} md={8}>
            <Card
              style={{
                borderRadius: "16px",
                backgroundColor: "#BAABBD",
                textAlign: "center",
                padding: "24px",
              }}
            >
              <Avatar
                size={100}
                style={{
                  marginBottom: "16px",
                  backgroundColor: "#9F838C",
                  border: "3px solid white",
                }}
              >
                {userAvatarLetter}
              </Avatar>

              <Title level={3} style={{ color: "#816F68", marginBottom: 8 }}>
                {userName}
              </Title>

              <Space direction="vertical" size={4} style={{ marginBottom: 12 }}>
                <Text style={{ color: "#8D7471" }}>
                  <MailOutlined /> {userEmail}
                </Text>
                <Text style={{ color: "#8D7471" }}>
                  <PhoneOutlined /> {userMobile}
                </Text>
              </Space>

              <Paragraph style={{ color: "#816F68", marginBottom: 24 }}>
                {userBio}
              </Paragraph>

              <Button
                icon={<MailOutlined />}
                type="ghost"
                style={{
                  borderColor: "#8D7471",
                  color: "#8D7471",
                }}
              >
                Contact Seller
              </Button>
            </Card>
          </Col>

          {/* Orders Section */}
          <Col xs={24} md={16}>
            <Card
              title="Your Orders"
              style={{
                borderRadius: "16px",
                backgroundColor: "#C9C9EE",
                border: "none",
              }}
              headStyle={{ color: "#816F68", fontWeight: "bold" }}
            >
              {loading ? (
                <Spin tip="Loading orders..." />
              ) : error ? (
                <Alert type="error" message={error} />
              ) : orders.length === 0 ? (
                <Text style={{ color: "#816F68" }}>No orders found.</Text>
              ) : (
                <List
                  itemLayout="vertical"
                  dataSource={orders}
                  renderItem={(order) => (
                    <Card
                      key={order._id}
                      style={{
                        marginBottom: "20px",
                        backgroundColor: "#F5F4F6",
                        borderColor: "#9F838C",
                        borderRadius: "12px",
                        padding: "16px",
                      }}
                    >
                      <Title
                        level={4}
                        style={{ color: "#816F68", marginBottom: 4 }}
                      >
                        Order #{order._id.slice(-6).toUpperCase()}
                      </Title>
                      <Text style={{ color: "#8D7471" }}>
                        Status: <Tag>{order.status}</Tag>
                      </Text>
                      <Paragraph style={{ marginTop: 8, color: "#8D7471" }}>
                        Total Price: ${order.totalPrice.toFixed(2)}
                      </Paragraph>
                      <div>
                        {order.items.map((item) => (
                          <Tag
                            key={item.productId}
                            color="#9F838C"
                            style={{ marginBottom: 4 }}
                          >
                            {item.name} x {item.quantity}
                          </Tag>
                        ))}
                      </div>
                    </Card>
                  )}
                />
              )}
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Profile;
