import React from 'react';
import { Card, Avatar, Typography, Row, Col, Button, List, Tag } from 'antd';
import { StarOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

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

const Profile = () => {
  return (
    <div style={{ padding: '40px', backgroundColor: '#F9F9FB' }}>
      <Row gutter={[24, 24]}>
        {/* Profile Section */}
        <Col xs={24} md={8}>
          <Card
            style={{
              borderRadius: '16px',
              backgroundColor: '#BAABBD',
              textAlign: 'center',
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
              S
            </Avatar>
            <Title level={3} style={{ color: '#816F68' }}>
              Shop of Shadows
            </Title>
            <Text style={{ color: '#8D7471' }}>Curated by Ugan Student</Text>
            <Paragraph style={{ color: '#816F68', marginTop: '16px' }}>
              Where items are crafted with care, like commits from the heart.
            </Paragraph>
            <Button
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
            title="Featured Products"
            style={{
              borderRadius: '16px',
              backgroundColor: '#C9C9EE',
              border: 'none',
            }}
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
                  }}
                >
                  <Row justify="space-between" align="middle">
                    <Col>
                      <Title level={4} style={{ color: '#816F68' }}>
                        {item.name}
                      </Title>
                      <Text style={{ color: '#8D7471' }}>
                        {item.description}
                      </Text>
                      <div style={{ marginTop: '8px' }}>
                        <Tag color="#9F838C">{item.category}</Tag>
                      </div>
                    </Col>
                    <Col>
                      <div style={{ display: 'flex', gap: '12px' }}>
                        <Button
                          icon={<StarOutlined />}
                          style={{ color: '#BAABBD', borderColor: '#BAABBD' }}
                        >
                          {item.likes}
                        </Button>
                        <Button
                          type="primary"
                          icon={<ShoppingCartOutlined />}
                          style={{ backgroundColor: '#816F68', borderColor: '#816F68' }}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Card>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
