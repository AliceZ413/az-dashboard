import { Layout } from 'antd';
import React, { PropsWithChildren, useState } from 'react';
import clsx from 'clsx';
import { CollapseType } from 'antd/es/layout/Sider';
import { IconDrone } from '@tabler/icons';

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
          breakpoint='lg'
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapseChange}
        >
          <div className='h-[60px] flex justify-center'>
            <div className='flex items-center justify-center text-white'>
              <IconDrone strokeWidth={2.5} size={26}></IconDrone>
              {!collapsed && <h1>Next Admin</h1>}
            </div>
          </div>
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
