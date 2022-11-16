import clsx from "clsx";
import LogoDevRounded from "@mui/icons-material/LogoDevRounded";
import Link from "next/link";
import Dropdown from "../dropdown/dropdown";

const Header = ({ user }) => {
  return (
    <header
      className={clsx(
        "h-[60px]",
        "flex",
        "justify-between",
        "items-center",
        "rounded-lg",
        "shadow",
        "px-8"
      )}
    >
      <Link
        href={"/"}
        className={clsx("w-[200px]", "h-[60px]", "flex", "items-center")}
      >
        <LogoDevRounded />
        <span className={clsx("text-lg", "font-bold")}>Admin</span>
      </Link>

      <>
        <Dropdown user={user}></Dropdown>
      </>
    </header>
  );
};

export default Header;
