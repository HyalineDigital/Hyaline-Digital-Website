"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Link from "next/link";

import React, { useRef, useState } from "react";


interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  // Track window scroll by not specifying a target
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
      className={cn("fixed inset-x-0 top-[40px] z-50 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: "blur(8px) saturate(120%)",
        WebkitBackdropFilter: "blur(8px) saturate(120%)",
        boxShadow: visible
          ? "0 8px 32px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.5)"
          : "0 8px 32px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(255, 255, 255, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.4)",
        width: visible ? "40%" : "100%",
        y: visible ? 20 : 0,
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        borderRadius: "9999px",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: visible ? "40%" : "auto",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden lg:grid w-full max-w-[1250px] items-center self-start rounded-full border border-white/40 px-4 md:px-8 lg:px-12 py-3 md:py-4 gap-4 md:gap-8 lg:gap-12",
        "!hidden lg:!grid grid-cols-[auto_1fr_auto]",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "hidden flex-row items-center justify-center space-x-2 text-[1.006rem] font-medium transition duration-200 lg:flex lg:space-x-2 min-w-0",
        className,
      )}
      style={{ color: '#121212' }}
    >
      {items.map((item, idx) => {
        const isExternal = item.link.startsWith('http');
        const LinkComponent = isExternal ? 'a' : Link;
        const linkProps = isExternal 
          ? { href: item.link, target: '_blank', rel: 'noopener noreferrer' }
          : { href: item.link };

        return (
          <LinkComponent
            onMouseEnter={() => setHovered(idx)}
            onClick={onItemClick}
            className={cn(
              "relative px-4 py-2 pointer-events-auto transition-colors duration-300"
            )}
            style={{ color: '#121212' }}
            key={`link-${idx}`}
            {...linkProps}
          >
            {hovered === idx && (
              <motion.div
                layoutId="hovered"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute inset-0 h-full w-full rounded-full border border-white/50"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1))',
                  backdropFilter: 'blur(6px) saturate(120%)',
                  WebkitBackdropFilter: 'blur(6px) saturate(120%)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.4)',
                }}
              />
            )}
            <span className="relative z-20">{item.name}</span>
          </LinkComponent>
        );
      })}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: "blur(8px) saturate(120%)",
        WebkitBackdropFilter: "blur(8px) saturate(120%)",
        boxShadow: visible
          ? "0 8px 32px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.5)"
          : "0 8px 32px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(255, 255, 255, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.4)",
        width: visible ? "95%" : "100%",
        borderRadius: visible ? "1.5rem" : "2.5rem",
        y: visible ? 10 : 0,
        backgroundColor: "rgba(255, 255, 255, 0.15)",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-1rem)] flex-col items-center justify-between border border-white/40 px-2 sm:px-4 py-2 mt-4 lg:hidden",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between px-2 sm:px-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "absolute inset-x-0 top-full mt-2 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-6 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950 overflow-hidden",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="p-2 -mr-2 flex items-center justify-center"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? (
        <IconX className="w-6 h-6 text-black dark:text-white" />
      ) : (
        <IconMenu2 className="w-6 h-6 text-black dark:text-white" />
      )}
    </button>
  );
};

export const NavbarLogo = ({ 
  src, 
  alt = "logo", 
  href = "/",
  children,
  className
}: { 
  src?: string; 
  alt?: string; 
  href?: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={cn("relative z-30 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black flex-shrink-0", className)}
    >
      {src && (
        <img
          src={src}
          alt={alt}
          width={30}
          height={30}
        />
      )}
      {children}
    </Link>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
