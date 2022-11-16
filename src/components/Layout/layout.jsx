import styles from "./layout.module.css";
import { Toaster } from "react-hot-toast";
import clsx from "clsx";

import Header from "./header";
import Aside from "./asider";

const name = "Your Name";
export const siteTitle = "Next.js Sample Website";

const user = {
  name: "AliceZ413",
  avatar: "",
  email: "491736271@qq.com",
};

const Layout = ({ children, home }) => {
  return (
    <div
      className={clsx(
        styles.container,
        "min-h-screen",
        "space-y-6",
        "flex",
        "flex-col"
      )}
    >
      <Header user={user} />
      <div className={clsx("grid", "grid-cols-[200px_1fr]", "gap-4")}>
        <Aside />
        <main
          className={clsx(
            "flex-1",
            "flex",
            "w-full",
            "flex-col",
            "overflow-y-auto",
            "rounded-lg",
            "shadow",
            "px-8",
            "pb-8"
          )}
        >
          {children}
          <Toaster position="top-right" />
        </main>
      </div>
    </div>
  );
};

export default Layout;
