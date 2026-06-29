"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { UtensilsCrossed, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

const navVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const linkVariants = {
  hidden: { y: -10, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.1 + i * 0.08, duration: 0.4, ease: "easeOut" as const },
  }),
};

const mobileItemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: 0.05 + i * 0.06, duration: 0.3, ease: "easeOut" as const },
  }),
  exit: { x: -20, opacity: 0, transition: { duration: 0.15 } },
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = useCallback((): void => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="group relative flex items-center gap-2.5"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
              <UtensilsCrossed className="h-5 w-5 text-primary" />
            </div>
            <span className="font-heading text-xl font-bold tracking-tight text-text lg:text-2xl">
              The <span className="text-primary">Spoon</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.href}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-colors duration-200",
                      isActive
                        ? "text-primary"
                        : "text-text-muted hover:text-text"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-primary"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
            <div className="ml-4 pl-4 border-l border-border">
              <Link href="/reservations">
                <Button variant="accent" size="sm">Book a Table</Button>
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <Link href="/reservations">
              <Button variant="accent" size="xs" className="md:hidden">Book</Button>
            </Link>
            <button
              type="button"
              className="relative z-50 inline-flex h-10 w-10 items-center justify-center rounded-lg text-text transition-colors hover:bg-muted"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col bg-white/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex-1 flex flex-col justify-center px-8 pb-20">
              <ul className="space-y-2">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.li
                      key={link.href}
                      custom={i}
                      variants={mobileItemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={cn(
                          "block rounded-xl px-6 py-4 text-2xl font-heading font-bold transition-colors",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-text hover:bg-muted hover:text-primary"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
              <div className="mt-8 px-6">
                <Link href="/reservations" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="accent" size="lg" className="w-full">Book a Table</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
