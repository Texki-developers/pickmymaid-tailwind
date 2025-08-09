"use client";
import dynamic from "next/dynamic";
import React from "react";
const FeaturedMaids = dynamic(() => import("./FeaturedMaids"), { ssr: false });

export default function FeaturedMaidsWrapper() {
  return <FeaturedMaids />;
}
