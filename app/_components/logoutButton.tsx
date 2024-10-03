"use client"

import { signOut } from "next-auth/react";

const LogoutButton = () => {
    return (
        <button onClick={() => signOut()} className="text-sm text-gray-600 hover:text-gray-900">
          Logout
        </button>
      );
}
 
export default LogoutButton;
