"use client";

import Image from "next/image";
import {
  Rocket,
  Smartphone,
  LayoutGrid,
  ServerCog,
  Cloud,
  Timer,
  ShieldCheck,
  Layers3,
  CloudLightning,
} from "lucide-react";
import Button from "../components/button";
import { services } from "@/infrastructure/data/services/services-data";

export default function Contact() {
  const iconMap = {
    Rocket,
    Smartphone,
    LayoutGrid,
    ServerCog,
    Cloud,
    Timer,
    ShieldCheck,
    Layers3,
    CloudLightning,
  };
  return (
    <section
      id="contact"
      className="relative mt-16 mb-20 mx-6 md:ml-0 px-4 sm:px-6 max-w-5xl"
    >
      <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-6">
        I&apos;m Aleks
      </h2>
      <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-24 items-start mb-16">
        <div className="flex-1 text-base text-muted-foreground">
          <p className="text-muted-foreground text-base max-w-xl mb-10">
            A full-stack developer with a focus on building fast, scalable, and
            maintainable web applications. With 2+ years of hands-on experience
            using React, Next.js, Node.js, and Express — I focus on transforming
            ideas into value-driven, user-focused products that deliver
            measurable impact.
          </p>
          <h3 className="text-foreground text-xl sm:text-2xl mb-8">
            My services
          </h3>
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-1 text-white">
            {services.map((service, i) => (
              <div
                key={i}
                className="relative flex-none rounded-2xl p-[1px] bg-contact-gradient"
              >
                <div className="bg-background text-foreground rounded-2xl p-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-base">{service.title}</h4>
                    <span className="text-accent font-semibold text-base">
                      {service.price}
                    </span>
                  </div>
                  <ul className="text-base text-muted-foreground space-y-2">
                    {service.items.map((item, j) => {
                      const Icon =
                        iconMap[item.icon as keyof typeof iconMap] ||
                        LayoutGrid;
                      return (
                        <li key={j} className="flex items-start gap-2">
                          <Icon className="w-5 h-5 pt-[2px] text-foreground" />
                          <span>{item.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ))}{" "}
            <p className="text-sm text-muted-foreground mt-6 italic">
              * Actual cost may change depending on functionality, integrations,
              and business needs.
            </p>
          </div>

          <div className="mt-16">
            <Button
              className="primary"
              text="Get in touch"
              type="button"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/aleks-haran-dev/",
                  "_blank"
                );
              }}
            />
          </div>
        </div>
        <div className="flex-1 w-full md:max-w-96 lg:sticky lg:top-20 self-start rounded-xl p-[2px] bg-contact-gradient">
          <div className="w-full aspect-[3/4] relative overflow-hidden rounded-xl bg-background">
            <Image
              src="/Frame_6.webp"
              alt="My Photo"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
