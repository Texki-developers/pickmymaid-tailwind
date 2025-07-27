"use client";
import VStack from "@/components/ui/VStack";
import { Star } from "../../../../../legacy/components/atoms/Icons/Icons";
import HStack from "@/components/ui/HStack";

export default function ReviewCard({ text, name, image, title }: any) {
  return (
    <VStack className="w-full h-full rounded-[5px] gap-[3rem] items-start justify-between p-[2rem] bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.1)] user-select-none">
      <VStack className="items-start">
        <HStack>
          {[...Array(5)].map((_, index) => (
            <div key={index} className="aspect-[1/1] w-[1.5rem]">
              <Star key={index} />
            </div>
          ))}
        </HStack>
        <p className="text-description text-black">{text}</p>
      </VStack>
      <HStack className="justify-between w-full mt-auto">
        <VStack className="gap-0 items-start">
          <p className="text-description text-black font-[600]">{name}</p>
          <p className="text-description">{title}</p>
        </VStack>
        <div className="aspect-[1/1] w-[3rem] h-[3rem] rounded-full overflow-hidden">
          <img
            src={image.src}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </HStack>
    </VStack>
    // <VStack
    //   w="100%"
    //   h="100%"
    //   borderRadius="5px"
    //   gap="3rem"
    //   alignItems="flex-start"
    //   justifyContent="space-between"
    //   p="2rem"
    //   bg="white"
    //   boxShadow="0px 0px 10px rgba(0,0,0,0.1)"
    //   userSelect="none"
    // >
    //   <VStack alignItems="flex-start">
    //     <HStack>
    //       {[...Array(5)].map((_, index) => (
    //         <AspectRatio key={index} ratio={1 / 1} w="2rem">
    //           <Star />
    //         </AspectRatio>
    //       ))}
    //     </HStack>
    //     <Text variant="description" color="black">
    //       {text}
    //     </Text>
    //   </VStack>
    //   <HStack justifyContent="space-between" w="100%" mt="auto">
    //     <VStack gap="0" alignItems="flex-start">
    //       <Text variant="description" color="black" fontWeight="600">
    //         {name}
    //       </Text>
    //       <Text variant="description">{title}</Text>
    //     </VStack>
    //     <Avatar src={image.src} name={name} size="md" />
    //   </HStack>
    // </VStack>
  );
}
