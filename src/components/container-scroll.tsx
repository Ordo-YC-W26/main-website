"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import AssistantImage from "../../public/assistant.svg";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden -mt-30">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Ordo's Smart Assistant
              </span>
            </h1>
          </>
        }
      >
        <img
          src={AssistantImage.src}
          alt="hero"
          height={1000}
          width={1000}
          className="mx-auto rounded-2xl object-cover h-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
