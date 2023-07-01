import React, { useEffect, useState } from "react";
import { Typography, Table, DatePicker } from "antd";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { createCoupon, getCoupons } from "../../features/coupon/couponSlice";
import { FaRegEye } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const CouponList = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState("");
  const coupons = useSelector((state) => state.coupon.coupons);
  console.log(coupons);
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
      name: coupons?.data[i]?.title,
      discount: coupons?.data[i]?.discount,
      expiry: coupons?.data[i]?.date,
      action: (
        <div className="flex gap-2">
          <FaRegEye size={22} className="text-green-700" />
          <FiEdit size={22} className="text-orange-400" />
          <MdDeleteForever size={22} className="text-red-500 " />
        </div>
      ),
    });
  }

  // date
  const handleDate = (date, dateString) => {
    setDate(dateString);
  };

  // add color
  let couponSchema = Yup.object().shape({
    title: Yup.string().required("Name is required"),
    discount: Yup.number().required("Discount is required"),
    date: Yup.string().required("date is required"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      discount: "",
      date: date,
    },
    validationSchema: couponSchema,

    onSubmit: (values) => {
      dispatch(createCoupon(values));
    },
  });

  const newCoupon = useSelector((state) => state.coupon);
  const { createdCoupon, isSuccess, isError } = newCoupon;

  useEffect(() => {
    if (isSuccess && createdCoupon?.data?.title) {
      toast.success(`${createdCoupon?.data?.title}, Add Successfully`);
      formik.resetForm();
    }
    if (isError) {
      toast.error("Coupon Add Failed");
    }
  }, [createdCoupon, isSuccess, isError]);

  useEffect(() => {
    dispatch(getCoupons());
    formik.values.date = date;
  }, [dispatch, createdCoupon, date, formik.values]);

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
            <form onSubmit={formik.handleSubmit}>
              <div className="my-4">
                <label htmlFor="couponName" className=" font-bold text-sm">
                  Coupon Name
                </label>
                <input
                  onChange={formik.handleChange("title")}
                  value={formik.values.title}
                  placeholder="Coupon name"
                  type="text"
                  id="couponName"
                  name="couponName"
                  className="w-full bg-white rounded border border-gray-300 outline-none text-gray-700 py-1 px-3 mt-2 leading-8 transition-colors duration-200 ease-in-out"
                />
                {formik.touched.title && formik.errors.title ? (
                  <div className="formik_err text-sm text-red-600">
                    {formik.errors.title}
                  </div>
                ) : null}
              </div>
              <div className="my-4">
                <label htmlFor="couponDiscount" className=" font-bold text-sm">
                  Coupon Discount (%)
                </label>
                <input
                  onChange={formik.handleChange("discount")}
                  value={formik.values.discount}
                  placeholder="Coupon discount percent"
                  type="number"
                  id="couponDiscount"
                  name="couponDiscount"
                  className="w-full bg-white rounded border border-gray-300 outline-none text-gray-700 py-1 px-3 mt-2 leading-8 transition-colors duration-200 ease-in-out"
                />
                {formik.touched.discount && formik.errors.discount ? (
                  <div className="formik_err text-sm text-red-600">
                    {formik.errors.discount}
                  </div>
                ) : null}
              </div>
              <div className="my-4">
                <label htmlFor="couponDate" className=" font-bold text-sm">
                  Coupon Expire Date
                </label>
                <div>
                  <DatePicker
                    id="couponDate"
                    className="w-full h-[40px]"
                    onChange={handleDate}
                  />
                  {formik.touched.date && formik.errors.date ? (
                    <div className="formik_err text-sm text-red-600">
                      {formik.errors.date}
                    </div>
                  ) : null}
                </div>
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
