"use client";
import Image from "next/image";
import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu as NavigationMenuPrimitive,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="py-4 px-6 bg-zinc-950 md:flex justify-between items-center align-middle">
      <div className="flex w-full md:w-auto justify-center ">
        <Link href="/" prefetch>
                  <Image
          className="mb-4 md:mb-0 max-h-14 md:max-h-16 w-auto"
          src="/logo.png"
          alt="Logo"
          width={300}
          height={300}
        />

        </Link>
      </div>
      <div className="flex justify-center w-full">
        <NavigationMenu />
      </div>
      <Link href="/evaluation">
              <Button variant="outline" className="border-yellow-400 bg-transparent text-yellow-400 hidden md:block hover:bg-yellow-400 hover:text-white">Apply Now</Button>
      </Link>
    </header>
  );
}
export function NavigationMenu() {
  return (
    <NavigationMenuPrimitive className="dark text-white">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <NavMenuLabel>About</NavMenuLabel>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <NavMenuLabel>Immigration Programs</NavMenuLabel>
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3 hidden md:block">
                <NavigationMenuLink asChild>
                  <a className="relative block h-full" href="/vacation">
                    <Image
                      src="/vacation.png"
                      alt="Logo"
                      width={400}
                      height={600}
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted no-underline outline-none focus:shadow-md object-cover brightness-75"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-4">
                      <div className="text-lg font-medium text-white">
                        Vacation Visa
                      </div>
                      <p className="text-sm leading-tight text-white/90">
                        Expert guidance for your short-term travel needs,
                        ensuring a smooth and enjoyable getaway.
                      </p>
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/work" title="Work Permit">
                Navigate the complexities of obtaining a work permit with our
                comprehensive support and resources.
              </ListItem>
              <ListItem href="/study" title="Study Permit">
                Personalized assistance for securing study permits, helping you
                achieve your educational dreams.
              </ListItem>
              <ListItem href="/business" title="Business Immigration">
                Consulting for businesses owners looking to expand their
                operations internationally.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="#footer" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <NavMenuLabel>Contact</NavMenuLabel>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenuPrimitive>
  );
}

const NavMenuLabel = ({ children }: { children: React.ReactNode }) => {
  return <p className="md:text-lg ">{children}</p>;
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-3 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
