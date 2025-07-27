import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
} from 'antd';
import {
  StarOutlined,
  ShoppingCartOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import Header from '../../components/Header/Header';

const { Title, Text, Paragraph } = Typography;

const Profile = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const userName = user ? `${user.firstName} ${user.lastName}` : "Profile";
  const userEmail = user?.email || "No email provided";
  const userBio = user?.bio || "This seller has not written a bio yet.";
  const userMobile = user?.mobile || "No number provided";
  const userAvatarLetter = user?.firstName?.[0]?.toUpperCase() || "U";

  const products = [
    {
      name: 'Velvet Journal',
      description: 'A handcrafted journal with midnight pages.',
      likes: 124,
      category: 'Stationery',
    },
    {
      name: 'Moonlit Mug',
      description: 'Ceramic mug that glows with every sip.',
      likes: 88,
      category: 'Kitchenware',
    },
    {
      name: 'Dreamer’s Hoodie',
      description: 'Soft, oversized hoodie woven for comfort and dreams.',
      likes: 201,
      category: 'Apparel',
    },
  ];

  return (
    <>
      <Header />
      <div style={{ padding: '40px', backgroundColor: '#F9F9FB' }}>
        <Row gutter={[32, 32]} align="top">
          {/* Profile Section */}
          <Col xs={24} md={8}>
            <Card
              style={{
                borderRadius: '16px',
                backgroundColor: '#BAABBD',
                textAlign: 'center',
                padding: '24px',
              }}
            >
              <Avatar
                size={100}
                style={{
                  marginBottom: '16px',
                  backgroundColor: '#9F838C',
                  border: '3px solid white',
                }}
              >
                {userAvatarLetter}
              </Avatar>

              <Title level={3} style={{ color: '#816F68', marginBottom: 8 }}>
                {userName}
              </Title>

              <Space direction="vertical" size={4} style={{ marginBottom: 12 }}>
                <Text style={{ color: '#8D7471' }}>
                  <MailOutlined /> {userEmail}
                </Text>
                <Text style={{ color: '#8D7471' }}>
                  <PhoneOutlined /> {userMobile}
                </Text>
              </Space>

              <Paragraph style={{ color: '#816F68', marginBottom: 24 }}>
                {userBio}
              </Paragraph>

              <Button
                icon={<MailOutlined />}
                type="ghost"
                style={{
                  borderColor: '#8D7471',
                  color: '#8D7471',
                }}
              >
                Contact Seller
              </Button>
            </Card>
          </Col>

          {/* Products Section */}
          <Col xs={24} md={16}>
            <Card
              title="Your Order's"
              style={{
                borderRadius: '16px',
                backgroundColor: '#C9C9EE',
                border: 'none',
              }}
              headStyle={{ color: '#816F68', fontWeight: 'bold' }}
            >
              <List
                itemLayout="vertical"
                dataSource={products}
                renderItem={(item) => (
                  <Card
                    style={{
                      marginBottom: '20px',
                      backgroundColor: '#F5F4F6',
                      borderColor: '#9F838C',
                      borderRadius: '12px',
                      padding: '16px',
                    }}
                  >
                    <Row
                      justify="space-between"
                      align="middle"
                      gutter={[16, 16]}
                    >
                      <Col xs={24} sm={16}>
                        <Title level={4} style={{ color: '#816F68', marginBottom: 4 }}>
                          {item.name}
                        </Title>
                        <Text style={{ color: '#8D7471' }}>{item.description}</Text>
                        <div style={{ marginTop: '8px' }}>
                          <Tag color="#9F838C">{item.category}</Tag>
                        </div>
                      </Col>

                      <Col xs={24} sm={8} style={{ textAlign: 'right' }}>
                        <Space direction="horizontal" size="middle" wrap>
                          <Button
                            icon={<StarOutlined />}
                            style={{
                              color: '#BAABBD',
                              borderColor: '#BAABBD',
                            }}
                          >
                            {item.likes}
                          </Button>
                          <Button
                            type="primary"
                            icon={<ShoppingCartOutlined />}
                            style={{
                              backgroundColor: '#816F68',
                              borderColor: '#816F68',
                            }}
                          >
                            Add to Cart
                          </Button>
                        </Space>
                      </Col>
                    </Row>
                  </Card>
                )}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Profile;
