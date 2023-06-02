import React, { useEffect, useMemo, useState } from "react";
import { Typography, Select } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, {
  modules,
  formats,
} from "../../components/EditorToolbar";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../../features/brand/brandSlice";
import { getProductCategories } from "../../features/productCategory/productCategorySlice";
import { getColors } from "../../features/color/colorSlice";
import { imageDelete, imageUpload } from "../../features/upload/imageSlice";
import Dropzone from "react-dropzone";
import { AiOutlineDelete } from "react-icons/ai";
import { createProduct, resetState } from "../../features/product/productSlice";
import { toast } from "react-toastify";

const AddProduct = () => {
  // date
  dayjs.extend(customParseFormat);
  const { Title } = Typography;
  // blog picture

  const [category, setCategory] = useState([]);
  const [color, setColor] = useState([]);
  const [tag, setTag] = useState([]);
  const dispatch = useDispatch();

  const brands = useSelector((state) => state.brand.brands.data);
  const brandOptions = [];
  brands?.forEach((brand) => {
    brandOptions.push({
      label: brand.title,
      value: brand.title,
    });
  });

  const productCategories = useSelector(
    (state) => state.productCategory.productCategories.data
  );
  const categoryOptions = [];
  productCategories?.forEach((cat) => {
    categoryOptions.push({
      value: cat.title,
      label: cat.title,
    });
  });

  const colors = useSelector((state) => state.color.colors.data);
  const colorOptions = [];
  colors?.forEach((color) => {
    colorOptions.push({
      value: color.title,
      label: color.title,
    });
  });

  const productImages = useSelector((state) => state.image.images);
  const proImages = useMemo(() => {
    const proImages = [];
    productImages?.forEach((img) => {
      proImages.push({
        public_id: img[0].public_id,
        url: img[0].url,
      });
    });
    return proImages;
  }, [productImages]);
  // console.log("proImages", proImages);

  const tagOptions = [];
  tagOptions.push(
    {
      value: "featured",
      label: "Featured",
    },
    {
      value: "special",
      label: "Special",
    },
    {
      value: "new-arrivals",
      label: "New Arrivals",
    },
    {
      value: "best-selling",
      label: "Best Selling",
    }
  );
  // validation
  let productSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    price: Yup.number().required("price is required"),
    quantity: Yup.number().required("Quantity is required"),
    description: Yup.string().required("Description is required"),
    category: Yup.array()
      .min(1, "Pick at least one category")
      .required("category is Required"),
    tag: Yup.array()
      .min(1, "Pick at least one tag")
      .required("tag is Required"),
    brand: Yup.string().required("brand is required"),
    color: Yup.array()
      .min(1, "Pick at least one color")
      .required("Color is Required"),
    images: Yup.array().required("Image is required"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      price: 0,
      quantity: 0,
      description: "",
      category: category,
      tag: tag,
      brand: "",
      color: color,
      images: "",
    },

    validationSchema: productSchema,

    onSubmit: (values) => {
      // console.log(values);
      dispatch(createProduct(values));
    },
  });

  const newProduct = useSelector((state) => state.product);
  const { createdProduct, isSuccess, isError } = newProduct;

  useEffect(() => {
    dispatch(getBrands());
    dispatch(getProductCategories());
    dispatch(getColors());
    formik.values.category = category;
    formik.values.tag = tag;
    formik.values.color = color;
    formik.values.images = proImages;
  }, [category, tag, dispatch, color, proImages, formik.values]);

  useEffect(() => {
    if (isSuccess && createdProduct?.data?.title) {
      toast.success(`${createdProduct?.data?.title}, Add Successfully`);
      formik.resetForm();
      // setColor(null);
      // setTag(null);
      // setCategory(null);
      setTimeout(() => {
        dispatch(resetState());
        // window.location.reload();
      }, 1500);
    }
    if (isError) {
      toast.error("Product Add Failed");
    }
  }, [createdProduct, isSuccess, isError]);

  return (
    <div>
      <div className="flex justify-between">
        <Title level={3}>Add Product</Title>
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
          <Title level={4}>Product Details</Title>
          <form className="mt-4" onSubmit={formik.handleSubmit}>
            {/* name */}
            <div className="mb-4">
              <label htmlFor="blogName" className=" font-bold text-sm">
                Product Title
              </label>
              <input
                onChange={formik.handleChange("title")}
                value={formik.values.title}
                placeholder="Product Title"
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
            {/* Price */}
            <div className="mb-4">
              <label htmlFor="price" className="font-bold text-sm">
                Product Price
              </label>
              <input
                onChange={formik.handleChange("price")}
                value={formik.values.price}
                placeholder="Product Price"
                type="number"
                id="price"
                name="price"
                className="w-full bg-white rounded border border-gray-300 outline-none text-gray-700 py-1 px-3 mt-2 leading-8 transition-colors duration-200 ease-in-out"
              />
              {formik.touched.price && formik.errors.price ? (
                <div className="formik_err text-sm text-red-600">
                  {formik.errors.price}
                </div>
              ) : null}
            </div>
            {/* Quantity */}
            <div className="mb-4">
              <label htmlFor="quantity" className=" font-bold text-sm">
                Product Quantity
              </label>
              <input
                onChange={formik.handleChange("quantity")}
                value={formik.values.quantity}
                placeholder="Product Quantity"
                type="number"
                id="quantity"
                name="quantity"
                className="w-full bg-white rounded border border-gray-300 outline-none text-gray-700 py-1 px-3 mt-2 leading-8 transition-colors duration-200 ease-in-out"
              />
              {formik.touched.quantity && formik.errors.quantity ? (
                <div className="formik_err text-sm text-red-600">
                  {formik.errors.quantity}
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
              </div>
              {formik.touched.description && formik.errors.description ? (
                <div className="formik_err text-sm text-red-600">
                  {formik.errors.description}
                </div>
              ) : null}
            </div>
          </form>
        </div>
        <div className="md:w-[28%]">
          <div className="blog_cat bg-white box_shadow p-[20px] rounded-lg">
            <Title level={4}>Product Category</Title>
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
          <div className="blog_cat mt-4 bg-white box_shadow p-[20px] rounded-lg">
            <Title level={4}>Product Tags</Title>
            <Select
              className="mt-4 h-[40px] w-full capitalize"
              mode="tags"
              allowClear
              placeholder="Tags Mode"
              onChange={(e) => setTag(e)}
              options={tagOptions}
            />
            {formik.touched.tag && formik.errors.tag ? (
              <div className="formik_err text-sm text-red-600">
                {formik.errors.tag}
              </div>
            ) : null}
          </div>
          <div className="blog_cat mt-4 bg-white box_shadow p-[20px] rounded-lg">
            <Title level={4}>Product Brand</Title>
            <Select
              className="mt-4 h-[40px] w-full capitalize"
              onChange={formik.handleChange("brand")}
              value={formik.values.brand}
              options={brandOptions}
            />
            {formik.touched.brand && formik.errors.brand ? (
              <div className="formik_err text-sm text-red-600">
                {formik.errors.brand}
              </div>
            ) : null}
          </div>
          <div className="blog_cat mt-4 bg-white box_shadow p-[20px] rounded-lg">
            <Title level={4}>Product Color</Title>
            <Select
              className="mt-4 h-[40px] w-full capitalize"
              mode="multiple"
              allowClear
              defaultValue={color}
              placeholder="Please select"
              onChange={(e) => setColor(e)}
              options={colorOptions}
            />
            {formik.touched.color && formik.errors.color ? (
              <div className="formik_err text-sm text-red-600">
                {formik.errors.color}
              </div>
            ) : null}
          </div>
          <div className="blog_picture mt-4 bg-white box_shadow p-[20px] rounded-lg">
            <Title level={4}>Product Picture</Title>
            <div className="show_upload_images mt-4 flex flex-wrap gap-[2%] ">
              {proImages?.map((image, i) => (
                <div key={i} className="relative w-[48%]">
                  <button
                    onClick={() => dispatch(imageDelete(image.public_id))}
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
                onDrop={(acceptedFiles) => dispatch(imageUpload(acceptedFiles))}
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

export default AddProduct;
