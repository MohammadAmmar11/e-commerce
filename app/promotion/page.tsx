"use client";
import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function Promotion() {
  return (
    <>
      <main className="mx-28">
        <div>
          <Text className="font-bold text-blue-800 text-center mt-20">
            PROMOTIONS
          </Text>
          <Text className="font-bold text-center mt-2 text-3xl">
            Our Promotions Events
          </Text>
        </div>

        <Box className="mt-6">
          <HStack className="space-x-5">
            <div>
              <div className="bg-gray-300 p-2">
                <HStack>
                  <div className="">
                <Text className="font-bold text-2xl pl-4 ">Get upto 60% </Text>
                <Text className="pl-4">For the summer season </Text>
                  </div>
                <Image src="/images/Pro 1.webp" />
                </HStack>
              </div>
              <div className="bg-gray-800 p-10 mt-4 text-center">
                <Text className="font-bold text-3xl text-white">GET 30% Off</Text>
                <Text className="text-white ">USE PROMO CODE</Text>
                <Button className="bg-gray-700 font-semibold py-2 px-4 rounded text-white">DINE WEEKEND SALE</Button>
              </div>
            </div>

            <div className="bg-emerald-200 p-1">
              <Text className="pl-10 pt-3">Flex Sweatshirt</Text>
              <Text className="pl-10">$100.00 <strong>$75.00</strong></Text>
              <Image src="/images/Pro 2.webp" />
            </div>
            <div className="bg-gray-300 ">
              <Text className="pl-10 pt-3">Flex Sweatshirt</Text>
              <Text className="pl-10 ">$225.00 <strong>$190.00</strong></Text>
              <Image src="/images/Pro 3.webp" />
            </div>
          </HStack>
        </Box>
      </main>
    </>
  );
}
