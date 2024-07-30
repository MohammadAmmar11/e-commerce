"use client";
import { Button, Input, Text } from "@chakra-ui/react";
import React from "react";

export default function Newsletter() {
  return (
    <>
      <main>
        <div className="relative">
        <div>
          <Text className="font-bold text-gray-700 text-center mt-20 text-4xl">
            Subscribe Our Newsletter
          </Text>
          <Text className=" text-center mt-12">
            Get the latest information and promo offers directly
          </Text>
          <h1 className="absolute top-0 left-0 right-0 bottom-0 z-0 opacity-20 text-9xl -mt-4 font-bold text-gray-500 flex justify-center items-center">
            Newsletter
          </h1>
        </div>
        <div className="text-center border-black mt-20 space-x-2">
          <input className="border-black border py-1 pl-4"  placeholder="Input Email Address" type="text"  />
          <Button className="bg-gray-900 px-4 py-1  text-white font-semibold ">
                  Get Started
                </Button>
         
        </div>
        </div>
      </main>
    </>
  );
}
