"use client";

import { Tabs } from "./ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Marketplaces",
      value: "marketplaces",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold dark:bg-gradient-to-br from-zinc-900 to-zinc-800 bg-gray-100">
          <p>Marketplaces</p>
          <Marketplaces />
        </div>
      ),
    },
    {
      title: "Listings",
      value: "listings",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold dark:bg-gradient-to-br from-zinc-900 to-zinc-800 bg-gray-100">
          <p>Listings</p>
          <Listings />
        </div>
      ),
    },
    {
      title: "Workflow",
      value: "workflow-builder",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold dark:bg-gradient-to-br from-zinc-900 to-zinc-800 bg-gray-100">
          <p>Workflow Builder</p>
          <Workflow />
        </div>
      ),
    },
    {
      title: "Analytics",
      value: "analytics",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold dark:bg-gradient-to-br from-zinc-900 to-zinc-800 bg-gray-100">
          <p>Analytics</p>
          <Analytics />
        </div>
      ),
    },
    {
      title: "Settings",
      value: "settings",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold dark:bg-gradient-to-br from-zinc-900 to-zinc-800 bg-gray-100">
          <p>Settings</p>
            <Settings />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mb-40 mt-10 md:mt-20 md:mb-20 px-4 md:px-0">
      <Tabs tabs={tabs} />
    </div>
  );
}

const Marketplaces = () => {
  return (
    <img
      src="./Marketplaces.png"
      alt="marketplaces image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const Listings = () => {
  return (
    <img
      src="./Listings.png"
      alt="listings image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const Workflow = () => {
  return (
    <img
      src="./Workflow.png"
      alt="workflow image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const Analytics = () => {
  return (
    <img
      src="./Analytics.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const Settings = () => {
  return (
    <img
      src="./Settings.png"
      alt="settings image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
