import {
  DashboardOutlined,
  BranchesOutlined,
  ProductOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

export const MenuSideBar = [
  {
    key: "1",
    icon: <DashboardOutlined />,
    label: "Dashboard",
    path: "/",
  },
  {
    key: "2",
    icon: <PieChartOutlined />,
    label: "Banner",
    path: "banner",
  },
  {
    key: "3",
    icon: <ProductOutlined />,
    label: "Products",
    path: "products",
  },
  {
    key: "4",
    icon: <BranchesOutlined />,
    label: "Category",
    path: "category",
  },
];
