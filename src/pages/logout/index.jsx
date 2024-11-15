import { Popconfirm } from "antd";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Logout({ children }) {
  const navigate = useNavigate();
  const { setIsAuth } = useContext(AuthContext);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
    setIsAuth(false);
  };

  return (
    <Popconfirm
      placement="bottomRight"
      title="LogOut"
      description="Are you sure to logout?"
      onConfirm={logout}
      okText="Yes"
      cancelText="No"
    >
      {children}
    </Popconfirm>
  );
}

export default Logout;
