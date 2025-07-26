"use client";
import { Heading, Text, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import Image from "../NextImageWrapper/Image";

export default function TeamCard({
  name,
  details,
  image,
}: {
  name: string;
  details: ReactNode;
  image: string;
}) {
  return (
    <VStack
      w="100%"
      p={{ base: "0.5rem", xl: "1.5rem" }}
      pt={{ base: "1rem", sm: "2rem" }}
      pb={{ base: "1rem", sm: "1.5rem" }}
      border="1px solid #000"
      borderRadius="24px"
      height="100%"
      bg="#fff"
    >
      <Image src={image} alt="name" w="100%" aspectRatio={2 / 1.5} />
      <VStack bg="#ececec" w="100%" p="1rem" flex={1}>
        <Heading
          fontSize={{ base: "1.2rem" }}
          fontWeight={500}
          textAlign="center"
          color="black"
        >
          {name}
        </Heading>
        <Text variant="description" pt="0.5rem">
          {details}
        </Text>
      </VStack>
    </VStack>
  );
}
