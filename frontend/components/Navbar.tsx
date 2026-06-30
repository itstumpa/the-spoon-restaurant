"use client";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Share2,
  UtensilsCrossed,
  X,
} from "lucide-react";
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
  { icon: MessageCircle, href: "https://instagram.com", label: "Instagram" },
  { icon: Share2, href: "https://facebook.com", label: "Facebook" },
  { icon: Mail, href: "https://twitter.com", label: "Twitter" },
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

  const isHomePage = pathname === "/";

  return (
    <>
      {/* Top Navbar - Slim, Dark Charcoal */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          "bg-bg-dark",
        )}
        style={{
          height: isScrolled ? "0" : "auto",
          opacity: isScrolled ? 0 : 1,
          pointerEvents: isScrolled ? "none" : "auto",
          overflow: isScrolled ? "hidden" : "visible",
        }}
      >
        <nav
          className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 md:py-1"
          aria-label="Top navigation"
        >
          <div className="flex items-center justify-between h-10 lg:h-12 text-sm">
            {/* Left: Logo */}
            <Link
              href="/"
              className="group relative flex items-center gap-2 shrink-0"
              aria-label="The Spoon - Home"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/20 transition-colors duration-300 group-hover:bg-primary/30">
                <UtensilsCrossed className="h-4 w-4 text-white" />
              </div>
              <span className="font-heading text-2xl font-bold tracking-tight text-white hidden sm:block">
                The <span className="text-primary-lighter">Spoon</span>
              </span>
            </Link>

            {/* Center: Info Items */}
            <div className="hidden lg:flex items-center justify-center gap-6 text-white font-body">
              {topNavItems.map((item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1.5 hover:text-white transition-colors duration-200 whitespace-nowrap"
                >
                  <item.icon
                    className="h-3.5 w-3.5 text-accent shrink-0"
                    aria-hidden="true"
                  />
                  <span>{item.text}</span>
                </span>
              ))}
            </div>

            {/* Right: Social Icons */}
            <div className="flex items-center gap-2 shrink-0">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-white hover:text-white hover:bg-white/10 transition-all duration-200"
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
          "fixed left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "top-0 bg-bg-dark/60 backdrop-blur-3xl shadow-[0_1px_3px_rgba(0,0,0,0.3)]"
            : isHomePage
              ? "top-10 lg:top-12 bg-transparent"
              : "top-10 lg:top-12 bg-bg-dark",
        )}
      >
        <nav
          className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 md:py-3"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between h-10 lg:h-12">
            {/* Desktop Nav - Left */}
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
                          : !isScrolled
                            ? "text-white hover:text-primary-lighter"
                            : "text-white hover:text-primary",
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
            </div>

            {/* Desktop CTA - Right */}
            <div className="hidden md:flex items-center">
              <Link href="/reservations">
                <Button
                  variant="accent"
                  size="lg"
                  className="shadow-elevated text-xl px-6 py-3"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Table
                </Button>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex md:hidden items-center gap-3">
              <Link href="/reservations">
                <Button
                  variant="default"
                  size="xs"
                  className="md:hidden shadow-elevated"
                >
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
                  <Link
                    href="/reservations"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button
                      variant="default"
                      size="lg"
                      className="w-full text-lg shadow-elevated"
                    >
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
