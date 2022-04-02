import { useMoralis } from "react-moralis";
import Image from "next/image";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";
function Header() {
  const { user, logout } = useMoralis();
  return (
    <div className="sticky top-0 p-5 z-50 bg-black shadow-sm text-pink-500 border-b-2 border-pink-700">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            src="https://links.papareact.com/3pi"
            layout="fill"
            /*  objectFit="cover" */
            className="rounded-full object-cover"
          />
        </div>
        <div className="col-span-4 text-left lg:text-center ">
          <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
            {/* Avatar */}
            <Avatar logoutOnPress />
          </div>
          {/* Welcome message */}
          <h1 className="text-3xl">Welcome to the PAPAFAM Metaverse</h1>
          {/* username */}
          <h2 className="text-5xl font-bold truncate ">{user.getUsername()}</h2>

          {/* change username component */}
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
