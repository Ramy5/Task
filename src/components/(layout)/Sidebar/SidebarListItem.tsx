"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ISidebarListItem {
  path: string;
  name: string;
  blackIcon: string;
  whiteIcon: string;
}

const SidebarListItem = ({
  path,
  name,
  blackIcon,
  whiteIcon,
}: ISidebarListItem) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <li
      className={clsx(
        "w-full relative sidebar-item rounded-tl-3xl rounded-bl-3xl",
        isActive && "active"
      )}
    >
      <span className="sidebar-item-before" />

      <Link
        href={path}
        className={clsx(
          "flex items-center gap-4 pl-4 py-4",
          isActive && "bg-primary rounded-tl-4xl rounded-bl-4xl"
        )}
      >
        <Image
          src={isActive ? whiteIcon : blackIcon}
          alt={name}
          width={20}
          height={20}
        />

        <p
          className={clsx(
            "font-semibold",
            isActive ? "text-white" : "text-neutral"
          )}
        >
          {name}
        </p>
      </Link>

      <span className="sidebar-item-after" />
    </li>
  );
};

export default SidebarListItem;
