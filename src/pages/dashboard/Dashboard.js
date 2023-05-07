import React from "react";
import { BsArrowUpRight, BsArrowDownRight } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { Typography, Space, Table, Tag } from "antd";
import { Column } from "@ant-design/plots";

const Dashboard = () => {
  const { Title, Text } = Typography;
  const data = [
    {
      type: "Jan",
      sales: 38,
    },
    {
      type: "Feb",
      sales: 52,
    },
    {
      type: "Mar",
      sales: 61,
    },
    {
      type: "Apr",
      sales: 145,
    },
    {
      type: "May",
      sales: 48,
    },
    {
      type: "Jun",
      sales: 38,
    },
    {
      type: "July",
      sales: 38,
    },
    {
      type: "Aug",
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    color: ({ type }) => {
      return "#ffd333";
    },
    label: {
      position: "middle",
      style: {
        fill: "#000",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Month",
      },
      sales: {
        alias: "sales",
      },
    },
  };

  const columns = [
    {
      title: "No.",
      dataIndex: "no",
      key: "no",
      render: (text) => <a>{text}</a>,
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
          <MdDeleteForever />
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
      <Title level={3}>Dashboard</Title>
      <div className="flex justify-between mt-2">
        <div className="box_shadow w-[32.33%] bg-white rounded-lg p-[15px]">
          <div className="">
            <Text type="secondary" className="capitalize">
              Total sells
            </Text>
          </div>
          <div className="flex justify-between items-end mt-2">
            <Title level={2}>$ 1000</Title>
            <div className="flex flex-col items-end">
              <Text className="flex gap-1 items-center" type="success">
                <BsArrowUpRight /> 34.7%
              </Text>
              <Text type="secondary">Compare to april 2023</Text>
            </div>
          </div>
        </div>
        <div className="box_shadow w-[32.33%] bg-white rounded-lg p-[15px]">
          <div className="">
            <Text type="secondary" className="capitalize">
              average order value
            </Text>
          </div>
          <div className="flex justify-between items-end mt-2">
            <Title level={2}>$ 1000</Title>
            <div className="flex flex-col items-end">
              <Text className="flex gap-1 items-center" type="danger">
                <BsArrowDownRight /> 34.7%
              </Text>
              <Text type="secondary">Compare to april 2023</Text>
            </div>
          </div>
        </div>
        <div className="box_shadow w-[32.33%] bg-white rounded-lg p-[15px]">
          <div className="">
            <Text type="secondary" className="capitalize">
              Total orders
            </Text>
          </div>
          <div className="flex justify-between items-end mt-2">
            <Title level={2}>$ 1000</Title>
            <div className="flex flex-col items-end">
              <Text className="flex gap-1 items-center" type="success">
                <BsArrowUpRight /> 34.7%
              </Text>
              <Text type="secondary">Compare to april 2023</Text>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[2%] mt-[20px]">
        <div className="active_user w-[28%] bg-white box_shadow rounded-lg p-[20px] ">
          <div className="mb-2">
            <Title className="capitalize" level={5}>
              Active User
            </Title>
            <div className="mt-2 rounded bg-[#d9ecff] py-4 ">
              <Title className="text-[#004b9a] text-center ">148</Title>
            </div>
          </div>
          <div className="mb-2">
            <Title className="capitalize" level={5}>
              Pending Orders
            </Title>
            <div className="mt-2 rounded bg-[#d9ecff] py-4 ">
              <Title className="text-[#004b9a] text-center">35</Title>
            </div>
          </div>
        </div>
        <div className="income_statistic w-[70%] bg-white box_shadow rounded-lg p-[20px] ">
          <Title className="capitalize" level={5}>
            Income statistics
          </Title>
          <div className="mt-2">
            <Column {...config} />
          </div>
        </div>
      </div>
      <div className="recent_order bg-white box_shadow rounded-lg p-[20px] mt-[20px]">
        <Title className="capitalize" level={5}>
          recent orders
        </Title>
        <div className="mt-2">
          <Table columns={columns} dataSource={tableData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
