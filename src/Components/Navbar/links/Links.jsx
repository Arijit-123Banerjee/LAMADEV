"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Links = () => {
  const pathName = usePathname();
  const Islogin = false;
  const isAdmin = true;

  const Links = [
    { Title: "Homepage", path: "/" },
    { Title: "About", path: "/about" },
    { Title: "Contact", path: "/contact" },
    { Title: "Blog", path: "/blog" },
  ];

  return (
    <div>
      <ul class="flex flex-col  font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 items-center">
        {Links.map((link) => (
          <li>
            <Link
              className={`block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-700 ${
                pathName == link.path
                  ? "dark:text-[#2c73fd]"
                  : "dark:text-white"
              } dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
              href={link.path}
            >
              {link.Title}
            </Link>
          </li>
        ))}
        {Islogin ? (
          isAdmin && (
            <>
              <Link href={"/admin"} className="text-white">
                Admin
              </Link>{" "}
              <button
                type="button"
                class="text-white bg-[#2c73fd] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Logout
              </button>
            </>
          )
        ) : (
          <Link href={"/login"}>
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Links;
