import { cn } from "@/util/utils";
import Link from "next/link";
import React, { ReactNode } from "react";

const Separator = ({
  className,
  leftItem,
  rightItem,
  link,
  variant = "muted",
  animated = false,
  textName,
  borderName
}: {
  className?: string;
  leftItem?: ReactNode | string;
  rightItem?: ReactNode | string;
  link?: string;
  variant?: "muted" | "primary";
  animated?: boolean;
  textName?: string;
  borderName?: string;
}) => {
  const textClass = {
    muted: "text-muted-foreground/40",
    primary: "text-muted-foreground"
  };

  const borderClass = {
    muted: "bg-muted-foreground/40",
    primary: "bg-muted-foreground"
  };

  return (
    <div
      className={cn(
        `w-full flex items-center gap-x-2 md:gap-x-4 group`,
        className
      )}
    >
      {leftItem && (
        <h3
          className={cn(
            `font-medium text-xs md:text-sm anim text-left`,
            textClass[variant],
            animated && textName
          )}
        >
          {leftItem}
        </h3>
      )}
      <div className={cn(`w-auto grow h-[1px] relative`, borderClass[variant])}>
        <div
          className={cn(
            `w-0 group-hover:w-full h-[1px] absolute anim-slow`,
            animated && borderName
          )}
        />
      </div>
      {rightItem && (
        <h3
          className={cn(
            `anim-slow font-medium text-xs md:text-sm text-right`,
            textClass[variant],
            animated && textName
          )}
        >
          {link ? (
            <Link
              href={link.startsWith("http") ? link : `https://${link}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {rightItem}
            </Link>
          ) : (
            rightItem
          )}
        </h3>
      )}
    </div>
  );
};

export default Separator;
