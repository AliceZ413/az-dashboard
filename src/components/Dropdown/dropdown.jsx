import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import clsx from 'clsx';
import styles from './dropdown.module.scss';

import * as Avatar from '@radix-ui/react-avatar';
import React, { useEffect, useState } from 'react';

const Dropdown = ({ user }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Avatar.Root
          className={clsx(
            'flex',
            'w-[45px]',
            'h-[45px]',
            'items-center',
            'justify-center',
            'overflow-hidden',
            'rounded-full',
            'bg-slate-100',
            'cursor-pointer'
          )}
        >
          <Avatar.Image
            className={clsx('')}
            src={user?.avatar}
            alt={user?.name}
          ></Avatar.Image>
          <Avatar.Fallback
            className={clsx('text-violet-500', 'text-[16px]', 'leading-none')}
            delayMs={600}
          >
            {user?.name?.slice(0, 1)}
          </Avatar.Fallback>
        </Avatar.Root>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={clsx(
            'md:w-24',
            'overflow-hidden',
            'border',
            'rounded-md',
            'border-slate-50',
            'bg-white',
            'shadow-md'
          )}
          align='end'
        >
          <div className={clsx('py-2', 'px-3')}>
            {user.name && (
              <p className={clsx('font-medium', 'truncate', 'text-center')}>
                {user.name}
              </p>
            )}
          </div>
          <DropdownMenu.Separator className={clsx('h-[1px]', 'bg-slate-200')} />
          <DropdownMenu.Item
            className={clsx(
              'flex',
              'cursor-pointer',
              'select-none',
              'items-center',
              'justify-center',
              'py-2',
              'px-3',
              'text-sm',
              'text-black',
              'outline-none',
              'focus:bg-slate-50',
              'font-medium'
            )}
          >
            登出
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
