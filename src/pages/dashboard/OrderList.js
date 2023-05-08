import React from "react";
import { Typography, Space, Table, Tag } from "antd";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const OrderList = () => {
  const { Title } = Typography;
  const columns = [
    {
      title: "No.",
      dataIndex: "no",
      key: "no",
      render: (text) => <Link to="">{text}</Link>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (_, { status }) => (
        <>
          {status.map((s) => {
            let color = "green";
            if (s === "pending") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={s}>
                {s.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <MdDeleteForever size={22} className="text-red-500 " />
        </Space>
      ),
    },
  ];
  const tableData = [
    {
      no: "1",
      name: "John Brown",
      product: 32,
      status: ["pending"],
    },
    {
      no: "1",
      name: "John Brown",
      product: 32,
      status: ["deliverd"],
    },
  ];
  return (
    <div>
      <Title level={3}>Order List</Title>
      <div className="recent_order mt-[20px] overflow-auto bg-white box_shadow rounded-lg p-[20px] mb-[20px] md:mb-[0px] ">
        <Title className="capitalize" level={5}>
          recent orders
        </Title>
        <Table columns={columns} dataSource={tableData} />
      </div>
    </div>
  );
};

export default OrderList;
