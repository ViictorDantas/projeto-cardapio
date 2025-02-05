import { Link } from "@heroui/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";

import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="footer w-full flex items-center justify-center py-3">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-4 grid-flow-col grid-rows-2 gap-4 flex items-center justify-center">
            <div className="row-span-3">
              |esquerda|
            </div>
            <div className="row-span-3">
              |direita|
            </div>
          </div>
          <div className="col-span-full hidden sm:flex gap-2 justify-center">
            <Link isExternal href={siteConfig.links.twitter} title="Twitter">
              <TwitterIcon className="text-default-500" />
            </Link>
            <Link isExternal href={siteConfig.links.discord} title="Discord">
              <DiscordIcon className="text-default-500" />
            </Link>
            <Link isExternal href={siteConfig.links.github} title="GitHub">
              <GithubIcon className="text-default-500" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
