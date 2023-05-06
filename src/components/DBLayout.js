import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme, Typography, Badge } from "antd";
import { useState } from "react";
import {
  MdDashboard,
  MdOutlineList,
  MdColorLens,
  MdSell,
  MdNotificationsActive,
} from "react-icons/md";
import {
  FaShoppingCart,
  FaUserPlus,
  FaUserCircle,
  FaCartPlus,
  FaUserTag,
  FaBlog,
} from "react-icons/fa";
import { ImBlog } from "react-icons/im";
import { SiBrandfolder } from "react-icons/si";
import { TbBrandAirtable, TbBrandGoogleBigQuery } from "react-icons/tb";
import { AiOutlineBgColors } from "react-icons/ai";
import { BiPurchaseTagAlt } from "react-icons/bi";

const { Title, Text } = Typography;

const DBLayout = () => {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="h-screen ">
      <Sider
        className="h-screen overflow-hidden hover:overflow-auto"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo">
          <Link to="/">
            {collapsed ? (
              <img
                className="p-2 w-[200px] mx-auto"
                src="images/mobile_logo.png"
                alt="logo"
              />
            ) : (
              <img
                className="p-4 w-[200px] mx-auto"
                src="images/main_logo.png"
                alt="logo"
              />
            )}
          </Link>
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
              icon: <MdDashboard size={18} />,
              label: "Dashboard",
            },
            {
              key: "customer",
              icon: <FaUserTag size={18} />,
              label: "Customers",
            },
            {
              key: "product",
              icon: <FaShoppingCart size={18} />,
              label: "Products",
              children: [
                {
                  key: "product-list",
                  icon: <MdOutlineList size={18} />,
                  label: "Product List",
                },
                {
                  key: "add-product",
                  icon: <FaCartPlus size={18} />,
                  label: "Add Product",
                },
                {
                  key: "color-list",
                  icon: <MdColorLens size={18} />,
                  label: "Color List",
                },
                {
                  key: "add-color",
                  icon: <AiOutlineBgColors size={18} />,
                  label: "Add Color",
                },
              ],
            },
            {
              key: "brand",
              icon: <SiBrandfolder size={18} />,
              label: "Brands",
              children: [
                {
                  key: "barnd-list",
                  icon: <SiBrandfolder size={18} />,
                  label: "Brand List",
                },
                {
                  key: "add-barnd",
                  icon: <TbBrandAirtable size={18} />,
                  label: "Add Brand",
                },
              ],
            },
            {
              key: "category",
              icon: <SiBrandfolder size={18} />,
              label: "Categories",
              children: [
                {
                  key: "category-list",
                  icon: <SiBrandfolder size={18} />,
                  label: "Category List",
                },
                {
                  key: "add-category",
                  icon: <TbBrandAirtable size={18} />,
                  label: "Add Category",
                },
              ],
            },
            {
              key: "order",
              icon: <MdSell size={18} />,
              label: "Orders",
              children: [
                {
                  key: "order-list",
                  icon: <MdSell size={18} />,
                  label: "Order List",
                },
                {
                  key: "add-order",
                  icon: <BiPurchaseTagAlt size={18} />,
                  label: "Add Order",
                },
              ],
            },
            {
              key: "blog",
              icon: <FaBlog size={18} />,
              label: "Blogs",
              children: [
                {
                  key: "blog-list",
                  icon: <FaBlog size={18} />,
                  label: "Blog List",
                },
                {
                  key: "add-blog",
                  icon: <ImBlog size={18} />,
                  label: "Add Blog",
                },
                {
                  key: "blog-category-list",
                  icon: <FaBlog size={18} />,
                  label: "Blog Catagory List",
                },
                {
                  key: "add-blog-category-list",
                  icon: <ImBlog size={18} />,
                  label: "Add Blog Catagory List",
                },
              ],
            },
            {
              key: "user",
              icon: <FaUserCircle size={18} />,
              label: "Users",
              children: [
                {
                  key: "user-list",
                  icon: <MdOutlineList size={18} />,
                  label: "User List",
                },
                {
                  key: "add-user",
                  icon: <FaUserPlus size={18} />,
                  label: "Add User",
                },
              ],
            },
            {
              key: "enquires",
              icon: <TbBrandGoogleBigQuery size={18} />,
              label: "Enquires",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="db_header flex justify-between"
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
          <div className="flex justify-center items-center gap-[20px]">
            <Badge count={99}>
              <MdNotificationsActive size={24} />
            </Badge>

            <div className="flex justify-center items-center gap-1">
              <div className="avatar">
                <div className="w-10 rounded-md">
                  <img
                    alt="user"
                    src="https://imglarger.com/Images/before-after/ai-image-enlarger-1-before-2.jpg"
                  />
                </div>
              </div>
              <div className="admin">
                <Title level={5}>Admin Name</Title>
                <Text>contact@imshama.com</Text>
              </div>
            </div>
          </div>
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
