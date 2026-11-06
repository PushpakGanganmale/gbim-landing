"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/data/content";
import Button from "@/components/ui/Button";
import { ChevronDown } from "@/components/ui/Icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-3 pt-4 sm:px-6 lg:px-[6.25rem] lg:pt-[3.25rem]">
      <div className="mx-auto flex max-w-[107.5rem] items-center justify-between rounded-full bg-white px-5 py-3 shadow-[0_8px_40px_rgba(0,0,0,0.06)] lg:pl-12 lg:pr-6 lg:py-6">
        <Link href="/" aria-label="GBIM home" className="shrink-0">
          <Image src="/images/logo.svg" alt="GBIM" width={132} height={38} priority className="h-auto lg:w-[8.125rem]" />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-9 whitespace-nowrap lg:ml-[11.9rem] lg:flex">
          {navItems.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className="flex items-center gap-4 py-3 text-base text-ink transition-colors hover:text-brand lg:text-[1.375rem] lg:leading-none"
              >
                {item.label}
                {item.children && (
                  <ChevronDown className="h-5 w-5 lg:h-[1.1rem] lg:w-[1.1rem] transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
                )}
              </Link>
              {item.children && (
                <ul className="invisible absolute left-0 top-full min-w-56 rounded-2xl bg-white p-2 opacity-0 shadow-xl transition-all duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  {item.children.map((c) => (
                    <li key={c.label}>
                      <Link href={c.href} className="block rounded-xl px-4 py-2.5 text-base hover:bg-blush hover:text-brand">
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:ml-auto lg:block">
          <Button href="#contact">Schedule a call</Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-blush text-brand lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="mx-auto mt-3 max-h-[75vh] max-w-[1720px] overflow-y-auto rounded-3xl bg-white p-5 shadow-xl lg:hidden">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.label} className="border-b border-black/5 last:border-0">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                      aria-expanded={expanded === item.label}
                      className="flex w-full items-center justify-between py-4 text-lg"
                    >
                      {item.label}
                      <ChevronDown className={`h-5 w-5 transition-transform ${expanded === item.label ? "rotate-180" : ""}`} />
                    </button>
                    {expanded === item.label && (
                      <ul className="pb-3 pl-3">
                        {item.children.map((c) => (
                          <li key={c.label}>
                            <Link href={c.href} onClick={() => setOpen(false)} className="block py-2 text-base text-muted">
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={item.href} onClick={() => setOpen(false)} className="block py-4 text-lg">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="pt-4">
            <Button href="#contact" className="w-full justify-center">
              Schedule a call
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}