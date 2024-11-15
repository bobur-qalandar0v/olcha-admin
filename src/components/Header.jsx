import { Layout, Button, Flex, Avatar, Typography } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Logout } from "../pages";
const { Header } = Layout;

function HeaderComponent({ collapsed, handleClick }) {
  return (
    <Header
      style={{
        padding: "0 24px",
      }}
    >
      <Flex align="center" justify="space-between">
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => handleClick()}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
        <Logout>
          <Flex
            align="center"
            justify="center"
            gap={"12px"}
            style={{ cursor: "pointer" }}
          >
            <Avatar size="large" icon={<UserOutlined />} />
            <Typography.Paragraph style={{ margin: 0 }}>
              bobur_qalandar0v
            </Typography.Paragraph>
          </Flex>
        </Logout>
      </Flex>
    </Header>
  );
}

export default HeaderComponent;
