import React, { useEffect } from "react";
import { Typography, Table } from "antd";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  createBlogCategory,
  getBlogCategories,
} from "../../features/blogCategory/blogCategorySlice";
import { FaRegEye } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const BlogCat = () => {
  const dispatch = useDispatch();

  const blogCategories = useSelector(
    (state) => state.blogCategory.blogCategories
  );
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
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];
  const tableData = [];
  for (let i = 0; i < blogCategories?.data?.length; i++) {
    tableData.push({
      key: i + 1,
      no: tableData.length + 1,
      name: blogCategories?.data[i]?.title,
      action: (
        <div className="flex gap-2">
          <FaRegEye size={22} className="text-green-700" />
          <FiEdit size={22} className="text-orange-400" />
          <MdDeleteForever size={22} className="text-red-500 " />
        </div>
      ),
    });
  }

  // Add Category
  let blogCategorySchema = Yup.object().shape({
    title: Yup.string().required("Name is required"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: blogCategorySchema,
    onSubmit: (values) => {
      dispatch(createBlogCategory(values));
    },
  });

  const newBlogCategory = useSelector((state) => state.blogCategory);
  const { createdBlogCategory, isSuccess, isError } = newBlogCategory;

  useEffect(() => {
    if (isSuccess && createdBlogCategory?.data?.title) {
      toast.success(`${createdBlogCategory?.data?.title}, Add Successfully`);
      formik.resetForm();
    }
    if (isError) {
      toast.error("Category Add Failed");
    }
  }, [createdBlogCategory, isSuccess, isError]);

  useEffect(() => {
    dispatch(getBlogCategories());
  }, [dispatch, createdBlogCategory]);

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
            <form onSubmit={formik.handleSubmit}>
              <div className="my-4">
                <label htmlFor="blogName" className=" font-bold text-sm">
                  Category Name
                </label>
                <input
                  onChange={formik.handleChange("title")}
                  value={formik.values.title}
                  placeholder="Blog Category"
                  type="text"
                  id="blogName"
                  name="blogName"
                  className="w-full bg-white rounded border border-gray-300 outline-none text-gray-700 py-1 px-3 mt-2 leading-8 transition-colors duration-200 ease-in-out"
                />
                {formik.touched.title && formik.errors.title ? (
                  <div className="formik_err text-sm text-red-600">
                    {formik.errors.title}
                  </div>
                ) : null}
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
