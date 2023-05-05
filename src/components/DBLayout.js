import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";
import Title from "antd/es/typography/Title";
import { MdDashboard, MdOutlineList } from "react-icons/md";
import {
  FaShoppingCart,
  FaUserPlus,
  FaUserCircle,
  FaCartPlus,
} from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { TbBrandAirtable } from "react-icons/tb";

const DBLayout = () => {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <Title level={3} className="text-center uppercase py-2 text-white">
            SqueakCart
          </Title>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key == "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <MdDashboard />,
              label: "Dashboard",
            },
            {
              key: "product",
              icon: <FaShoppingCart />,
              label: "Products",
              children: [
                {
                  key: "product-list",
                  icon: <MdOutlineList />,
                  label: "Product List",
                },
                {
                  key: "add-product",
                  icon: <FaCartPlus />,
                  label: "Add Product",
                },
                {
                  key: "barnd-list",
                  icon: <SiBrandfolder />,
                  label: "Brand List",
                },
                {
                  key: "add-product",
                  icon: <FaCartPlus />,
                  label: "Add Product",
                },
              ],
            },
            {
              key: "user",
              icon: <FaUserCircle />,
              label: "Users",
              children: [
                {
                  key: "user-list",
                  icon: <MdOutlineList />,
                  label: "User List",
                },
                {
                  key: "add-user",
                  icon: <FaUserPlus />,
                  label: "Add User",
                },
              ],
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          className="rounded-lg"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DBLayout;
