import React, { useEffect, useState } from "react";
import { Button, Image, Popconfirm, Space, Table } from "antd";
import { API } from "../../api";
import { urls } from "../../constants/urls";
import ProductDrawer from "./components/ProductDrawer";
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
    API.get(`${urls.products.get}`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }

  const handleDelete = (data) => {
    API.delete(urls.products.delete(data.id)).then((res) => {
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
      title: "Name",
      dataIndex: "name",
      key: 1,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: 2,
    },
    {
      title: "Image",
      dataIndex: "image",
      key: 3,
      render: (image) => {
        return <Image width={60} height={60} src={image} />;
      },
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
        + Add Product
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
