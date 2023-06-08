import React, { useMemo, useState } from "react";
import { Typography, DatePicker, Radio, Space, Select } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, {
  modules,
  formats,
} from "../../components/EditorToolbar";
import Dropzone from "react-dropzone";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { getBlogCategories } from "../../features/blogCategory/blogCategorySlice";
import { AiOutlineDelete } from "react-icons/ai";
import {
  blogImgDelete,
  blogImgReset,
  blogImgUpload,
} from "../../features/upload/blogImgSlice";
import { createBlog, resetState } from "../../features/blog/blogSlice";

const AddBlog = () => {
  const { Title } = Typography;
  const [category, setCategory] = useState([]);
  const [date, setDate] = useState("");
  const dispatch = useDispatch();
  // visibility
  const [visibility, setVisibility] = useState("published");
  // date
  const handleDate = (date, dateString) => {
    setDate(dateString);
  };

  const blogCategories = useSelector(
    (state) => state.blogCategory.blogCategories.data
  );
  const categoryOptions = [];
  blogCategories?.forEach((cat) => {
    categoryOptions.push({
      value: cat.title,
      label: cat.title,
    });
  });

  const blogImages = useSelector((state) => state.blogImg.blogImages);
  const bImages = useMemo(() => {
    const bImages = [];
    blogImages?.forEach((img) => {
      bImages.push({
        public_id: img[0].public_id,
        url: img[0].url,
      });
    });
    return bImages;
  }, [blogImages]);

  // validation
  let blogSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    visibility: Yup.string().required("visibility is required"),
    date: Yup.string().required("date is required"),
    category: Yup.array()
      .min(1, "Pick at least one category")
      .required("category is Required"),
    images: Yup.array().required("Image is required"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      visibility: visibility,
      date: date,
      category: category,
      images: "",
    },

    validationSchema: blogSchema,

    onSubmit: (values) => {
      dispatch(createBlog(values));
    },
  });

  useEffect(() => {
    dispatch(getBlogCategories());
    formik.values.category = category;
    formik.values.visibility = visibility;
    formik.values.date = date;
    formik.values.images = bImages;
  }, [category, dispatch, visibility, bImages, date, formik.values]);

  const newBlog = useSelector((state) => state.blog);
  const { createdBlog, isSuccess, isError } = newBlog;
  useEffect(() => {
    if (isSuccess && createdBlog?.data?.title) {
      toast.success(`${createdBlog?.data?.title}, Add Successfully`);
      formik.resetForm();
      setTimeout(() => {
        dispatch(resetState());
        dispatch(blogImgReset());
      }, 1500);
    }
    if (isError) {
      toast.error("Product Add Failed");
    }
  }, [createdBlog, isSuccess, isError]);

  return (
    <div>
      <div className="flex justify-between">
        <Title level={3}>Add Blog</Title>
        <button
          type="submit"
          onClick={formik.handleSubmit}
          className="first_button rounded-md px-5 py-2 text-sm text-white uppercase"
        >
          Save
        </button>
      </div>
      <div className="md:flex justify-between mt-[20px] blog">
        <div className="bg-white box_shadow p-[20px] rounded-lg  md:w-[70%] md:mb-0 mb-[20px] ">
          <Title level={4}>Blog Details</Title>
          <form className="mt-4" onSubmit={formik.handleSubmit}>
            {/* name */}
            <div className="mb-4">
              <label htmlFor="blogName" className=" font-bold text-sm">
                Blog Title
              </label>
              <input
                onChange={formik.handleChange("title")}
                value={formik.values.title}
                placeholder="Blog Title"
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
            {/* desc */}
            <div className="mb-4 ">
              <label htmlFor="desc" className=" font-bold text-sm">
                Description
              </label>
              <div className="mt-2">
                <EditorToolbar toolbarId={"t1"} />
                <ReactQuill
                  theme="snow"
                  onChange={formik.handleChange("description")}
                  value={formik.values.description}
                  placeholder={"Write something..."}
                  modules={modules("t1")}
                  formats={formats}
                />
                {formik.touched.description && formik.errors.description ? (
                  <div className="formik_err text-sm text-red-600">
                    {formik.errors.description}
                  </div>
                ) : null}
              </div>
            </div>
          </form>
        </div>
        <div className="md:w-[28%]">
          <div className="visibility bg-white box_shadow p-[20px] rounded-lg">
            <Title level={4}>Visibility</Title>
            <Radio.Group
              className="my-4"
              onChange={(e) => setVisibility(e.target.value)}
              defaultValue="published"
              value={visibility}
            >
              <Space direction="vertical">
                <Radio value="published">Published</Radio>
                <Radio value="scheduled">Scheduled</Radio>
                <Radio value="hidden">Hidden</Radio>
              </Space>
            </Radio.Group>
            {formik.touched.visibility && formik.errors.visibility ? (
              <div className="formik_err text-sm text-red-600">
                {formik.errors.visibility}
              </div>
            ) : null}
            <h5 className="mb-2 font-bold text-sm">Publish date</h5>
            <div>
              <DatePicker className="w-full h-[40px]" onChange={handleDate} />
              {formik.touched.date && formik.errors.date ? (
                <div className="formik_err text-sm text-red-600">
                  {formik.errors.date}
                </div>
              ) : null}
            </div>
          </div>
          <div className="blog_cat mt-4 bg-white box_shadow p-[20px] rounded-lg">
            <Title level={4}>Blog Category</Title>
            <Select
              className="mt-4 h-[40px] w-full capitalize"
              mode="multiple"
              allowClear
              placeholder="Please select"
              onChange={(e) => setCategory(e)}
              options={categoryOptions}
            />
            {formik.touched.category && formik.errors.category ? (
              <div className="formik_err text-sm text-red-600">
                {formik.errors.category}
              </div>
            ) : null}
          </div>
          <div className="blog_picture mt-4 bg-white box_shadow p-[20px] rounded-lg">
            <Title level={4}>Blog Picture</Title>
            <div className="show_upload_images mt-4 flex flex-wrap gap-[2%] ">
              {bImages?.map((image, i) => (
                <div key={i} className="relative w-[48%]">
                  <button
                    onClick={() => dispatch(blogImgDelete(image.public_id))}
                    className="absolute right-1 top-1 duration-300 bg-white p-1 rounded-full"
                  >
                    <AiOutlineDelete color="red" />
                  </button>
                  <img
                    className=" rounded-md"
                    alt="product img"
                    src={image.url}
                  />
                </div>
              ))}
            </div>
            <div className="mt-4 border rounded-md text-center p-4">
              <Dropzone
                onDrop={(acceptedFiles) =>
                  dispatch(blogImgUpload(acceptedFiles))
                }
              >
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <p>Upload Image</p>
                    </div>
                  </section>
                )}
              </Dropzone>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
