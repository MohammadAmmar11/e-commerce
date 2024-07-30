"use client";
import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BsCart2 } from "react-icons/bs";

export default function Hero() {
  return (
    <>
      <main className="mx-28">
        <Box>
          <HStack>
            <Box>
              <div>
                <Button className="bg-blue-100 px-2 py-1 -mt-10 text-blue-400 font-bold  rounded">
                  Sale 70%
                </Button>
              </div>
              <div className="">
                <Text className="font-bold text-6xl mt-4">
                  An Industrial <br />
                  Take on Streetwear
                </Text>
                <Text className="mt-6">
                  Anyone can beat you but no one can beat your outfit as long as
                  you wear Dine outfits.
                </Text>
              </div>
              <div>
                <Button className=" bg-gray-900 text-sky-100 px-4 py-2 mt-4">
                  <BsCart2 /> &nbsp; Start&nbsp;Shopping
                </Button>
              </div>
              <div className="mt-8">
                <HStack className="space-x-2">
                  <Image
                    src="/images/Bazaar.webp"
                    width=""
                    alt="BAZAAR"
                    height=""
                  />
                  <Image
                    src="/images/Bustle.webp"
                    width=""
                    alt="BUSTLE"
                    height=""
                  />
                  <Image
                    src="/images/instyle.webp"
                    width=""
                    alt="INSTYLE"
                    height=""
                  />
                  <Image
                    src="/images/versace.webp"
                    width=""
                    alt="VERSACE"
                    height=""
                  />
                </HStack>
              </div>
            </Box>
            <div className="">
              <Image
                src="/images/HeroGirlimg.webp"
                alt=""
                width="500"
                height="500"
                className="bg-pink-100 rounded-full mx-40 mt-10"
              />
            </div>
          </HStack>
        </Box>
      </main>
    </>
  );
}
