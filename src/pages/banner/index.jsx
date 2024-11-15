import React, { useEffect, useState } from "react";
import { Button, Image, Popconfirm, Space, Table } from "antd";
import { BannerAPI } from "../../api/BannerAPI";
import { urls } from "../../constants/urls";
import ProductDrawer from "./BannerDrawer";
function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingData, setEditingData] = useState(null);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  function getProducts() {
    BannerAPI.get(`${urls.banner.get}`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }

  const handleDelete = (data) => {
    BannerAPI.delete(urls.banner.delete(data.id)).then((res) => {
      if (res.status == 200) {
        getProducts();
      }
    });
  };

  const handleEdit = (data) => {
    showDrawer();
    setEditingData(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      render: (image) => {
        return <Image width={60} height={60} src={image} />;
      },
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            color="primary"
            variant="outlined"
            onClick={() => handleEdit(record)}
          >
            Edit
          </Button>
          <Popconfirm
            title="Delete"
            description="Are you sure to delete this product?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => handleDelete(record)}
          >
            <Button color="danger" variant="outlined">
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Button
        type="primary"
        style={{ marginBottom: 24, float: "right" }}
        onClick={showDrawer}
      >
        + Add Banner
      </Button>

      <Table
        columns={columns}
        dataSource={products}
        rowKey={"id"}
        style={{ height: "100%", overflowY: "scroll" }}
      />
      <ProductDrawer
        onClose={onClose}
        open={open}
        getProducts={getProducts}
        editingData={editingData}
        setEditingData={setEditingData}
      />
    </>
  );
}

export default ProductsPage;
