import { Menu, Dropdown, message, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      userName
      userImageURL
    }
  }
`;

export default function Dropdown01(props) {
  const { data } = useQuery(FETCH_LOGIN_USER);
  const router = useRouter();
  // const onClick = ({ key }) => {
  //     message.info(`Click on item ${key}`);
  //     console.log({ key });
  // };
  const onClickMypage = () => {
    router.push(`/mypage`);
  };


  const [logout] = useMutation(LOGOUT);
  const onClickLogOut = () => {
    logout();
    console.log("로그아웃완료, 기본페이지 이동");
    location.reload();
    // 강제 새로고침 로그아웃시 필요한것
    router.push(`/`);
  };

  const menu = (
    <Menu>
      <Menu.Item onClick={onClickLogOut}>로그아웃</Menu.Item>
      <Menu.Item onClick={onClickMypage}>마이페이지</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <div style={{ width: "1.3rem" }}></div>
          <DownOutlined style={{ color: "#E5E5E5" }} />
        </Space>
      </a>
    </Dropdown>
  );
}
