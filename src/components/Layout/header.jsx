import clsx from "clsx";
import LogoDevRounded from "@mui/icons-material/LogoDevRounded";
import Link from "next/link";
import Dropdown from "../dropdown/dropdown";

const Header = ({ user }) => {
  return (
    <header
      className={clsx(
        "h-[64px]",
        "flex",
        "justify-between",
        "items-center",
        "px-8",
        "bg-[#4e49dc]"
      )}
    >
      <Link
        href={"/"}
        className={clsx(
          "w-[150px]",
          "h-[64px]",
          "flex",
          "items-center",
          "text-white"
        )}
      >
        <LogoDevRounded className={clsx("text-[36px]")} />
        <span className={clsx("text-md", "ml-1", "font-semibold")}>Admin</span>
      </Link>

      <>
        <Dropdown user={user}></Dropdown>
      </>
    </header>
  );
};

export default Header;
