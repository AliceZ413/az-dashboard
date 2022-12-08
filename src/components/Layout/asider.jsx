import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import styles from './asider.module.scss';

export const navigationMenus = [
  {
    title: '面板',
    href: '/',
    icon: DashboardRoundedIcon,
  },
  {
    title: '设置',
    href: '/dashboard/setting',
    icon: TuneRoundedIcon,
  },
];

const Aside = () => {
  const path = usePathname();

  return (
    <aside className="flex">
      <div className="w-[250px] flex-1 m-4 rounded-xl bg-gradient-to-bl from-[#42424a] to-[#191919]">
        <nav className=""></nav>
      </div>
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
