import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { MenuSideBar } from "../constants/menuSydeBar";
import { Link, Route, Routes } from "react-router-dom";
import { routes } from "../constants/routes";
import HeaderComponent from "./Header";
import { NotFoundPage } from "../pages";
const { Sider, Content } = Layout;

function Main() {
  const [collapsed, setCollapsed] = useState(false);

  const handleClick = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Layout style={{ height: "100%" }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={MenuSideBar.map((item) => ({
              ...item,
              label: <Link to={item.path}>{item.label}</Link>,
            }))}
          />
        </Sider>
        <Layout className="custom-layout">
          <HeaderComponent collapsed={collapsed} handleClick={handleClick} />
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Routes>
              {routes.map((item) => (
                <Route path={item.path} element={item.element} key={item.id} />
              ))}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default Main;
