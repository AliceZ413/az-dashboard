import LoadingDrip from "@/components/LoadingDrip/loading-drip";
import { useEffect, useState } from "react";
import styles from "./login.module.scss";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const [isLoading, setLoading] = useState(true);
  const { data: session } = useSession();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (session) {
    return (
      <>
        <div>Signed in as {session.user.email}</div>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      {/* {isLoading ? <LoadingDrip /> : <></>} */}
      <div>Not signed in</div>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default Login;

// import { useSession, signIn, signOut } from "next-auth/react"

// export default function Component() {
//   const { data: session } = useSession()
//   if (session) {
//     return (
//       <>
//         Signed in as {session.user.email} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     )
//   }
//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   )
// }
