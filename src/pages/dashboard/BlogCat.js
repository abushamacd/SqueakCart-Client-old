import React from "react";
import { Typography, Space, Table, Tag } from "antd";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const BlogCat = () => {
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
      <Title level={3}>Blog Category</Title>
      <div className="blog md:flex justify-between mt-[20px]">
        <div className="md:w-[70%] recent_order overflow-auto  bg-white box_shadow rounded-lg p-[20px] mb-[20px] md:mb-[0px]  ">
          <Title className="capitalize" level={4}>
            Category List
          </Title>
          <Table className="mt-4" columns={columns} dataSource={tableData} />
        </div>
        <div className="md:w-[28%]">
          <div className="visibility bg-white box_shadow p-[20px] rounded-lg">
            <Title level={4}>Add New Category</Title>
            <form action="">
              <div className="my-4">
                <label htmlFor="blogName" className=" font-bold text-sm">
                  Category Name
                </label>
                <input
                  placeholder="Blog Category"
                  type="text"
                  id="blogName"
                  name="blogName"
                  className="w-full bg-white rounded border border-gray-300 outline-none text-gray-700 py-1 px-3 mt-2 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
                type="submit"
                className="first_button rounded-md px-5 py-1 text-sm text-white uppercase"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCat;
