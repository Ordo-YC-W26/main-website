import { useId, useState } from "react";

type AgentSubcategory = {
  id: string;
  name: string;
  description: string;
  tags: string[];
};

type AgentCategory = {
  id: string;
  name: string;
  subcategories: AgentSubcategory[];
};

const categories: AgentCategory[] = [
    {
      id: "housing",
      name: "Housing & Rental Agents",
      subcategories: [
        {
          id: "room-rental",
          name: "Room Rental Agent",
          description: "Agent for finding and managing room rentals.",
          tags: ["Location Match", "Price Range", "Amenities Check"]
        },
        {
          id: "apartment-lease",
          name: "Apartment Lease Agent",
          description: "Smart agent for apartment hunting and lease management.",
          tags: ["Lease Analysis", "Price History", "Area Insights"]
        },
        {
          id: "sublease",
          name: "Sublease Agent",
          description: "Agent for managing sublease agreements and listings.",
          tags: ["Contract Review", "Price Analysis", "Tenant Screening"]
        },
        {
          id: "coliving",
          name: "Co-living Matchmaking Agent",
          description: "Agent for finding compatible co-living arrangements.",
          tags: ["Lifestyle Match", "Budget Planning", "Location Finder"]
        }
      ]
    },
    {
      id: "secondhand",
      name: "Second-hand & Resale Agents",
      subcategories: [
        {
          id: "furniture-resale",
          name: "Furniture Resale Agent",
          description: "Agent for finding and selling second-hand furniture.",
          tags: ["Condition Check", "Price Valuation", "Delivery Options"]
        },
        {
          id: "electronics-resale",
          name: "Electronics Resale Agent",
          description: "Agent for buying and selling used electronics safely.",
          tags: ["Device Check", "Warranty Status", "Price History"]
        },
        {
          id: "clothing-swap",
          name: "Clothing Swap Agent",
          description: "Agent for exchanging or selling pre-owned clothes.",
          tags: ["Size Match", "Condition Grading", "Style Matching"]
        }
      ]
    },
    {
      id: "supermarket",
      name: "Grocery & Essentials Agents",
      subcategories: [
        {
          id: "fresh-produce",
          name: "Fresh Produce Agent",
          description: "AI-powered agent for finding the freshest produce at the best prices.",
          tags: ["Freshness Check", "Price Comparison", "Local Sourcing"]
        },
        {
          id: "household-essentials",
          name: "Household Essentials Agent",
          description: "Agent for household items with smart inventory management.",
          tags: ["Smart Inventory", "Auto Reorder", "Price Alerts"]
        },
        {
          id: "deals-coupons",
          name: "Deals & Coupons Agent",
          description: "Agent that finds and applies the best deals and coupons automatically.",
          tags: ["Deal Finder", "Coupon Stacking", "Price History"]
        }
      ]
    },
    {
      id: "automotive",
      name: "Automotive & Mobility Agents",
      subcategories: [
        {
          id: "used-car",
          name: "Used Car Agent",
          description: "Agent for buying and selling used cars with safety checks.",
          tags: ["VIN Check", "Price Valuation", "Ownership History"]
        },
        {
          id: "auto-parts",
          name: "Auto Parts Agent",
          description: "Smart agent for finding compatible auto parts.",
          tags: ["Compatibility Check", "Price Comparison", "Quality Verification"]
        },
        {
          id: "scooter-bike",
          name: "Scooter & Bike Marketplace Agent",
          description: "Agent for buying, selling, and renting scooters and bikes.",
          tags: ["Condition Check", "Rental Scheduling", "Price Matching"]
        }
      ]
    },
    {
      id: "ecommerce",
      name: "E-commerce Shopping Agents",
      subcategories: [
        {
          id: "fashion",
          name: "Fashion Agent",
          description: "AI agent for finding the perfect fashion items based on your style.",
          tags: ["Style Matching", "Size Prediction", "Trend Analysis"]
        },
        {
          id: "electronics",
          name: "Electronics Agent",
          description: "Smart agent for electronics with price comparison and reviews.",
          tags: ["Tech Reviews", "Price Tracking", "Compatibility Check"]
        },
        {
          id: "beauty",
          name: "Beauty & Personal Care Agent",
          description: "Agent for beauty and personal care products with personalized recommendations.",
          tags: ["Skin Analysis", "Product Matching", "Ingredient Check"]
        }
      ]
    },
    {
      id: "local-services",
      name: "Local Services Marketplace Agents",
      subcategories: [
        {
          id: "home-repair",
          name: "Home Repair & Maintenance Agent",
          description: "Agent for finding vetted plumbers, electricians, and cleaners.",
          tags: ["Service Matching", "Verified Providers", "Price Estimates"]
        },
        {
          id: "event-services",
          name: "Event Services Agent",
          description: "Books photographers, DJs, caterers, and venues.",
          tags: ["Vendor Matching", "Budget Planning", "Availability Check"]
        },
        {
          id: "pet-care",
          name: "Pet Care Agent",
          description: "Connects to pet sitters, walkers, and boarding services.",
          tags: ["Availability Matching", "Review Check", "Price Comparison"]
        }
      ]
    }
  ];
  

export function Agents() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="py-20 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
        {categories.map((category) => {
          const isOpen = openId === category.id;
          const primaryDescription = category.subcategories[0]?.description ?? `${category.subcategories.length} agents available`;

          return (
            <div
              key={category.id}
              tabIndex={0}
              role="button"
              aria-expanded={isOpen}
              onClick={() => setOpenId((prev) => (prev === category.id ? null : category.id))}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setOpenId((prev) => (prev === category.id ? null : category.id));
                }
              }}
              className="group relative aspect-square bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-neutral-300/50 dark:focus:ring-white/10"
            >
              <Grid size={20} />

              <div
                className={`relative z-20 flex h-full flex-col items-center justify-center text-center transition-all duration-300 ${
                  isOpen
                    ? "opacity-0 scale-95"
                    : "group-hover:opacity-0 group-hover:scale-95 group-focus:opacity-0 group-focus:scale-95"
                }`}
                aria-hidden={isOpen}
              >
                <p className="text-base font-bold text-neutral-800 dark:text-white">
                  {category.name}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 mt-2 text-sm font-normal line-clamp-2 max-w-[85%]">
                  {primaryDescription}
                </p>
                <span className={`mt-4 inline-flex items-center justify-center rounded-full border border-neutral-300/60 dark:border-white/15 text-neutral-700 dark:text-neutral-200 bg-white/60 dark:bg-white/5 backdrop-blur px-2.5 py-1 text-xs font-medium transition-all duration-200 ${isOpen ? "translate-x-1" : "group-hover:translate-x-1"}`}>
                  View agents
                  <ArrowRight className={`ml-1 h-3.5 w-3.5 transition-transform ${isOpen ? "translate-x-0.5" : "group-hover:translate-x-0.5"}`} />
                </span>
              </div>

              <div
                className={`absolute inset-0 transition-opacity duration-300 ${
                  isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                } group-hover:opacity-100 group-hover:pointer-events-auto group-focus:opacity-100 group-focus:pointer-events-auto`}
              >
                <div className="absolute inset-0 bg-transparent" />
                <div className="relative z-30 h-full p-6 flex flex-col">
                  <div>
                    <p className="text-base font-semibold text-neutral-900 dark:text-white">
                      {category.name}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                      {primaryDescription}
                    </p>
                  </div>
                  <div className="mt-4 space-y-3 overflow-y-auto flex-1 pr-1">
                    {category.subcategories.map((agent) => (
                      <div
                        key={agent.id}
                        className="rounded-2xl border border-neutral-200/70 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] p-3"
                      >
                        <div className="flex flex-col items-center text-center gap-1">
                          <p className="text-sm font-medium text-neutral-800 dark:text-neutral-100">
                            {agent.name}
                          </p>
                          <p className="text-xs text-neutral-600 dark:text-neutral-400">
                            {agent.description}
                          </p>
                        </div>
                        {agent.tags?.length ? (
                          <div className="mt-2 flex flex-wrap gap-1.5 justify-center">
                            {agent.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] leading-none rounded-full border border-neutral-300/70 dark:border-white/15 text-neutral-700 dark:text-neutral-200 bg-white/70 dark:bg-white/[0.04] px-2 py-1"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                  <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-neutral-600 dark:text-neutral-400 inline-flex items-center gap-1">
                    <span>Scroll</span>
                    <svg viewBox="0 0 20 20" className="h-3 w-3" aria-hidden>
                      <path d="M10 14l-4-5h8l-4 5z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  // Deterministic, unique pattern to avoid SSR/CSR hydration mismatches and duplicate keys
  const p = pattern ?? [
    [7, 1],
    [8, 3],
    [9, 2],
    [10, 4],
    [11, 5],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x={-12}
          y={4}
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {(() => {
            const uniqueSquares: [number, number][] = Array.from(
              new Map(
                (squares as [number, number][])?.map(([sx, sy]) => [
                  `${sx}-${sy}`,
                  [sx, sy] as [number, number],
                ])
              ).values()
            );
            return uniqueSquares.map(([sx, sy]) => (
              <rect
                strokeWidth="0"
                key={`${sx}-${sy}`}
                width={width + 1}
                height={height + 1}
                x={sx * width}
                y={sy * height}
              />
            ));
          })()}
        </svg>
      )}
    </svg>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M4 10h10m0 0-4-4m4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
