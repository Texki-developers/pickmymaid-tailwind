import VStack from "@/components/ui/VStack";
import Link from "next/link";

export default function ContactDetailsCard({
  title,
  link,
  text,
}: {
  title: string;
  link: string;
  text: string;
}) {
  return (
    <VStack className="items-start max-w-[100%] sm:max-w-[15rem] border-l-[2px] border-[rgba(0,0,0,0.1)] pl-4">
      <h3 className="heading-smaller">{title}</h3>
      <Link href={link} target="_blank" className="text-description">
        {text?.split("<br>").map((content, index) => {
          return (
            <span key={content}>
              {content}
              {index !== text?.split("<br/>").length && <br />}
            </span>
          );
        })}
      </Link>
    </VStack>
    // <VStack
    //   maxW={{ base: '100%', sm: '15rem' }}
    //   alignItems='flex-start'
    //   borderLeft='2px solid rgba(0,0,0,0.1)'
    //   pl={4}
    // >
    //   <Heading variant='smaller'>{title}</Heading>
    //   <Link href={link} target='_blank'>
    //     <Text variant='description'>
    //       {text?.split('<br>').map((content, index) => {
    //         return (
    //           <span>
    //             {content}
    //             {index !== text?.split('<br/>').length && <br />}
    //           </span>
    //         );
    //       })}
    //     </Text>
    //   </Link>
    // </VStack>
  );
}
