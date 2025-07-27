"use client";
import { Fragment } from "react";
import { PrimaryTopNavigationList } from "./PrimaryTopNav.data";
import Link from "next/link";
// import { RiLogoutCircleLine } from "../../Icons/Icons";
import { IPrimaryNavigationList } from "@/types/components/primaryTopNav/primaryTopNav.types";
import Image from "../../NextImageWrapper/Image";
import HStack from "@/components/ui/HStack";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Avatar from "@/components/ui/Avatar";
import { RiLogoutCircleLine } from "../../Icons/Icons";

export default function PrimaryTopNav() {
  const pathname = usePathname();
  return (
    <div className="flex items-center sticky top-0 left-0 z-[1500] justify-between py-2 md:py-4 px-4 md:px-6 lg:px-8 2xl:px-32 pb-1 md:pb-4 w-[max-content] md:w-[100%] h-[4rem] md:h-[5rem] bg-transparent lg:bg-white shadow-none lg:shadow-[0px_0px_12.0198px_rgba(0,0,0,0.2)]">
      <Link href="/">
        <Image
          src="/logo/logo-orange.webp"
          alt="pickmymaid"
          parentClass="w-[8rem] md:w-[11rem] aspect-[155/42]"
        />
      </Link>
      <div className="items-center gap-4 hidden lg:flex">
        {PrimaryTopNavigationList.map((item: IPrimaryNavigationList, index) => {
          if (item.name.includes("hiringTips")) {
            return false;
          }
          return (
            <Fragment key={index}>
              <Link
                href={item.path}
                className={clsx(
                  "text-sm xl:text-md font-[500]",
                  pathname === item.path || pathname === `${item.path}/`
                    ? "text-primary-300"
                    : "text-black-700"
                )}
                key={item.name}
              >
                {item.name}
              </Link>
            </Fragment>
          );
        })}

        {/* {
          <HStack>
            <button className="btn-solid">Login</button>
            <button className="btn-solid">Register</button>
          </HStack>
        } */}
        <Menu>
          <MenuButton className="flex flex-col justify-center cursor-pointer items-center gap-2 outline-none border-none">
            <Avatar
              size={40}
              // src={user?.profile}
              alt="John Doe"
            />
            <p className="text-[0.8rem] text-black-700">John Doe</p>
          </MenuButton>
          <MenuItems
            anchor="bottom"
            className="rounded-xl bg-white shadow-xl z-2000 ring-1 ring-black/5 focus:outline-none"
          >
            <MenuItem>
              <HStack className="p-2 items-center hover:bg-gray-100 cursor-pointer">
                <RiLogoutCircleLine
                  className="text-[red]"
                  width={16}
                  height={16}
                />
                <span className="text-[red]">Logout</span>
              </HStack>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
}
