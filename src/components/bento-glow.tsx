"use client";

import { IconBox, IconLock, IconSearch, IconSettings, IconSparkles } from "@tabler/icons-react";
import { GlowingEffect } from "./ui/glowing-effect";

export function BentoGridGlow() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<IconBox className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Listings made effortless"
        description="Post, manage, and update listings in seconds. Credits keep things fair, and bulk tools keep power sellers happy"
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<IconSettings className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Your settings, your rules. Your agents."
        description="From notifications to workflow automations, configure your Muvius experience exactly how you want it. You’re in control we just make it easy."
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<IconLock className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Security you can trust"
        description="Private data stays private. With enterprise-grade authentication and permission controls, your information is safe, whether you’re browsing or closing deals"
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<IconSparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="AI that actually works for you"
        description="Not just “powered by AI” Muvius agents negotiate, filter, and recommend with context awareness, so you skip the noise and get straight to results."
      />

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<IconSearch className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Find exactly what you’re looking for"
        description="Ordo’s smart search isn’t just fast, it’s personal. Your Muvius agent learns your preferences and brings the right matches to you before you even think to ask."
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 dark:border-white/[0.2] border-black/[0.1]">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
