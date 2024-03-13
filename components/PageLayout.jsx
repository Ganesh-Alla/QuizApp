"use client"
import React, { useEffect, useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, theme,Col,Statistic} from 'antd';
const { Countdown } = Statistic;

const { Header, Content, Sider } = Layout;

// const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
//   const key = String(index + 1);
//   return {
//     key: `sub${key}`,
//     icon: React.createElement(icon),
//     label: `subnav ${key}`,
//     children: new Array(4).fill(null).map((_, j) => {
//       const subKey = index * 4 + j + 1;
//       return {
//         key: subKey,
//         label: `option${subKey}`,
//       };
//     }),
//   };
// });

const PageLayout = ({session}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [time, setTime] = useState(false)

  useEffect(() => {
    setTime(parseInt(session))
  }, [session])

  const onFinish = () => {
    alert("finished")
  };
  return (
    <Layout>
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className='flex justify-between text-white w-full'>
      <div >QUIZ TIME</div>
      <div className='flex items-center'><Countdown valueStyle={{ color: 'white' }} value={time} onFinish={onFinish} suppressHydrationWarning /></div>
  </div>
    </Header>
    <Layout>
      <Sider
        width={200}
        style={{
          background: colorBgContainer,
        }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{
            height: '100%',
            borderRight: 0,
          }}
          // items={items2}
        />
      </Sider>
      <Layout
        style={{
          padding: '0 24px 24px',
        }}
      >
        {/* <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Questions
        </Content>
      </Layout>
    </Layout>
  </Layout>
  )
}

export default PageLayout