import { AspectRatio, Avatar, HStack, Text, VStack } from "@chakra-ui/react";
import { Star } from "../../Icons/Icons";

export default function ReviewCard({ text, name, image, title }) {
  return (
    <VStack
      w="100%"
      h="100%"
      borderRadius="5px"
      gap="3rem"
      alignItems="flex-start"
      justifyContent="space-between"
      p="2rem"
      bg="white"
      boxShadow="0px 0px 10px rgba(0,0,0,0.1)"
      userSelect="none"
    >
      <VStack alignItems="flex-start">
        <HStack>
          {[...Array(5)].map((_, index) => (
            <AspectRatio key={index} ratio={1 / 1} w="2rem">
              <Star />
            </AspectRatio>
          ))}
        </HStack>
        <Text variant="description" color="black">
          {text}
        </Text>
      </VStack>
      <HStack justifyContent="space-between" w="100%" mt="auto">
        <VStack gap="0" alignItems="flex-start">
          <Text variant="description" color="black" fontWeight="600">
            {name}
          </Text>
          <Text variant="description">{title}</Text>
        </VStack>
        <Avatar src={image.src} name={name} size="md" />
      </HStack>
    </VStack>
  );
}
