import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import styles from "./asider.module.scss";

export const navigationMenus = [
  {
    title: "面板",
    href: "/",
    icon: DashboardRoundedIcon,
  },
  {
    title: "设置",
    href: "/dashboard/setting",
    icon: TuneRoundedIcon,
  },
];

const Aside = () => {
  const path = usePathname();

  return (
    <aside className={clsx("flex", "flex-col", "bg-white", "p-4", "shadow-md")}>
      <nav className={clsx("grid", "items-start", "gap-2")}>
        {navigationMenus.map((item, index) => {
          return (
            <Link key={index} href={item.href}>
              <div
                className={clsx(
                  "group",
                  "flex",
                  "items-center",
                  "rounded-md",
                  "px-5",
                  "py-3",
                  "text-slate-600",
                  "hover:bg-[#4e49dc]",
                  "hover:text-white"
                )}
              >
                <item.icon className={clsx("text-[24px]")} />
                <span className={clsx("text-[16px]", "ml-2")}>
                  {item.title}
                </span>
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Aside;

// export function DashboardNav() {
//   const path = usePathname()
//   return (
//     <nav className="grid items-start gap-2">
//       {navigationItems.map((navigationItem, index) => (
//         <Link
//           key={index}
//           href={navigationItem.disabled ? "/" : navigationItem.href}
//         >
//           <span
//             className={clsx(
//               "group flex items-center rounded-md px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100",
//               path === navigationItem.href ? "bg-slate-200" : "transparent",
//               navigationItem.disabled && "cursor-not-allowed opacity-50"
//             )}
//           >
//             <navigationItem.icon className="mr-2 h-4 w-4" />
//             <span>{navigationItem.title}</span>
//           </span>
//         </Link>
//       ))}
//     </nav>
//   )
// }
