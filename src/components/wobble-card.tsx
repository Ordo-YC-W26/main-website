"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import IntroImage from "../../public/Intro.svg";
import ScreeningImage from "../../public/Screening.svg";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-sky-100 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-slate-700">
          All Your Work, One Unified Space
          </h2>
          <p className="mt-4 text-left  text-base/6 text-slate-600">
          Ordo brings it all together in a single, streamlined interface so you can manage everything effortlessly without switching between apps.
          </p>
        </div>
        <img
          src={ScreeningImage.src}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[30%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-slate-700">
        Focus on Creating Value.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-slate-600">
        Stop juggling 6 - 7 software tools, manage everything in one platform, Becuase value isn’t made, it’s saved.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-sky-200 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-slate-500">
            Your Always-On AI Assistant
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-slate-600">
          Stay on top of everything From handling maintenance, tenant requests to generating accounting reports and sourcing vendors, just ask, and it gets done fast, accurate, and effortless.
          </p>
        </div>
        <img
          src={IntroImage.src}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[0%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
