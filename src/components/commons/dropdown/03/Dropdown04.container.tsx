import { Menu, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

export default function Dropdown01() {
  const router = useRouter();

  const onClickMypage = () => {
    router.push(`/mypage`);
  };

  const [logout] = useMutation(LOGOUT);
  const onClickLogOut = () => {
    logout();
    router.push(`/`);
    location.reload();
  };

  const menu = (
    <Menu style={{ borderRadius: "8px" }}>
      <Menu.Item onClick={onClickLogOut}>로그아웃</Menu.Item>
      <Menu.Item onClick={onClickMypage}>마이페이지</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <div style={{ width: "1rem" }}></div>
          <DownOutlined style={{ color: "#E5E5E5" }} />
        </Space>
      </a>
    </Dropdown>
  );
}
