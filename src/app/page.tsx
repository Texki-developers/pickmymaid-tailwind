import BannerV2 from "@/components/molecules/Home/HomeSections/BannerV2/BannerV2";
import HowItWorksHome from "@/components/molecules/Home/HomeSections/HowItWorksHome/HowItWorksHome";
import NewsSection from "@/components/molecules/Home/HomeSections/NewsSection/NewsSection";
import TrustAndSafety from "@/components/molecules/Home/HomeSections/TrustAndSafety/TrustAndSafety";
import WhyUAETrust from "@/components/molecules/Home/HomeSections/WhyUAETrust/WhyUAETrust";
import interview from "@/assets/images/interview-maids.png";
import dynamic from "next/dynamic";
const TestimonialSlider = dynamic(
  () =>
    import(
      "@/components/molecules/Home/HomeSections/TestimonialsSlider/TestimonialSlider"
    ),
  {
    ssr: false,
  }
);
const ZigZagSection = dynamic(
  () => import("@/components/atoms/ZigZagSection/ZigZagSection"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <div>
      <BannerV2 />
      <NewsSection />
      <TrustAndSafety />
      <WhyUAETrust />
      <HowItWorksHome />
      <TestimonialSlider />
      <ZigZagSection
        imagePos="left"
        image={interview}
        data={{
          title: "The Ultimate Guide to Find a Maid or Nanny!",
          desc: "Explore our easy resources, including interview questions and tips, to help you find the perfect maid or nanny for your family. We've created a simple, step-by-step guide that covers everything from identifying your specific needs to checking references and qualifications. You'll find helpful advice on how to assess their experience, personality, and reliability. With our expert tips, you can confidently ask the right questions during interviews, ensuring you hire someone trustworthy and capable. Whether you need help with cleaning, childcare, or both, we'll help you make an informed decision and find the best fit for your home and family.",
        }}
      />
    </div>
  );
}
