import { Layout, Menu } from 'antd';
import React, { PropsWithChildren, useState } from 'react';
import clsx from 'clsx';
import { CollapseType } from 'antd/es/layout/Sider';
import { IconDrone } from '@tabler/icons';
import styles from './BaseLayout.module.scss';

const routers = [
  {
    id: '1',
    icon: 'dashboard',
    name: 'Dashboard',
    zhName: '仪表盘',
    route: '/dashboard',
  },
  {
    id: '2',
    breadcrumbParentId: '1',
    name: 'Users',
    zhName: '用户管理',
    icon: 'user',
    route: '/user',
  },
  {
    id: '7',
    breadcrumbParentId: '1',
    name: 'Posts',
    zhName: '文章管理',
    icon: 'shopping-cart',
    route: '/post',
  },
  {
    id: '21',
    menuParentId: '-1',
    breadcrumbParentId: '2',
    name: 'User Detail',
    zhName: '用户详情',
    route: '/user/:id',
  },
  {
    id: '5',
    breadcrumbParentId: '1',
    name: 'Charts',
    zhName: 'Charts',
    icon: 'code-o',
  },
  {
    id: '51',
    breadcrumbParentId: '5',
    menuParentId: '5',
    name: 'ECharts',
    zhName: 'ECharts',
    icon: 'line-chart',
    route: '/chart/ECharts',
  },
  {
    id: '52',
    breadcrumbParentId: '5',
    menuParentId: '5',
    name: 'HighCharts',
    zhName: 'HighCharts',
    icon: 'bar-chart',
    route: '/chart/highCharts',
  },
  {
    id: '53',
    breadcrumbParentId: '5',
    menuParentId: '5',
    name: 'Rechartst',
    zhName: 'Rechartst',
    icon: 'area-chart',
    route: '/chart/Recharts',
  },
];

const items = [{ key: '1', label: 'Option 1', title: 'Option title 1' }];

export default function BaseLayout({ children }: PropsWithChildren) {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapseChange: (collapsed: boolean, type: CollapseType) => void = (
    collapsed,
    type
  ) => {
    setCollapsed(collapsed);
  };
  return (
    <>
      <Layout>
        <Layout.Sider
          className={styles.sider}
          theme='dark'
          breakpoint='lg'
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapseChange}
        >
          <div className='h-[60px] flex justify-center bg-[#1f1f1f]'>
            <div className='flex items-center justify-center text-white'>
              <IconDrone strokeWidth={2.5} size={26}></IconDrone>
              {!collapsed && <h1>Next Admin</h1>}
            </div>
          </div>
          <Menu
            className='bg-[#1f1f1f]'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode={'inline'}
            theme={'dark'}
            inlineCollapsed={collapsed}
            items={items}
          ></Menu>
        </Layout.Sider>
        <Layout className='h-screen w-[calc(100%_-_200px)] overflow-x-hidden overflow-y-auto'>
          <Layout.Header>Header</Layout.Header>
          <Layout.Content>{children}</Layout.Content>
          <Layout.Footer>Footer</Layout.Footer>
        </Layout>
      </Layout>
    </>
  );
}
