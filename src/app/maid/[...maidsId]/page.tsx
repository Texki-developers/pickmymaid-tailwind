"use client";

import React, { useEffect, useRef, useState } from "react";
import LeftSection from "@/app/maid/components/Left_Section/LeftSection";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchMaidDataById } from "@/lib/features/maid/maidAction";
import bannerBackground from "@/assets/images/About/banner-background.webp";
import { useParams } from "next/navigation";
import RightSection from "../components/Right_Section/RightSection";
import Image from "next/image";
import verifiedImage from "@/assets/images/verified_image.png";

const MaidPage = () => {
    const params: { maidsId: string } = useParams();
    const contactRef = useRef<HTMLDivElement>(null);
    const { data } = useAppSelector((state) => state.maid.singleMaid);
    const loading = useAppSelector((state) => state.maid.loading);
    const [scroll, setScroll] = useState(0);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (params.maidsId) {
            dispatch(fetchMaidDataById(params.maidsId));
        }
    }, [params?.maidsId]);

    useEffect(() => {
        if (contactRef?.current) {
            const scroll = localStorage.getItem("scroll");
            if (scroll === "contact") {
                localStorage.removeItem("scroll");
                window.scrollTo({
                    top: contactRef.current!.offsetTop,
                    behavior: "smooth",
                });
            } else {
                window.scrollTo(0, 0);
            }
        }
    }, [contactRef, scroll]);

    if (!data?.jobApplication) {
        return null;
    }
    return (
        <>
            <div className="pb-[30px] bg-soft-gray">
                {/* {loading && <Loading />} */}
                <div className="hidden lg:block">
                    <div
                        style={{ backgroundImage: `url(${bannerBackground.src})` }}
                        className={`flex bg-cover align-center items-center bg-center px-[2rem] h-[150px] md:h-[120px]`}>
                        <div className="max-w-[1240px] mx-auto w-full pl-3">
                            <h1 className="text-primary-400 font-semibold text-4xl">Profile - {data?.jobApplication && data?.jobApplication?.name}</h1>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-[2fr_4fr] max-w-[1240px] mx-auto grid-cols-1 gap-[30px] bg-soft-gray px-[1rem]">
                    <LeftSection
                        setScroll={setScroll}
                        data={data?.jobApplication}
                    />
                    <RightSection
                        contactRef={contactRef}
                        data={data?.jobApplication}
                    />
                </div>

                <div
                    className="flex justify-center items-center py-[1rem] sm:py-[2rem] px-[1rem]">
                    <div
                        className="text-description flex items-center gap-[5px]"
                        style={{
                            backgroundColor: "rgba(51,211,153, 0.2)",
                            padding: "1rem",
                            border: "1px solid #34D399",
                            borderRadius: "10px",
                        }}>
                        <div className="w-[2rem] h-[2rem] aspect-square">
                            <Image src={verifiedImage.src} width={25} height={25} alt="verified" />
                        </div>
                        This profile has been created and verified by Pickmymaid Team
                    </div>
                </div>
            </div>
        </>
    );
};

export default MaidPage;
