import clsx from "clsx";
import LogoDevRounded from "@mui/icons-material/LogoDevRounded";
import Link from "next/link";
import Dropdown from "../dropdown/dropdown";
import { Breadcrumbs } from "@mui/material";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import styles from "./header.module.scss";

const Header = ({ fixedNav }) => {
  return (
    <header
      className={clsx(
        "min-h-[4rem]",
        "box-border",
        "py-1",
        "px-2",
        "text-[#344767]",
        "flex",
        "justify-between",
        "items-center",
        fixedNav
          ? `sticky top-0 bg-white rounded-xl shadow-sm ${styles["header-bg"]}`
          : ""
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
        <SettingsRoundedIcon className={clsx("text-[24px]")} />
      </div>
    </header>
  );
};

export default Header;
