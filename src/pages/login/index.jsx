import LoadingDrip from "@/components/LoadingDrip/loading-drip";
import { useEffect, useState } from "react";
import styles from "./login.module.scss";

const Login = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {isLoading ? <LoadingDrip /> : <></>}
      <div className="grid">

      </div>
    </>
  );
};

export default Login;
