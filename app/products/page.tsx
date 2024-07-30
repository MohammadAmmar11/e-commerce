"use client";
import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function Products() {
  return (
    <>
      <main>
        <div>
          <Text className="font-bold text-blue-800 text-center mt-20">
            PRODUCTS
          </Text>
          <Text className="font-bold text-center mt-2 text-3xl">
            Check What We Have
          </Text>
        </div>

        <Box className="mx-28 font-bold mt-10 ">
          <HStack className="space-x-6">
            <div>
              <div className="bg-sky-200">
                <Image
                  src="/images/HeroGirlimg.webp"
                  height="400"
                  width="400"
                  alt="Product no 1"
                />
              </div>
              <Text className="mt-2">Cameryn Sash Tie Dress</Text>
              <Text className="">$168</Text>
            </div>

            <div>
              <div className="bg-blue-200">
                <Image
                  src="/images/Pro 4.webp"
                  height="400"
                  width="400"
                  alt="Product no 2"
                />
              </div>
              <Text className="mt-2">Brushed Bomber</Text>
              <Text>$123</Text>
            </div>
            <div>
              <div className="bg-blue-200">
                <Image
                  src="/images/Pro 5.webp"
                  height="400"
                  width="400"
                  alt="Product no 3"
                />
              </div>
              <Text className="mt-2">Flex Sweatpants</Text>
              <Text>$187</Text>
            </div>
          </HStack>
        </Box>

        <div className="px-1 text-gray-700 mx-28">

            {/* top */}
            <div className="flex justify-start md:justify-end text-4xl md:text-5xl font-bold py-4 mt-4">
                <h6 className="max-w-[27rem]">Unique and Authentic Vintage Designer Jewellery</h6>
            </div>

            {/* bottom */}
            <div className="flex flex-col md:flex-row justify-between py-4 mt-2 gap-5">
                {/* left */}

                <div className="relative basis-1/2  gap-6 lg:gap-10 grid grid-cols-2 grid-rows-2">
                    <div className="absolute -z-50 text-slate-200 inset-0">
                        <h6 className="text-5xl md:text-7xl lg:text-[7.3rem] leading-[5.9rem] font-bold">Different from others</h6>
                    </div>
                    <div className="max-w-[13rem] space-y-2">
                        <h6 className="font-semibold text-xl">Using Good Quality Materials</h6>
                        <p className="text-lg leading-5">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                    <div className="max-w-[13rem] space-y-2">
                        <h6 className="font-semibold text-xl">Using Good Quality Materials</h6>
                        <p className="text-lg leading-5">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                    <div className="max-w-[13rem] space-y-2">
                        <h6 className="font-semibold text-xl">Using Good Quality Materials</h6>
                        <p className="text-lg leading-5">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                    <div className="max-w-[13rem] space-y-2">
                        <h6 className="font-semibold text-xl">Using Good Quality Materials</h6>
                        <p className="text-lg leading-5">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                </div>




                {/* right */}
                <div className="flex flex-col lg:flex-row basis-1/2">
                    <div className="w-full px-4 lg:px-0 lg:w-80">
                        <Image width={500} height={350} src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature.1118a2f3.png&w=384&q=75"} alt={"Designer Jewellery"} />
                    </div>
                    <div className="space-y-6 md:space-y-4 p-6">
                        <p style={{wordSpacing:"0.8rem"}} className="h-[90%] lg:max-w-[15rem]">
                            This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
                        </p>
                        <button className="text-white bg-gray-900 rounded-md py-2 px-6">See All Products</button>
                    </div>
                </div>



            </div>
        </div>

        {/* <div className="mx-28">
          <Text className="font-bold text-5xl  text-gray-800 ml-96 pl-60 mt-20">
            Unique and <br /> Authentic Vintage <br /> Designer Jewellery
          </Text>
        </div>

        <Box>
          <Flex className="mx-28 space-x-6">
            <Box className="mt-20">

            
              
              <Box className="">
                <Text className="font-bold">Using Good Quality Materials</Text>
                <Text className="mt-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </Text>
             
              </Box>
              <Box className="mt-10">
                <Text className="font-bold">Using Good Quality Materials</Text>
                <Text className="mt-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </Text>
              </Box>
            </Box>

            <Box className="mt-20  ">
              <Box className="">
                <Text className="font-bold">Using Good Quality Materials</Text>
                <Text className="mt-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </Text>
              </Box>
              <Box className="mt-10">
                <Text className="font-bold">Using Good Quality Materials</Text>
                <Text className="mt-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </Text>
              </Box>
            </Box>

            <Box>
              <HStack>
                <Image
                  src="/images/Pro 6.webp"
                  width="350"
                  height="350"
                  className="pl-52 mt-10"
                />

                <Text className="ml-10 font-light mt-2">
                  This piece is ethically crafted in our small family-owned
                  workshop in Peru with unmatched attention to detail and care.
                  The Natural color is the actual natural color of the fiber,
                  undyed and 100% traceable.
                  <div>
                    <Button className="font-semibold bg-gray-800 px-4 py-2 mt-2 text-white">
                      See All Products
                    </Button>
                  </div>
                </Text>
              </HStack>
            </Box>
          </Flex>
        </Box> */}
      </main>
    </>
  );
}
