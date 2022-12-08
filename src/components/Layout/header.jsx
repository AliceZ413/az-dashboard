import clsx from 'clsx';
import Link from 'next/link';
import {
  Avatar,
  Breadcrumbs,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Tooltip,
} from '@mui/material';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { signOut, useSession } from 'next-auth/react';
import styles from './header.module.scss';
import { useState } from 'react';

const Header = ({ fixedNav }) => {
  const { data, status } = useSession();
  const [ anchorEl, setAnchorEl ] = useState(null);
  const open = Boolean(anchorEl);

  const openUserMenu = (event) => {
    setAnchorEl(event?.currentTarget);
  };

  const closeUserMenu = () => {
    setAnchorEl(null);
  };

  const logoutUser = () => {
    signOut();
  };

  return (
    <header
      className={clsx(
        'min-h-[4rem]',
        'box-border',
        'py-1',
        'px-2',
        'text-[#344767]',
        'flex',
        'justify-between',
        'items-center',
        fixedNav
          ? `sticky top-0 bg-white rounded-xl shadow-sm ${styles['header-bg']}`
          : ''
      )}
    >
      <div>
        <div>
          <Breadcrumbs aria-label="breadcrumb">
            <Link href="/">MUI</Link>
            <Link href="/dashboard">MUI</Link>
            <Link href="/dashboard/setting">MUI</Link>
          </Breadcrumbs>
        </div>
        <div>title</div>
      </div>
      <div>
        {/* <SettingsRoundedIcon className={clsx("text-[24px]")} /> */}
        <Tooltip title={data?.user?.name}>
          <IconButton onClick={openUserMenu} sx={{ p: 0 }}>
            <Avatar src={data?.user?.image}></Avatar>
          </IconButton>
        </Tooltip>
        <Menu anchorEl={anchorEl} open={open} onClose={closeUserMenu}>
          <MenuItem>
            <div className="w-[50px] text-center text-[16px]" onClick={logoutUser}>退出</div>
          </MenuItem>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
