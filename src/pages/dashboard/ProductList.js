import React, { useEffect } from "react";
import { Typography, Space, Table, Tag } from "antd";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../features/product/productSlice";
import { FaRegEye } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const ProductList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.product.products);
  const { Title } = Typography;
  const columns = [
    {
      title: "SKU",
      dataIndex: "no",
      key: "no",
      render: (text) => <Link to="">{text}</Link>,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: (a, b) => a.title.length - b.title.length,
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
      sorter: (a, b) => a.brand.length - b.brand.length,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      sorter: (a, b) => a.quantity - b.quantity,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Sold",
      dataIndex: "sold",
      key: "sold",
      sorter: (a, b) => a.sold - b.sold,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];
  const tableData = [];
  for (let i = 0; i < products?.data?.result?.length; i++) {
    tableData.push({
      key: i + 1,
      no: tableData.length + 1,
      title: products?.data?.result[i]?.title,
      brand: products?.data?.result[i]?.brand,
      quantity: products?.data?.result[i]?.quantity,
      price: products?.data?.result[i]?.price,
      sold: products?.data?.result[i]?.sold,
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
      <Title level={3}>Products List</Title>
      <div className="recent_order mt-[20px] overflow-auto bg-white box_shadow rounded-lg p-[20px] mb-[20px] md:mb-[0px] ">
        <Title className="capitalize" level={4}>
          All Products
        </Title>
        <Table className="mt-4" columns={columns} dataSource={tableData} />
      </div>
    </div>
  );
};

export default ProductList;
