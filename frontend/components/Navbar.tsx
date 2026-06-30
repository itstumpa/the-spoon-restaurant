"use client";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, UtensilsCrossed, X, MapPin, Phone, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

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
    transition: {
      delay: 0.1 + i * 0.08,
      duration: 0.4,
      ease: "easeOut" as const,
    },
  }),
};

const mobileItemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.05 + i * 0.06,
      duration: 0.3,
      ease: "easeOut" as const,
    },
  }),
  exit: { x: -20, opacity: 0, transition: { duration: 0.15 } },
};

const topNavItems = [
  { icon: Clock, text: "Mon–Sun: 11:00 AM – 10:00 PM" },
  { icon: MapPin, text: "123 Maple Street, Austin, TX 78701" },
  { icon: Phone, text: "(512) 555-0187" },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

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

  // Determine if we're on the home page (hero section is dark)
  const isHomePage = pathname === "/";

  return (
    <>
      {/* Top Navbar - Slim, Dark Charcoal */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled && !isHomePage
            ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
            : "bg-bg-dark",
        )}
        style={{ height: isScrolled && !isHomePage ? "0" : "auto", opacity: isScrolled && !isHomePage ? 0 : 1 }}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top navigation">
          <div className="flex items-center justify-between h-10 lg:h-12 text-sm">
            {/* Left: Logo + Opening Hours */}
            <div className="flex items-center gap-6 lg:gap-8">
              <Link href="/" className="group relative flex items-center gap-2" aria-label="The Spoon - Home">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/20 transition-colors duration-300 group-hover:bg-primary/30">
                  <UtensilsCrossed className="h-4 w-4 text-white" />
                </div>
                <span className="font-heading text-lg font-bold tracking-tight text-white hidden sm:block">
                  The <span className="text-primary-lighter">Spoon</span>
                </span>
              </Link>
              <div className="hidden lg:flex items-center gap-6 text-white/80 font-body">
                {topNavItems.map((item, i) => (
                  <span key={i} className="flex items-center gap-1.5 hover:text-white transition-colors duration-200">
                    <item.icon className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                    <span>{item.text}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Social Icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Main Navbar - Sticky, Navigation Links + CTA */}
      <motion.header
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "top-0 bg-white/95 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
            : isHomePage
            ? "top-10 lg:top-12 bg-transparent"
            : "top-0 bg-white/95 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.06)]",
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="group relative flex items-center gap-2.5" aria-label="The Spoon - Home">
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
                        "relative px-4 py-2 text-lg font-medium transition-colors duration-200",
                        isActive
                          ? "text-primary"
                          : isScrolled || !isHomePage
                          ? "text-text-muted hover:text-primary"
                          : "text-white hover:text-primary-lighter",
                      )}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-primary"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
              <div className="ml-4 pl-4 border-l border-border">
                <Link href="/reservations">
                  <Button variant="default" size="sm" className="shadow-elevated">
                    Book a Table
                  </Button>
                </Link>
              </div>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex md:hidden items-center gap-3">
              <Link href="/reservations">
                <Button variant="default" size="xs" className="md:hidden shadow-elevated">
                  Book
                </Button>
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
              className="fixed inset-0 z-30 flex flex-col bg-white md:hidden"
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
                            "block rounded-xl px-6 py-4 text-2xl font-heading font-bold transition-colors min-h-[44px]",
                            isActive
                              ? "bg-primary/10 text-primary"
                              : "text-text hover:bg-muted hover:text-primary",
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
                    <Button variant="default" size="lg" className="w-full text-lg shadow-elevated">
                      Book a Table
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
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
            className="fixed inset-0 z-40 flex flex-col bg-[var(--color-bg)]/98 backdrop-blur-2xl md:hidden"
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
                            : "text-[var(--color-text)] hover:bg-[var(--color-surface)] hover:text-primary",
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
              <div className="mt-8 px-6 ">
                <Link href="/reservations" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="accent" size="lg" className="w-full text-lg">
                    Book a Table
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
