import React, { useEffect } from "react";
import { Button, Drawer, Form, Input, InputNumber, Switch } from "antd";
import { BannerAPI } from "../../api/BannerAPI";
import { urls } from "../../constants/urls";

function ProductDrawer({
  open,
  onClose,
  getProducts,
  editingData,
  setEditingData,
}) {
  const [form] = Form.useForm();

  function postProduct(data) {
    BannerAPI.post(`${urls.banner.post}`, data)
      .then((res) => {
        if (res.status == 201) {
          closeModal();
          getProducts();
        }
      })
      .catch((err) => console.log(err));
  }

  function editProduct(data) {
    BannerAPI.patch(urls.banner.edit(editingData.id), data)
      .then((res) => {
        if (res.status == 200) {
          closeModal();
          getProducts();
        }
      })
      .catch((err) => console.log(err));
  }

  const onSubmit = (data) => {
    editingData ? editProduct(data) : postProduct(data);
  };

  const closeModal = () => {
    onClose();
    form.resetFields();
    setEditingData(null);
  };

  useEffect(() => {
    if (editingData !== null && editingData.id !== null) {
      form.setFieldsValue({ ...editingData, name: editingData.name });
    }
  }, [editingData]);

  return (
    <div>
      {" "}
      <Drawer title="Add Product" onClose={closeModal} open={open}>
        <Form
          form={form}
          onFinish={onSubmit}
          style={{ width: "100%", height: "100%" }}
          layout="vertical"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input banner name!",
              },
            ]}
          >
            <Input placeholder="banner nomini kiriting" />
          </Form.Item>

          <Form.Item
            label="Image"
            name="image"
            rules={[
              {
                required: true,
                message: "Please input image address!",
              },
            ]}
          >
            <Input placeholder="rasm addressini kiriting (URL)" />
          </Form.Item>


          <Form.Item style={{ display: "flex", justifyContent: "center" }}>
            <Button
              style={{ fontSize: "20px", padding: "18px 0px", width: "150px" }}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
}

export default ProductDrawer;
