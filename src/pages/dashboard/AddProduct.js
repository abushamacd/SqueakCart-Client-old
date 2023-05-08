import React, { useState } from "react";
import { Typography, Select, Upload } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, {
  modules,
  formats,
} from "../../components/EditorToolbar";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import ImgCrop from "antd-img-crop";

const AddProduct = () => {
  // date
  dayjs.extend(customParseFormat);
  const { Title } = Typography;
  const [value, setValue] = useState("");
  // category
  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      label: i.toString(36) + i,
      value: i.toString(36) + i,
    });
  }
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  // blog picture
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
    <div>
      <div className="flex justify-between">
        <Title level={3}>Add Product</Title>
        <button className="first_button rounded-md px-5 py-2 text-sm text-white uppercase">
          Save
        </button>
      </div>
      <div className="md:flex justify-between mt-[20px] blog">
        <div className="bg-white box_shadow p-[20px] rounded-lg  md:w-[70%] md:mb-0 mb-[20px] ">
          <Title level={4}>Product Details</Title>
          <form className="mt-4" action="">
            {/* name */}
            <div className="mb-4">
              <label htmlFor="blogName" className=" font-bold text-sm">
                Product Title
              </label>
              <input
                placeholder="Product Title"
                type="text"
                id="blogName"
                name="blogName"
                className="w-full bg-white rounded border border-gray-300 outline-none text-gray-700 py-1 px-3 mt-2 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            {/* Price */}
            <div className="mb-4">
              <label htmlFor="productPrice" className=" font-bold text-sm">
                Product Price
              </label>
              <input
                placeholder="Product Price"
                type="number"
                id="productPrice"
                name="productPrice"
                className="w-full bg-white rounded border border-gray-300 outline-none text-gray-700 py-1 px-3 mt-2 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            {/* Quantity */}
            <div className="mb-4">
              <label htmlFor="productPrice" className=" font-bold text-sm">
                Product Quantity
              </label>
              <input
                placeholder="Product Quantity"
                type="number"
                id="productPrice"
                name="productPrice"
                className="w-full bg-white rounded border border-gray-300 outline-none text-gray-700 py-1 px-3 mt-2 leading-8 transition-colors duration-200 ease-in-out"
              />
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
                  value={value}
                  onChange={setValue}
                  placeholder={"Write something..."}
                  modules={modules("t1")}
                  formats={formats}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="md:w-[28%]">
          <div className="blog_cat bg-white box_shadow p-[20px] rounded-lg">
            <Title level={4}>Product Category</Title>
            <Select
              className="mt-4 h-[40px]"
              mode="multiple"
              allowClear
              style={{
                width: "100%",
              }}
              placeholder="Please select"
              defaultValue={[]}
              onChange={handleChange}
              options={options}
            />
          </div>
          <div className="blog_cat mt-4 bg-white box_shadow p-[20px] rounded-lg">
            <Title level={4}>Product Brand</Title>
            <Select
              className="mt-4 h-[40px]"
              mode="multiple"
              allowClear
              style={{
                width: "100%",
              }}
              placeholder="Please select"
              defaultValue={[]}
              onChange={handleChange}
              options={options}
            />
          </div>
          <div className="blog_cat mt-4 bg-white box_shadow p-[20px] rounded-lg">
            <Title level={4}>Product Color</Title>
            <Select
              className="mt-4 h-[40px]"
              mode="multiple"
              allowClear
              style={{
                width: "100%",
              }}
              placeholder="Please select"
              defaultValue={[]}
              onChange={handleChange}
              options={options}
            />
          </div>
          <div className="blog_picture mt-4 bg-white box_shadow p-[20px] rounded-lg">
            <Title level={4}>Product Picture</Title>
            <div className="mt-4">
              <ImgCrop rotationSlider>
                <Upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  fileList={fileList}
                  onChange={onChange}
                  onPreview={onPreview}
                >
                  {fileList.length < 5 && "+ Upload"}
                </Upload>
              </ImgCrop>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
