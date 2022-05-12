import { Menu, Dropdown, message, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';


export default function Dropdown01(){

    const onClick = ({ key }) => {
        message.info(`Click on item ${key}`);
        console.log({key})
    };


    const menu = (
    <Menu>
      <Menu.Item>프로젝트 1</Menu.Item>
      <Menu.Item>프로젝트 2</Menu.Item>
      <Menu.Item>프로젝트 3</Menu.Item>
    </Menu>
  );


    return(
        <Dropdown overlay={menu}>
            <a onClick={e => e.preventDefault()}>
            <Space>
                <div style={{width: "120px"}}></div><DownOutlined style={{color:"#DBDBDB"}} />
            </Space>
            </a>
        </Dropdown>
    )
}