import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Messages from "../components/Messages";

export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Login />;
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden ">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <Header />
        {/* Messages */}
        <Messages />
      </div>

      {/* <button
        onClick={logout}
        className="bg-blue-500 rounded-lg p-5 font-bold animate-pulse"
      >
        Logout
      </button> */}
    </div>
  );
}