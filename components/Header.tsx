"use client";

import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Form from 'next/form'
import { PackageIcon, TrolleyIcon } from "@sanity/icons";
import useBasketStore from "@/app/(store)/store";

const Header = () => {
  const user = useUser();
  const itemCount = useBasketStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0))


  return (
    <header className="flex flex-wrap justify-between items-center px-6 py-3 border-b-1 border-green-900">
      <div className="flex w-full flex-wrap justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-900 hover:opacity-50 cursor-pointer mx-auto sm:mx-0">
          eComm
        </Link>
        <Form action="/search" className="w-full sm:w-auto sm:flex-1 mt-2 sm:mx-4 sm:mt-0">
          <input type="text" name="query" placeholder="Search For Products" className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-green-900 focus:ring-opacity-50 border w-full max-w-2xl" />
        </Form>
        4:00:00
        <div className="flex flex-wrap items-center space-x-4 mt-4 sm:mt-0 flex-1 sm:flex-none">
          <Link href="/basket"
            className="flex-1 relative flex justify-center sm:justify-start sm:flex-none item-center space-x-2 bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            <TrolleyIcon className="w-6 h-6" />
            {/* itms count */}
            <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {itemCount}
            </span>
            <span>My Basket</span>
          </Link>
          {/* users */}
          <ClerkLoaded>
            {user?.isSignedIn && (
              <Link href="/orders"
                className="flex-1 relative flex justify-center sm:justify-start sm:flex-none item-center space-x-2 bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                <PackageIcon className="w-6 h-6" />
                <span>My Orders</span>
              </Link>
            )}
            {user?.isSignedIn ? (
              <div className="flex items-center space-x-2">
                <UserButton />
                <div className="hidden sm:block text-xs">
                  <p className="text-gray-400">Welcome Back</p>
                  <p className="font-bold">{user?.user?.fullName}</p>
                </div>

              </div>
            ) : (
              <SignInButton mode="modal" />
            )}
          </ClerkLoaded>
        </div>
      </div>


    </header>
  )
}

export default Header