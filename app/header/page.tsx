"use client";
import { Input } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiSearch } from "react-icons/bi";

export default function Header() {

  
  return (
    <main>
      <nav className="mx-28 bg-white">
        <div className="flex items-center justify-between py-10  ">
          <ul className=" flex items-center space-x-16 font-medium">
            <div className=" ">
              <Image
                src="/images/DineMarket.webp"
                width={150}
                height={200}
                alt=""
              />
            </div>
            <li className=" hover:text-gray-700">
              <Link href="/male">Male</Link>
            </li>
            <li className=" hover:text-gray-700">
              <Link href="/female">Female</Link>
            </li>
            <li className=" hover:text-gray-700">
              <Link href="/kids">Kids</Link>
            </li>
            <li className=" hover:text-gray-700">
              <Link href="/allproducts">All Products</Link>
            </li>
            <li className="border flex items-center bg-white rounded-md pl-3">
              <Link href="">
                {" "}
                <BiSearch />{" "}
              </Link>
              <input
                className="focus:outline-none pl-1 w-72 py-1"
                type="text"
                placeholder="What are you looking for?"
              />
            </li>
            <li className=" hover:text-gray-700">
              <Link href="/courses">Cart</Link>
            </li>
          </ul>
        </div>
      </nav>
    </main>
  );
}
