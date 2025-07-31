import { AspectRatio, Center, Image } from "@chakra-ui/react";
import newbornCare from "@/assets/icons/Skills/newborn-care.png";
import childCare from "@/assets/icons/Skills/childcare.png";
import cooking from "@/assets/icons/Skills/cook.png";
import assistingInKitchen from "@/assets/icons/Skills/assisting-in-kitchen.png";
import privateTutor from "@/assets/icons/Skills/private-tutor.png";
import privateNurse from "@/assets/icons/Skills/private-nurse.png";
import elderlyCare from "@/assets/icons/Skills/elderly-care.png";
import caregiver from "@/assets/icons/Skills/caregiver.png";
import postpartumCare from "@/assets/icons/Skills/postpartum-care.png";
import privateDriver from "@/assets/icons/Skills/lady-driver.png";
import petCare from "@/assets/icons/Skills/pet-care.png";
import gardening from "@/assets/icons/Skills/gardening.png";
import carWashing from "@/assets/icons/Skills/car-wash.png";
import cleaningHousekeeping from "@/assets/icons/Skills/housekeeping-cleaning.png";

const skillIcons = {
  "Newborn Care": newbornCare,
  "Child Care": childCare,
  Cooking: cooking,
  "Assisting in Kitchen": assistingInKitchen,
  "Private Tutor": privateTutor,
  "Private Nurse": privateNurse,
  "Elderly Care": elderlyCare,
  Caregiver: caregiver,
  "Postpartum Care": postpartumCare,
  "Private Driver": privateDriver,
  "Pet Care": petCare,
  Gardening: gardening,
  "Car Washing": carWashing,
  "Cleaning/Housekeeping": cleaningHousekeeping,
};

const SkillsLanguages = ({ text }: { text: string }) => {
  console.log(skillIcons[text], text);
  return (
    <Center
      fontSize="15px"
      fontWeight="600"
      gap="5px"
      bg="white">
      <AspectRatio
        ratio={1 / 1}
        w={{ base: "1.5rem", sm: "2rem" }}>
        <Image
          src={skillIcons[text]?.src}
          w="100%"
          height="100%"
        />
      </AspectRatio>
      <span>{text}</span>
    </Center>
  );
};

export default SkillsLanguages;
