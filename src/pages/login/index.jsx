import { Button, Form, Input, message } from "antd";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { API } from "../../api";
import { urls } from "../../constants/urls";

function LoginPage() {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const postLogin = (data) => {
    API.post(`${urls.auth.login}`, data)
      .then((res) => {
        if (res.status == 201) {
          setUser(res.data.token);
          navigate("/");
          // setToken(res.data.token);
        }
      })
      .catch((err) => {
        if (err.response.data.error === "Unauthorized") {
          message.error("Login yoki parol xato!");
        }
      });
  };

  const onFinish = (data) => {
    postLogin(data);
  };

  return (
    <div
      className="login-page"
      style={{
        backgroundImage: "URL(/background.jpg)",
        backgroundRepeat: "no-repeat",
        objectFit: "contain",
        backgroundSize: "100%",
        height: "100%",
      }}
    >
      <Form
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        style={{
          padding: "24px",
          gap: "18px",
          justifyContent: "space-between",
          opacity: "0.9",
          boxShadow: "0px 0px 50px 44px rgba(0,0,0,0.21)",
        }}
      >
        <h1 style={{ fontWeight: "500", fontSize: "32px" }}>Login</h1>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            placeholder="username"
            style={{ fontSize: "18px", padding: "6px 12px" }}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            placeholder="password"
            style={{ fontSize: "18px", padding: "6px 12px" }}
          />
        </Form.Item>

        <Form.Item style={{ display: "flex", justifyContent: "center" }}>
          <Button
            style={{
              fontSize: "20px",
              padding: "18px 18px",
              width: "150px",
              borderRadius: "50px",
            }}
            type="primary"
            htmlType="submit"
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginPage;
