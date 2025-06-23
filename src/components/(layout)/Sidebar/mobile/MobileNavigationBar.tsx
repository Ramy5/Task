"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IMobileNavigationBar {
  path: string;
  name: string;
  blackIcon: string;
  whiteIcon: string;
}

const MobileNavigationBar = ({
  path,
  name,
  blackIcon,
  whiteIcon,
}: IMobileNavigationBar) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <li
      className={clsx(
        "w-full relative rounded-bl-3xl sidebar-mobile-item rounded-br-3xl",
        isActive ? "active" : ""
      )}
    >
      <span className="sidebar-mobile-item-before"></span>
      <Link
        href={path}
        className={clsx(
          "flex items-center gap-4 pl-4  py-4",
          isActive ? "bg-primary rounded-bl-4xl rounded-br-4xl" : ""
        )}
      >
        <Image
          src={isActive ? whiteIcon : blackIcon}
          alt={name}
          width={25}
          height={25}
        />
      </Link>
      <span className="sidebar-mobile-item-after"></span>
    </li>
  );
};

export default MobileNavigationBar;
