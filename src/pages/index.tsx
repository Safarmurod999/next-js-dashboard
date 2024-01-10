import { Inter } from "next/font/google";
import Dashboard from "./dashboard/index";
import Login from "@/components/Login/Login";
import { useSession} from "next-auth/react";
import scss from "./Home.module.scss";
import SignIn from "./auth/signin/SignIn";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <main className={`${scss.main} ${inter.className}`}>
        {session && <Dashboard />}
        {!session && <SignIn />}
      </main>
    </>
  );
}
