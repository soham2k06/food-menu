"use client";

import Link from "next/link";

import { dark } from "@clerk/themes";
import { UserButton } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { ChefHat, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

function Nav() {
  const { theme } = useTheme();
  return (
    <>
      <div className="shadow">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3 p-4">
          <Link href="/notes" className="flex items-center gap-1">
            <ChefHat />

            <span className="font-bold">NoteSwift</span>
          </Link>
          <div className="flex items-center gap-2">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                baseTheme: theme === "dark" ? dark : undefined,
                elements: {
                  avatarBox: {
                    width: "2.5rem",
                    height: "2.5rem",
                    backgroundColor: "white",
                  },
                },
              }}
            />
            <ThemeToggle />
            <Button>
              <Plus size={20} className="mr-2" />
              Add Note
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
