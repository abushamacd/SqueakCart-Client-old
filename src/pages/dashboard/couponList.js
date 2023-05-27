import React, { useEffect } from "react";
import { Typography, Table } from "antd";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getCoupons } from "../../features/coupon/couponSlice";
import { FaRegEye } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const CouponList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoupons());
  }, [dispatch]);

  const coupons = useSelector((state) => state.coupon.coupons);
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
      title: "Discount %",
      dataIndex: "discount",
      key: "discount",
    },
    {
      title: "Expire On",
      dataIndex: "expiry",
      key: "expiry",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];
  const tableData = [];
  for (let i = 0; i < coupons?.data?.length; i++) {
    tableData.push({
      key: i + 1,
      no: tableData.length + 1,
      name: coupons?.data[i]?.name,
      discount: coupons?.data[i]?.discount,
      expiry:
        new Date(coupons?.data[i]?.expiry).getFullYear() +
        "/" +
        (new Date(coupons?.data[i]?.expiry).getMonth() + 1) +
        "/" +
        new Date(coupons?.data[i]?.expiry).getDate() +
        " - " +
        new Date(coupons?.data[i]?.expiry).getHours() +
        ":" +
        new Date(coupons?.data[i]?.expiry).getMinutes(),
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
      <Title level={3}>User Coupon</Title>
      <div className="blog md:flex justify-between mt-[20px]">
        <div className="md:w-[70%] recent_order overflow-auto  bg-white box_shadow rounded-lg p-[20px] mb-[20px] md:mb-[0px]  ">
          <Title className="capitalize" level={4}>
            All Coupons
          </Title>
          <Table className="mt-4" columns={columns} dataSource={tableData} />
        </div>
        <div className="md:w-[28%]">
          <div className="visibility bg-white box_shadow p-[20px] rounded-lg">
            <Title level={4}>Add New Coupon</Title>
            <form action="">
              <div className="my-4">
                <label htmlFor="blogName" className=" font-bold text-sm">
                  Coupon Name
                </label>
                <input
                  placeholder="User Coupon"
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

export default CouponList;
