import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import {
  Button,
  Layout,
  Menu,
  theme,
  Typography,
  Badge,
  Breadcrumb,
  Dropdown,
} from "antd";
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
  FaUserCircle,
  FaCartPlus,
  FaUserTag,
  FaBlog,
} from "react-icons/fa";
import { ImBlog } from "react-icons/im";
import { SiBrandfolder } from "react-icons/si";
import { RiCouponFill } from "react-icons/ri";
import { TbBrandGoogleBigQuery, TbCategory } from "react-icons/tb";
import { useSelector } from "react-redux";

const DBLayout = () => {
  const { Title, Text } = Typography;
  const { user } = useSelector((state) => state.auth);
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const pathname = window.location.pathname.split("/");

  // dropdown
  const items = [
    {
      key: "1",
      label: (
        <a rel="noopener noreferrer" href="https://www.antgroup.com">
          Profile
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a rel="noopener noreferrer" href="https://www.antgroup.com">
          Sign Out
        </a>
      ),
    },
  ];
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
            if (key === "signout") {
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
                  key: "color",
                  icon: <MdColorLens size={18} />,
                  label: "Color",
                },
                {
                  key: "category",
                  icon: <TbCategory size={18} />,
                  label: "Catagories",
                },
                {
                  key: "brand",
                  icon: <SiBrandfolder size={18} />,
                  label: "Brands",
                },
              ],
            },
            {
              key: "order",
              icon: <MdSell size={18} />,
              label: "Orders",
            },
            {
              key: "coupon",
              icon: <RiCouponFill size={18} />,
              label: "Coupons",
            },
            {
              key: "blog",
              icon: <FaBlog size={18} />,
              label: "Blogs",
              children: [
                {
                  key: "blog-list",
                  icon: <MdOutlineList size={18} />,
                  label: "Blog List",
                },
                {
                  key: "add-blog",
                  icon: <ImBlog size={18} />,
                  label: "Add Blog",
                },
                {
                  key: "blog-cat",
                  icon: <TbCategory size={18} />,
                  label: "Blog Category",
                },
              ],
            },
            {
              key: "user-list",
              icon: <FaUserCircle size={18} />,
              label: "Users",
            },
            {
              key: "enquery",
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

            <Dropdown
              menu={{
                items,
              }}
            >
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
                  <Title level={5} className="capitalize">
                    {user?.data?.firstname + " " + user?.data?.lastname}{" "}
                  </Title>
                  <Text> {user?.data?.email} </Text>
                </div>
              </div>
            </Dropdown>
          </div>
        </Header>
        <Content
          className="rounded-lg overflow-auto"
          style={{
            margin: "0px 16px",
            padding: 20,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Breadcrumb
            className="mb-[20px]"
            items={[
              {
                href: "/admin",
                title: <HomeOutlined />,
              },
              {
                href: `${window.location.pathname}`,
                title: (
                  <>
                    <span className="capitalize">
                      {pathname[2]
                        ? pathname[2].replace("-", " ")
                        : pathname[1]}
                    </span>
                  </>
                ),
              },
            ]}
          />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DBLayout;
