"use client";
import React from "react";
import HStack from "@/components/ui/HStack";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Avatar from "@/components/ui/Avatar";
import { RiLogoutCircleLine } from "../../Icons/Icons";
import { IPrimaryNavigationList } from "@/types/components/primaryTopNav/primaryTopNav.types";
import { Fragment } from "react";
import { PrimaryTopNavigationList } from "./PrimaryTopNav.data";
import Link from "next/link";
import { useAppDispatch } from "@/lib/hooks";
import { setAuthModal } from "@/lib/features/auth/authSlice";

export default function PrimaryTopNavClient() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  return (
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

      {
        <HStack>
          <button
            className="btn-solid"
            onClick={() => dispatch(setAuthModal("login"))}
          >
            Login
          </button>
          <button
            className="btn-solid"
            onClick={() => dispatch(setAuthModal("signup"))}
          >
            Register
          </button>
        </HStack>
      }
      {/* <Menu>
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
      </Menu> */}
    </div>
  );
}
