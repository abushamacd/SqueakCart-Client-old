import React, { useEffect } from "react";
import { Typography, Table, Select } from "antd";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../features/enquire/enquireSlice";
import { FaRegEye } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const Enquery = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const contacts = useSelector((state) => state.contact.contacts);
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
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const tableData = [];
  for (let i = 0; i < contacts?.data?.length; i++) {
    tableData.push({
      key: i + 1,
      no: tableData.length + 1,
      name: contacts?.data[i]?.name,
      email: contacts?.data[i]?.email,
      status: (
        <>
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
            ]}
          />
        </>
      ),
      action: (
        <div className="flex gap-2">
          <FaRegEye size={22} className="text-green-700" />
          <FiEdit size={22} className="text-orange-400" />
          <MdDeleteForever size={22} className="text-red-500 " />
        </div>
      ),
    });
  }
  return (
    <div>
      <Title level={3}>Enqueries</Title>
      <div className="recent_order mt-[20px] overflow-auto bg-white box_shadow rounded-lg p-[20px] mb-[20px] md:mb-[0px] ">
        <Title className="capitalize" level={5}>
          recent orders
        </Title>
        <Table columns={columns} dataSource={tableData} />
      </div>
    </div>
  );
};

export default Enquery;
