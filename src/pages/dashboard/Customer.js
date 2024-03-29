import React, { useEffect } from "react";
import { Typography, Table } from "antd";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../features/user/userSlice";
import { FaRegEye } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const Customer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const user = useSelector((state) => state.user.users);
  const { Title } = Typography;
  const columns = [
    {
      title: "No.",
      dataIndex: "no",
      key: "no",
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
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "action",
    },
  ];
  const tableData = [];
  for (let i = 0; i < user?.data?.length; i++) {
    if (!(user?.data[i]?.role === "admin")) {
      tableData.push({
        key: i + 1,
        no: tableData.length + 1,
        name: user?.data[i]?.firstname + " " + user?.data[i]?.lastname,
        email: user?.data[i]?.email,
        phone: user?.data[i]?.phone,
        action: (
          <div className="flex gap-2">
            <FaRegEye size={22} className="text-green-700" />
            <FiEdit size={22} className="text-orange-400" />
            <MdDeleteForever size={22} className="text-red-500 " />
          </div>
        ),
      });
    }
  }
  return (
    <div>
      <Title level={3}>Customer List</Title>
      <div className="recent_order mt-[20px] overflow-auto bg-white box_shadow rounded-lg p-[20px] mb-[20px] md:mb-[0px] ">
        <Title className="capitalize" level={4}>
          All Customers
        </Title>
        <Table className="mt-4" columns={columns} dataSource={tableData} />
      </div>
    </div>
  );
};

export default Customer;
