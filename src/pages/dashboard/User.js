import React, { useEffect } from "react";
import { Typography, Space, Table } from "antd";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../features/customers/customerSlice";

const User = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const customer = useSelector((state) => state.customer.customers);
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
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
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
  const tableData = [];
  for (let i = 0; i < customer?.data?.length; i++) {
    if (customer?.data[i]?.role === "admin") {
      tableData.push({
        key: i + 1,
        no: i + 1,
        name: customer?.data[i]?.firstname + " " + customer?.data[i]?.lastname,
        email: customer?.data[i]?.email,
        phone: customer?.data[i]?.phone,
        role: customer?.data[i]?.role,
      });
    }
  }
  return (
    <div>
      <Title level={3}>User List</Title>
      <div className="recent_order mt-[20px] overflow-auto bg-white box_shadow rounded-lg p-[20px] mb-[20px] md:mb-[0px] ">
        <Title className="capitalize" level={4}>
          Admin Level User
        </Title>
        <Table className="mt-4" columns={columns} dataSource={tableData} />
      </div>
    </div>
  );
};

export default User;
