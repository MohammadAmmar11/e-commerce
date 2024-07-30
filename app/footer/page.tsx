"use client";
import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagram } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoGithub } from "react-icons/bi";

export default function Footer() {
  return (
    <>
      <main className="mx-28 mt-60">
        <Flex className="">
          <div>
            <Image src="/images/DineMarket.webp" alt="Dine Market" width="" />
            <div>
              <p className="mt-4 font-light">
                Small, artisan label that offers a <br /> thoughtfully curated
                collection of <br /> high quality everyday essentials <br />{" "}
                made.
              </p>
            </div>
          </div>

          <div className="ml-28 mt-4">
            <ul className="">
              <li className="font-bold text-gray-500">Company</li>
              <li className="mt-3">About</li>
              <li className="mt-3">Terms of Use</li>
              <li className="mt-3">Privacy Policy</li>
              <li className="mt-3">How it works</li>
              <li className="mt-3">Contact Us</li>
            </ul>
          </div>

          <div className="ml-24 mt-4 ">
            <ul>
              <li className="font-bold text-gray-500">Support</li>
              <li className="mt-3">Support Center</li>
              <li className="mt-3">24h Service</li>
              <li className="mt-3">Quick Chat</li>
            </ul>
          </div>
          <div className="ml-24 mt-4">
            <ul>
              <li className="font-bold text-gray-500">Contact</li>
              <li className="mt-3">Whatsapp</li>
              <li className="mt-3">Support 24h</li>
            </ul>
          </div>
        </Flex>
        <Box className="bg-gray-300 mt-10 py-3">
            <Box className="ml-4">
              <HStack>
                {" "}
                <AiOutlineCopyrightCircle /> <Text className="font-light"> 2023 DineMarket </Text>
              </HStack>
            </Box>
            <Box className="flex justify-end mr-10 -mt-5 ">
              <HStack>
            <FaFacebookF className=" "size={20} />
            <BiLogoInstagram className="" size={20}/>
            <AiOutlineTwitter size={20}/>
            <BiLogoGithub size={20}/>
              </HStack>
            </Box>
         
        </Box>
      </main>
    </>
  );
}
