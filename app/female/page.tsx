"use client";
import React from "react";
import Header from "../header/page";
import { Box, HStack, Image, Text } from "@chakra-ui/react";
import Footer from "../footer/page";

export default function Female() {
  return (
    <>
      <Header />
      <main className="mx-28">
        <Box className=" font-bold mt-10 ">
          <HStack className="space-x-6">
            <div>
              <div className="bg-gray-300 ">
                <Image
                  src="/images/HeroGirlimg.webp"
                  width="300"
                  height="300"
                  alt="Product no 1"
                />
              </div>
              <Text className="mt-2">Cameryn Sash Tie Dress</Text>
              <Text className="text-gray-600">Dress</Text>
              <Text className="">$155</Text>
            </div>

            <div>
              <div className=" bg-gray-300 ">
                <Image
                  src="/images/Pro 4.webp"
                  width="300"
                  height="300"
                  alt="Product no 2"
                />
              </div>
              <Text className="mt-2">Brushed Bomber</Text>
              <Text className="text-gray-600">Jackets</Text>
              <Text className="">$130</Text>
            </div>
            <div>
              <div className=" bg-gray-300 ">
                <Image
                  src="/images/Pro 5.webp"
                  width="300"
                  height="300"
                  alt="Product no 2"
                />
              </div>
              <Text className="mt-2">Flex Sweatpants</Text>
              <Text className="text-gray-600">Pants</Text>
              <Text className="">$190</Text>
            </div>
            <div>
              <div className=" bg-gray-300 ">
                <Image
                  src="/images/Female 1.webp"
                  width="300"
                  height="300"
                  alt="Product no 2"
                />
              </div>
              <Text className="mt-2">Lite Sweatpants</Text>
              <Text className="text-gray-600">Pants</Text>
              <Text className="">$190</Text>
            </div>
          </HStack>

          <Box className="mt-20">
            <HStack className="space-x-6">
              <div>
                <div className=" bg-gray-300 ">
                  <Image
                    src="/images/Female 2.webp"
                    width="300"
                    height="300"
                    alt="Product no 2"
                  />
                </div>
                <Text className="mt-2">Brushed Raglan Sweatshirt</Text>
                <Text className="text-gray-600">Sweater</Text>
                <Text className="">$243</Text>
              </div>
              <div>
                <div className=" bg-gray-300 ">
                  <Image
                    src="/images/Female 3.webp"
                    width="300"
                    height="300"
                    alt="Product no 2"
                  />
                </div>
                <Text className="mt-2">Imperial Alpaca Hoodie</Text>
                <Text className="text-gray-600">Jackets</Text>
                <Text className="">$127</Text>
              </div>
            </HStack>
          </Box>
        </Box>
      </main>
      <Footer/>
    </>
  );
}
