/* eslint-disable react/jsx-no-undef */
import Link from "next/link";
import { Bricolage_Grotesque } from "next/font/google";

// globals components
import { Container } from "@/components/globals/container";
import { Wrapper } from "@/components/globals/wrapper";

// ui components
import Marquee from "@/components/ui/marquee";
import { Button } from "@/components/ui/button";
import SectionBadge from "@/components/ui/section-badge";
import { BorderBeam } from "@/components/ui/border-beam";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { cn } from "@/lib/utils";

import { features, perks, pricingCards, reviews } from "@/constants";

import { ChevronRight } from "lucide-react";
import { CiCircleCheck } from "react-icons/ci";
import { IoLogoWindows } from "react-icons/io";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
});

export default function HomePage() {
  const heroTitle = `Code Smarter Build Faster.`;

  return (
    <section className="relative flex w-full flex-col items-center justify-center px-4 py-8 md:px-0">
      {/* Hero Section */}
      <Wrapper>
        <div className="absolute inset-0 -z-10 h-[150vh] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]" />
        <Container>
          <div className="flex h-full flex-col items-center justify-center py-20">
            <div className="bg-transparent border-[1px] border-zinc-800 rounded-full p-1">
              <div className="bg-zinc-900 rounded-full flex items-center px-2 py-1">
                ✨
                <h1 className="text-sm">
                  Welcome to <span>Escape</span>
                </h1>
                <ChevronRight />
              </div>
            </div>

            <div className="mt-8 flex w-11/12 max-w-3xl flex-col items-center md:w-full">
              <div className={`${bricolage.className}`}>
                <TextGenerateEffect words={heroTitle} title={true} />
              </div>

              <p className="mt-6 text-center font-inter text-base text-foreground/80 md:text-lg">
                Supercharge development with our AI code editor — smart
                suggestions, instant debugging, and seamless refactoring for
                faster, cleaner code.
              </p>

              <div className="relative mt-8 hidden w-full items-center justify-center gap-4 md:mt-12 md:flex">
                <div className="border-zinc-600 border-[1px] p-1 rounded-xl hover:border-zinc-400">
                  <Button className="bg-white text-black py-7 px-4 hover:bg-white ">
                    <IoLogoWindows /> Downloads for Windows
                  </Button>
                </div>

                <div className="border-zinc-600 border-[1px] p-1 rounded-xl hover:border-zinc-400">
                  <Button className="bg-black text-white py-7 px-4 hover:bg-black">
                    All Downloads
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative mx-auto flex w-full items-center justify-center py-10 md:py-20">
              <div className="gradient absolute inset-0 left-1/2 top-1/2 -z-10 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 blur-[10rem]"></div>
              <div className="-m-2 rounded-xl bg-opacity-50 p-2 ring-1 ring-inset ring-foreground/20 backdrop-blur-3xl lg:-m-4 lg:rounded-2xl">
                <video
                  src="/assets/dashboard_video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  width={1200}
                  height={1200}
                  className="left-1/2 rounded-md bg-foreground/10 shadow-2xl ring-1 ring-border lg:rounded-xl"
                />

                <BorderBeam
                  duration={6}
                  size={250}
                  className="from-transparent via-red-500 to-transparent"
                />
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Steps Section */}
      <Wrapper className="relative flex flex-col items-center justify-center py-12">
        <Container>
          <div className="max-w-md text-start md:mx-auto md:text-center">
            <SectionBadge title="The Process" />
            <div className={`${bricolage.className}`}>
              <h2 className="mt-6 text-3xl font-semibold lg:text-4xl">
                Three Simple Steps to Start Building Now
              </h2>
            </div>
            <p className="mt-6 text-muted-foreground">
              Kickstart your coding journey in just 3 simple steps
            </p>
          </div>
        </Container>
        <Container>
          <div className="flex w-full flex-col items-center justify-center py-10 md:py-20">
            <div className="grid w-full grid-cols-1 divide-x-0 divide-y divide-gray-900 first:border-gray-900 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-3 lg:first:border-none">
              {perks.map((perk) => (
                <div
                  key={perk.title}
                  className="flex flex-col items-start px-4 py-4 md:px-6 lg:px-8 lg:py-6"
                >
                  <div className="flex items-center justify-center">
                    <perk.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium">{perk.title}</h3>
                  <p className="mt-2 text-start text-muted-foreground">
                    {perk.info}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Features Section */}
      <Wrapper className="relative flex flex-col items-center justify-center py-12">
        <div className="absolute -right-1/3 top-0 -z-10 hidden h-72 w-72 rounded-full bg-primary blur-[10rem] md:block"></div>
        <div className="absolute -left-1/3 bottom-0 -z-10 hidden h-72 w-72 rounded-full bg-indigo-600 blur-[10rem] md:block"></div>
        <Container>
          <div className="mx-auto max-w-md text-start md:text-center">
            <SectionBadge title="Features" />
            <div className={`${bricolage.className}`}>
              <h2 className="mt-6 text-3xl font-semibold lg:text-4xl">
                Explore Our Cutting-Edge Features
              </h2>
            </div>
            <p className="mt-6 text-muted-foreground">
              Our platform offers intelligent tools to revolutionize coding,
              learning, and productivity.
            </p>
          </div>
        </Container>
        <Container>
          <div className="mx-auto mt-8 flex items-center justify-center"></div>
        </Container>
        <Container>
          <div className="flex w-full flex-col items-center justify-center py-10 md:px-10 md:py-20">
            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col items-start px-0 md:px-0 lg:items-start"
                >
                  <div className="flex items-center justify-center">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium">{feature.title}</h3>
                  <p className="mt-2 text-start text-muted-foreground lg:text-start">
                    {feature.info}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Pricing Section */}

      <Wrapper className="relative flex flex-col items-center justify-center py-12">
        <Container>
          <div className="max-w-md text-start md:mx-auto md:text-center">
            <SectionBadge title="Pricing" />
            <h2 className="mt-6 text-3xl font-semibold lg:text-4xl">
              Unlock the right plan for your business
            </h2>
            <p className="mt-6 text-muted-foreground">
              Choose the best plan for your business and start building your
              dream website today
            </p>
          </div>
        </Container>
        <Container className="flex items-center justify-center">
          <div className="grid w-full max-w-6xl grid-cols-1 flex-wrap justify-center gap-5 py-10 md:gap-8 md:py-20 lg:grid-cols-3">
            {pricingCards.map((card) => (
              <Card
                key={card.title}
                className={cn(
                  "relative flex w-full flex-col border border-neutral-700 bg-[#0b0b0b] overflow-hidden",
                  card.title === "Unlimited Saas" && "border-2 border-zinc-900",
                  "before:absolute before:top-0 before:left-1/2 before:h-[2px] before:w-60 before:-translate-x-1/2",
                  "before:bg-gradient-to-r before:from-transparent before:via-purple-500 before:to-transparent"
                )}
              >
                <CardHeader>
                  <span className="text-lg text-white">{card.title}</span>
                  <span className="text-sm text-zinc-400">
                    {card.description}
                  </span>
                  <CardTitle className="text-4xl text-white">
                    {card.price}
                    <span className="text-sm text-zinc-400">
                      /{card.duration}
                    </span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-3 pt-6">
                  {card.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CiCircleCheck className="h-4 w-4 text-purple-500" />
                      <p className="text-sm font-light text-zinc-400">
                        {feature}
                      </p>
                    </div>
                  ))}
                </CardContent>

                <CardFooter className="mt-auto w-full">
                  <Link
                    href="#"
                    className={cn(
                      "w-full rounded-md p-2 text-center text-sm font-medium",
                      card.title === "Unlimited Saas"
                        ? "bg-primary text-primary-foreground"
                        : "bg-foreground text-background"
                    )}
                  >
                    {card.buttonText}
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </Wrapper>

      {/* Testimonials */}
      <Wrapper className="relative flex flex-col items-center justify-center py-12">
        <div className="absolute -left-1/3 -top-1/4 -z-10 hidden h-72 w-72 rounded-full blur-[10rem] md:block"></div>
        <Container>
          <div className="mx-auto max-w-md text-start md:text-center">
            <SectionBadge title="Our Customers" />
            <div className={`${bricolage.className}`}>
              <h2 className="mt-6 text-3xl font-semibold lg:text-4xl">
                What people are saying
              </h2>
            </div>
            <p className="mt-6 text-muted-foreground">
              See how WattX empowers people of all backgrounds. Here&apos;s what
              real people are saying
            </p>
          </div>
        </Container>
        <Container>
          <Marquee />
        </Container>
      </Wrapper>
    </section>
  );
}
