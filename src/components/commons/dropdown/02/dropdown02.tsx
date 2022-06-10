import styled from "@emotion/styled";

import { Menu, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { breakPoints } from "../../../../commons/styles/media";
import { useRecoilState } from "recoil";
import { dropdownKey } from "../../../../commons/store";

const Menu01 = styled(Menu)`
  width: 100%;
  height: 186px;
  border: 2px solid #dbdbdb;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  @media ${breakPoints.mobile} {
    width: 32rem;
    height: 136.22px;
  }
`;

const Space01 = styled(Space)`
  width: 16.8rem;
  height: 100%;
  background: #ffffff;
  border: 2px solid #dbdbdb;
  border-radius: 8px;

  div {
    color: black;
    padding-left: 8px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;

    @media ${breakPoints.mobile} {
      color: #999999;
      font-size: 14px;
      line-height: 14px;
      padding-left: 5px;
    }
  }

  @media ${breakPoints.mobile} {
    width: 320px;
    height: 48px;
  }
`;

const MenuItem = styled(Menu.Item)`
  height: 55px;
  text-align: center;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #767676;

  @media ${breakPoints.mobile} {
    color: #999999;
    font-size: 14px;
    line-height: 14px;
  }
`;

const DownOutlinedButton = styled(DownOutlined)`
  @media ${breakPoints.mobile} {
    margin-left: 200px;
  }
`;

export default function Dropdown02() {
  const [select, setSelect] = useRecoilState<string>(dropdownKey);

  const handleClick = ({ key }: any) => {
    setSelect(key);
  };

  const menu = (
    <Menu01 onClick={handleClick}>
      <MenuItem key="서비스문의">서비스 문의</MenuItem>
      <MenuItem key="환불문의">환불 문의</MenuItem>
      <MenuItem key="신고하기">신고하기</MenuItem>
    </Menu01>
  );

  return (
    <Dropdown overlay={menu}>
      <a onClick={(e) => e.preventDefault()}>
        <Space01>
          {/* <div>문의유형 </div> */}
          <div>
            {select}
            <DownOutlinedButton
              style={{ color: "#DBDBDB", paddingLeft: "2.2rem" }}
            />
          </div>
        </Space01>
      </a>
    </Dropdown>
  );
}
