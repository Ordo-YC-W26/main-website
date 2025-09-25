import Link from "next/link";
import {
  Navbar,
  NavBody,
  NavbarLogo,
  NavItems,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
} from "@/components/ui/animated-modal";
import { BetaSignupForm } from "@/components/ui/forms";
import { Footer } from "@/components/ui/footer";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export const metadata = { title: "Blog Post | ordo" };

const content: Record<
  string,
  { title: string; body: string; date: string; readMins: number; image: string }
> = {
  "marketplace-challenges": {
    title:
      "Why Marketplaces Feel Broken: Overbuying, Overspending, and Wasted Time",
    date: "2025-01-18",
    readMins: 6,
    image:
      "https://images.unsplash.com/photo-1542744095-291d1f67b221?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG9ubGluZSUyMHNob3BwaW5nfGVufDB8fDB8fHww",
    body: `# Why Marketplaces Feel Broken: Overbuying, Overspending, and Wasted Time

Marketplaces have revolutionized the way we buy and sell—from housing and cars to secondhand goods and services. They promise convenience, choice, and competitive prices. Yet for many users, the experience often feels frustrating and broken. Why? Because underneath the surface, marketplaces are riddled with inefficiencies that lead to overbuying, overspending, and wasted time.

### Overbuying: When Choice Becomes Overload

We live in an era of endless options. While choice can be empowering, it can also overwhelm. Marketplaces bombard us with countless listings, sponsored ads, and push notifications. This constant stream tempts us to buy more than we need or want.

Without personalized guidance, buyers often struggle to filter what truly matters. The paradox of choice kicks in: instead of making confident decisions, we spend hours scrolling, unsure if the next listing will be better. This can lead to impulse buying—adding unnecessary products or services to carts—driving up both clutter and costs.

### Overspending: Hidden Costs and Pay-to-Play Models

Behind many marketplaces lurk complex pricing structures and hidden fees. Sellers often pay to promote their listings or access buyer leads, and these costs inevitably trickle down to the consumer through inflated prices.

Moreover, traditional marketplaces rarely facilitate transparent negotiations. Buyers lack leverage, while sellers struggle to connect with qualified leads. This imbalance benefits the platform but leaves both sides feeling shortchanged.

### Wasted Time: The Silent Cost

Perhaps the most underestimated pain point is time lost. Marketplaces fragment the buying journey across multiple channels—search pages, messaging apps, payment portals—and buyers and sellers juggle back-and-forth communications without real-time clarity.

Negotiations drag on, follow-ups fall through, and opportunities are missed. For individuals balancing busy lives or businesses scaling operations, this inefficiency translates to lost revenue and reduced trust.

### The Root of the Problem: Marketplace Design

At their core, many marketplaces are designed to maximize engagement metrics—page views, clicks, and ad impressions—rather than deliver meaningful outcomes. Users are treated as passive participants, left to navigate a chaotic environment with little support.

This "volume over value" approach prioritizes short-term growth at the expense of long-term satisfaction and loyalty.

### How AI Agents Can Fix the Broken Marketplaces

The solution lies in shifting from passive listings to active agents. Imagine AI-powered assistants that understand your preferences, negotiate deals, and manage the entire transaction on your behalf.

This is exactly what ordo is building. Our intelligent agents sift through the noise to surface the best matches, streamline negotiations, and automate workflows. Buyers get personalized, context-aware recommendations; sellers connect with qualified leads faster; and businesses gain transparent analytics and scalable tools.

### A Smarter Marketplace for Everyone

By automating the tedious parts and centering trust and efficiency, AI agents restore balance and fairness. No more overbuying because your agent knows your true needs. No more overspending thanks to transparent, data-driven negotiations. And most importantly, no more wasted time in endless back-and-forths.

Marketplaces don't have to feel broken. With AI working *for* us, they can finally deliver on their promise — making commerce faster, fairer, and effortless.`,
  },
  "agentic-commerce": {
    title: "Agentic Commerce: The Next Chapter of Buying and Selling",
    date: "2025-01-12",
    readMins: 7,
    image:
      "https://www.cio.com/wp-content/uploads/2025/08/4035020-0-43948400-1754574784-iStock-924555558.jpg?quality=50&strip=all&w=1024",
    body: `# Agentic Commerce: The Next Chapter of Buying and Selling

The way we buy and sell is evolving rapidly. Traditional marketplaces have served us well, but they're reaching their limits. Clunky interfaces, endless searching, and slow negotiations leave users frustrated. Enter **Agentic Commerce** — a transformative approach where intelligent AI agents take the lead, making transactions smarter, faster, and more personalized.

## What is Agentic Commerce?

Agentic Commerce empowers AI agents to act as your personal buying and selling assistants. These agents understand your preferences, negotiate on your behalf, and manage complex workflows — all with minimal effort from you. Instead of being passive participants sifting through listings, buyers and sellers become partners with AI-powered helpers that optimize every step of the process.

## The Challenges with Traditional Marketplaces

Despite the convenience, today's marketplaces often fall short:

- **Information Overload:** Endless listings and ads overwhelm users, making it difficult to find the right fit.
- **Inefficient Negotiations:** Buyers and sellers spend hours in back-and-forth communications that drag deals out unnecessarily.
- **Lack of Personalization:** Generic recommendations miss what truly matters to individual users or businesses.
- **Fragmented Workflows:** Multiple tools and platforms complicate the buying and selling journey, causing friction and lost opportunities.

These issues contribute to wasted time, overspending, and buyer and seller fatigue.

## How Agentic Commerce Solves These Problems

Agentic Commerce transforms the marketplace by putting AI agents in the driver's seat:

- **Smart Search & Matchmaking:** AI agents filter and surface the most relevant listings, tailored to your unique needs and preferences.
- **Automated Negotiations:** Agents negotiate prices, terms, and logistics in real-time, reducing delays and increasing transparency.
- **Workflow Automation:** From posting listings to managing offers and closing deals, AI streamlines every step of the process.
- **Data-Driven Insights:** Users and businesses get actionable analytics to make smarter decisions and optimize outcomes.

This shift moves marketplaces from passive listing boards to dynamic, intelligent ecosystems.

## The Business Impact of Agentic Commerce

For businesses, Agentic Commerce means:

- **Higher Conversion Rates:** Targeted matchmaking connects sellers to qualified buyers faster.
- **Scalable Operations:** Automated workflows reduce manual overhead and enable growth without adding headcount.
- **Better Customer Experience:** Faster, more personalized service builds trust and loyalty.
- **Predictable Pricing Models:** Usage-based and tiered pricing align costs with value delivered.

## ordo: Pioneering the Agentic Marketplace

At ordo, we're building the world's first fully AI-handled marketplace platform. Our Muvius agents proactively manage searches, negotiations, and workflows, empowering individuals and businesses alike. Whether you're a casual seller, a growing startup, or a large enterprise, ordo adapts to your needs with plug-and-play integrations and powerful AI orchestration.

## What's Next?

Agentic Commerce isn't just the future — it's happening now. As AI continues to improve, marketplaces will become more intuitive, transparent, and efficient. Early adopters will gain a competitive edge, unlocking new revenue streams and customer satisfaction.

Are you ready to step into the next chapter of buying and selling?

**Join ordo and experience the power of AI agents working for you.**

---

*Discover more at [ordo.ai](https://ordo.ai)*
*Contact us for private beta access and business integrations.*`,
  },
  "introducing-ordo-agents": {
    title:
      "Introducing ordo Agents: Build and Deploy Marketplace Agents in Seconds",
    date: "2025-01-05",
    readMins: 5,
    image: "/Workflow.png",
    body: `# Introducing ordo Agents: Build and Deploy Marketplace Agents in Seconds

In today's fast-paced digital world, agility and automation are key to staying ahead. That's why we're excited to introduce **ordo Agents** — a revolutionary way to build, customize, and deploy AI-powered marketplace agents in just seconds.

## What Are ordo Agents?

ordo Agents are intelligent, plug-and-play AI assistants designed to handle complex marketplace tasks for you. Whether it's searching listings, negotiating deals, matching buyers and sellers, or managing workflows, these agents do the heavy lifting freeing you to focus on what matters most.

## Why ordo Agents?

- **Rapid Deployment:** Launch fully functional marketplace agents within seconds—no coding required.
- **Customizable:** Tailor agents to your specific business needs or personal preferences with easy configuration tools.
- **Scalable:** From individual sellers to enterprises, ordo Agents scale effortlessly to handle growing volumes and complexities.
- **Seamless Integration:** Connect agents to your existing chat, voice, or web interfaces without disruption.
- **Continuous Learning:** Powered by advanced AI, ordo Agents learn and adapt to improve performance over time.

## How It Works

1. **Select Your Agent Type:** Choose from buyer agents, seller agents, or workflow orchestrators.
2. **Configure Preferences:** Set rules, priorities, and workflows that match your unique requirements.
3. **Deploy Instantly:** Launch your agent to start automating searches, matches, negotiations, and more.
4. **Monitor & Optimize:** Track performance with real-time analytics and fine-tune settings as needed.

## Transform Your Marketplace Experience

ordo Agents turn marketplaces from static platforms into dynamic, intelligent ecosystems. They reduce friction, accelerate transactions, and create personalized experiences for every user.

Whether you're a casual user wanting smarter search or a business seeking scalable automation, ordo Agents empower you to do more with less effort.

## Get Started Today

Experience the future of marketplace automation. Build and deploy your first ordo Agent in seconds and unlock new levels of efficiency and growth.

**Visit [ordo.ai](https://ordo.ai) to learn more and request early access.**`,
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = content[slug];

  if (!post) {
    return (
      <>
        <Navbar>
          <NavBody>
            <NavbarLogo />
            <NavItems
              items={[
                { name: "Features", link: "/#features" },
                { name: "Pricing", link: "/#pricing" },
                { name: "Experience", link: "/#experience" },
                { name: "Blogs", link: "/blog" },
                { name: "About", link: "/about" },
              ]}
            />
            <div className="flex items-center gap-3">
              <Modal>
                <ModalTrigger>
                  <NavbarButton variant="primary"><NavbarButton variant="primary">Join Beta</NavbarButton></NavbarButton>
                </ModalTrigger>
                <ModalBody>
                  <ModalContent>
                    <h3 className="text-xl font-semibold text-black dark:text-white">
                      Join the private beta
                    </h3>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Enter your details below and we'll notify you.
                    </p>
                    <div className="mt-6">
                      <BetaSignupForm />
                    </div>
                  </ModalContent>
                </ModalBody>
              </Modal>
            </div>
          </NavBody>
        </Navbar>
        <main className="px-6 py-16 bg-white text-slate-900 dark:bg-black dark:text-white h-[10vh]">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-semibold">Post not found</h1>
            <Link
              href="/blog"
              className="mt-6 inline-block text-sm text-neutral-600 dark:text-neutral-400"
            >
              ← Back to blog
            </Link>
          </div>
        </main>
        <div className="min-h-[36rem] md:h-[60rem] bg-black hidden flex-col items-center justify-around relative w-full dark:flex gap-8">
          <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
            <span>ordo</span>
            <span className="text-white text-lg font-thin">x</span>
            <span>Marketplace</span>
            <span className="text-white text-lg font-thin">x</span>
            <span>AI</span>
          </h2>
          <div className="pointer-events-none absolute inset-0 z-0">
            <ShootingStars />
            <StarsBackground />
          </div>
          <div className="w-full hidden dark:block relative z-10">
            <Footer />
          </div>
        </div>

        <div className="min-h-[36rem] md:h-[36rem] bg-white flex flex-col items-center justify-center relative w-full gap-8 dark:hidden">
          <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-zince-800 via-zinc-600 to-zinc-400 flex items-center gap-2 md:gap-8 my-20">
            <span>ordo</span>
            <span className="text-black text-lg font-thin">x</span>
            <span>Marketplace</span>
            <span className="text-black text-lg font-thin">x</span>
            <span>AI</span>
          </h2>
          <div className="w-full block dark:hidden">
            <Footer />
          </div>
        </div>  
      </>
    );
  }

  return (
    <>
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems
            items={[
              { name: "Features", link: "/#features" },
              { name: "Pricing", link: "/#pricing" },
              { name: "Experience", link: "/#experience" },
              { name: "Blogs", link: "/blog" },
              { name: "About", link: "/about" },
            ]}
          />
          <div className="flex items-center gap-3">
            <Modal>
              <ModalTrigger >
              <NavbarButton variant="primary">Join Beta</NavbarButton>
              </ModalTrigger>
              <ModalBody>
                <ModalContent>
                  <h3 className="text-xl font-semibold text-black dark:text-white">
                    Join the private beta
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Enter your details below and we'll notify you.
                  </p>
                  <div className="mt-6">
                    <BetaSignupForm />
                  </div>
                </ModalContent>
              </ModalBody>
            </Modal>
          </div>
        </NavBody>
      </Navbar>
      <main className="px-6 py-16 bg-white text-slate-900 dark:bg-black dark:text-white h-[10vh]">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400">
            <span>{post.readMins} min read</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 dark:from-neutral-200 dark:to-neutral-400">
            {post.title}
          </h1>
          <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover"
            />
          </div>
          <article className="prose prose-neutral dark:prose-invert prose-lg max-w-none mt-8">
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkBreaks]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-semibold mt-6 mb-3">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold mt-5 mb-2">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="mb-4 leading-relaxed">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="mb-4 pl-6 space-y-1">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="mb-4 pl-6 space-y-1">{children}</ol>
                ),
                li: ({ children }) => <li className="list-disc">{children}</li>,
                strong: ({ children }) => (
                  <strong className="font-semibold">{children}</strong>
                ),
                em: ({ children }) => <em className="italic">{children}</em>,
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {children}
                  </a>
                ),
                hr: () => (
                  <hr className="my-8 border-neutral-200 dark:border-neutral-700" />
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-neutral-300 dark:border-neutral-600 pl-4 italic my-4">
                    {children}
                  </blockquote>
                ),
              }}
            >
              {post.body}
            </ReactMarkdown>
          </article>
          <div className="mt-10">
            <Link
              href="/blog"
              className="text-sm text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white"
            >
              ← Back to blog
            </Link>
          </div>
        </div>
      </main>
      
        <div className="w-full md:-mt-80 -z-10 relative mt-250">
          <Footer />
        </div>
    </>
  );
}
