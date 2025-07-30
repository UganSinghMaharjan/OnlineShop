import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Card,
  Avatar,
  Typography,
  Row,
  Col,
  Button,
  List,
  Space,
  Divider,
} from "antd";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import axios from "axios";
import Header from "../../components/Header/Header";

const { Title, Text, Paragraph } = Typography;

const Profile = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(true);
  const [orderError, setOrderError] = useState(null);

  const userName = user ? `${user.firstName} ${user.lastName}` : "Profile";
  const userEmail = user?.email || "No email provided";
  const userBio = user?.bio || "This seller has not written a bio yet.";
  const userMobile = user?.mobile || "No number provided";
  const userAvatarLetter = user?.firstName?.[0]?.toUpperCase() || "U";

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user?._id) return;
      try {
        const res = await axios.get(
          `http://localhost:5000/api/v1/get-user-order/${user._id}`
        );
        setOrders(res.data.orders || []);
      } catch (err) {
        setOrderError("Could not load your orders.");
      } finally {
        setLoadingOrders(false);
      }
    };

    fetchOrders();
  }, [user]);

  return (
    <>
      <Header />
      <div
        style={{
          padding: "48px 40px",
          backgroundColor: "#F9F9FB",
          minHeight: "100vh",
        }}
      >
        <Row gutter={48} justify="center">
          {/* Profile Card */}
          <Col xs={24} sm={24} md={8} lg={7}>
            <Card
              bordered={false}
              style={{
                borderRadius: "18px",
                backgroundColor: "#BAABBD",
                textAlign: "center",
                padding: "36px 24px",
                boxShadow: "0 8px 20px rgba(158, 134, 141, 0.15)",
              }}
            >
              <Avatar
                size={110}
                style={{
                  marginBottom: 24,
                  backgroundColor: "#9F838C",
                  border: "4px solid white",
                  fontSize: "48px",
                  fontWeight: "600",
                  lineHeight: 1,
                }}
              >
                {userAvatarLetter}
              </Avatar>

              <Title
                level={2}
                style={{ color: "#816F68", marginBottom: 12, letterSpacing: 1 }}
              >
                {userName}
              </Title>

              <Space
                direction="vertical"
                size={6}
                style={{
                  marginBottom: 20,
                  display: "inline-block",
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    color: "#8D7471",
                    fontSize: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  <MailOutlined /> {userEmail}
                </Text>
                <Text
                  style={{
                    color: "#8D7471",
                    fontSize: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  <PhoneOutlined /> {userMobile}
                </Text>
              </Space>

              <Paragraph
                style={{
                  color: "#816F68",
                  fontSize: 16,
                  lineHeight: 1.5,
                  marginBottom: 32,
                  minHeight: 72,
                }}
              >
                {userBio}
              </Paragraph>

              <Button
                icon={<MailOutlined />}
                type="ghost"
                size="large"
                style={{
                  borderColor: "#8D7471",
                  color: "#8D7471",
                  fontWeight: "600",
                  padding: "8px 24px",
                  borderRadius: "8px",
                  letterSpacing: 0.6,
                }}
              >
                Contact Seller
              </Button>
            </Card>
          </Col>

          {/* Orders List */}
          <Col xs={24} sm={24} md={14} lg={16}>
            <Card
              bordered={false}
              title={
                <Title
                  level={3}
                  style={{
                    color: "#816F68",
                    fontWeight: "bold",
                    margin: 0,
                  }}
                >
                  Your Orders
                </Title>
              }
              style={{
                borderRadius: "18px",
                backgroundColor: "#C9C9EE",
                minHeight: "400px",
                padding: "24px",
                boxShadow: "0 6px 14px rgba(158, 134, 141, 0.2)",
              }}
            >
              {loadingOrders ? (
                <Text style={{ fontSize: 16 }}>
                  Loading your dream-bound orders...
                </Text>
              ) : orderError ? (
                <Text type="danger" style={{ fontSize: 16 }}>
                  {orderError}
                </Text>
              ) : orders.length === 0 ? (
                <Text style={{ fontSize: 16 }}>
                  No orders placed yet, dear customer.
                </Text>
              ) : (
                <List
                  itemLayout="vertical"
                  dataSource={orders}
                  split={false}
                  renderItem={(order, index) => (
                    <Card
                      key={order._id}
                      bordered={false}
                      style={{
                        marginBottom: 24,
                        backgroundColor: "#F5F4F6",
                        borderRadius: "16px",
                        padding: "20px 28px",
                        boxShadow: "0 6px 18px rgba(159, 131, 140, 0.1)",
                      }}
                    >
                      <Row justify="space-between" align="middle">
                        <Col>
                          <Title
                            level={4}
                            style={{
                              color: "#816F68",
                              marginBottom: 6,
                              letterSpacing: 0.5,
                            }}
                          >
                            🧾 Order #{index + 1}
                          </Title>

                          <Text
                            style={{
                              fontWeight: 600,
                              fontSize: 15,
                              color: "#816F68",
                            }}
                          >
                            Order ID: {order._id.slice(-6)}
                          </Text>

                          <br />

                          <Text
                            style={{
                              fontWeight: 600,
                              fontSize: 15,
                              color: "#816F68",
                            }}
                          >
                            Status:{" "}
                            <span
                              style={{
                                textTransform: "capitalize",
                                fontWeight: 700,
                                color:
                                  order.status === "delivered"
                                    ? "#4caf50"
                                    : order.status === "cancelled"
                                    ? "#f44336"
                                    : "#816F68",
                              }}
                            >
                              {order.status}
                            </span>
                          </Text>
                        </Col>
                        <Col>
                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: 600,
                              color: "#816F68",
                            }}
                          >
                            {new Date(order.createdAt).toLocaleDateString()}
                          </Text>
                        </Col>
                      </Row>

                      <Divider style={{ margin: "14px 0" }} />

                      <List
                        itemLayout="horizontal"
                        dataSource={order.items}
                        renderItem={(item) => (
                          <List.Item
                            key={item.productId || item._id}
                            style={{
                              paddingLeft: 0,
                              paddingRight: 0,
                              borderBottom: "none",
                            }}
                          >
                            <Text style={{ fontSize: 15, color: "#8D7471" }}>
                              • {item.name} × {item.quantity} — Rs. {item.price}
                            </Text>
                          </List.Item>
                        )}
                      />

                      <Divider style={{ margin: "14px 0" }} />

                      <Row justify="end">
                        <Text
                          strong
                          style={{
                            fontSize: 16,
                            color: "#816F68",
                          }}
                        >
                          Total: Rs. {order.totalPrice}
                        </Text>
                      </Row>
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
