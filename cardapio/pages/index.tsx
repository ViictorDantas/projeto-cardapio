import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { useState } from "react";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Input } from "@heroui/input";
import CardComponent from "../components/CardComponent";

export const SearchIcon = (props) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

export default function IndexPage() {
  const list = [
    {
      title: "Orange",
      img: "/images/foto1.png",
      price: "R$5.50",
    },
    {
      title: "Tangerine",
      img: "/images/foto1.png",
      price: "R$3.00",
    },
    {
      title: "Raspberry",
      img: "/images/foto1.png",
      price: "R$10.00",
    },
    {
      title: "Lemon",
      img: "/images/foto1.png",
      price: "R$5.30",
    },
    {
      title: "Raspberry",
      img: "/images/foto1.png",
      price: "R$10.00",
    },
    {
      title: "Lemon",
      img: "/images/foto1.png",
      price: "R$5.30",
    },
    {
      title: "Tangerine",
      img: "/images/foto1.png",
      price: "R$3.00",
    },
    {
      title: "Raspberry",
      img: "/images/foto1.png",
      price: "R$10.00",
    },
    {
      title: "Lemon",
      img: "/images/foto1.png",
      price: "R$5.30",
    },
    {
      title: "Raspberry",
      img: "/images/foto1.png",
      price: "R$10.00",
    },
    {
      title: "Lemon",
      img: "/images/foto1.png",
      price: "R$5.30",
    },
  ];

  const [showRightButton, setShowRightButton] = useState(false);

  const handleLeftButtonClick = () => {
    document.getElementById('promo-carousel').scrollLeft += 200;
    setShowRightButton(true);
  };

  return (
    <DefaultLayout>
      <h1 className="text-center font-lactosa text-5xl mb-8">Cardápio Digital</h1>
      <div>
        <Input
          isClearable
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "bg-default-200/50",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focus=true]:bg-default-200/50",
              "dark:group-data-[focus=true]:bg-default/60",
              "!cursor-text",
            ],
          }}
          placeholder="Pesquise por um item"
          radius="lg"
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
        />
      </div>

      {/* Seção de Promoções */}
      <div className="mt-8 mb-2">
        <h2 className="font-inter font-semibold text-3xl">Promoções</h2>
        <div className="relative">
          <div
            id="promo-carousel"
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-4 p-2 scrollbar-hide"
          >
            {list.map((item, index) => (
              <div key={index} className="snap-start flex-shrink-0">
                <CardComponent item={item} />
              </div>
            ))}
          </div>
          {showRightButton &&  (
          <button
            className="absolute left-[-35] top-1/2 -translate-y-1/2 bg-gray p-2 rounded-full z-10"
            onClick={() => (document.getElementById('promo-carousel').scrollLeft -= 200)}
          >
            ◀
          </button>
          )}
          {list.length > 8 && (
          <button
            className="absolute right-[-35] top-1/2 -translate-y-1/2 bg-gray p-2 rounded-full z-10"
            onClick={handleLeftButtonClick}
          >
            ▶
          </button>
          )}
        </div>
      </div>

      {/* Seção de Petiscos */}
      <div className="mt-8 mb-2">
        <h2 className="font-inter font-semibold text-3xl">Promoções</h2>
        <div className="relative">
          <div
            id="promo-carousel"
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-4 p-2 scrollbar-hide"
          >
            {list.map((item, index) => (
              <div key={index} className="snap-start flex-shrink-0">
                <CardComponent item={item} />
              </div>
            ))}
          </div>
          {showRightButton &&  (
          <button
            className="absolute left-[-35] top-1/2 -translate-y-1/2 bg-gray p-2 rounded-full z-10"
            onClick={() => (document.getElementById('promo-carousel').scrollLeft -= 200)}
          >
            ◀
          </button>
          )}
          {list.length > 8 && (
          <button
            className="absolute right-[-35] top-1/2 -translate-y-1/2 bg-gray p-2 rounded-full z-10"
            onClick={handleLeftButtonClick}
          >
            ▶
          </button>
          )}
        </div>
      </div>

      {/* Seção de Cuscuz */}
      <div className="mt-8 mb-2">
        <h2 className="font-inter font-semibold text-3xl">Cuscuz</h2>
        <div className="relative">
          <div
            id="promo-carousel"
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-4 p-2 scrollbar-hide"
          >
            {list.map((item, index) => (
              <div key={index} className="snap-start flex-shrink-0">
                <CardComponent item={item} />
              </div>
            ))}
          </div>
          {showRightButton &&  (
          <button
            className="absolute left-[-35] top-1/2 -translate-y-1/2 bg-gray p-2 rounded-full z-10"
            onClick={() => (document.getElementById('promo-carousel').scrollLeft -= 200)}
          >
            ◀
          </button>
          )}
          {list.length > 8 && (
          <button
            className="absolute right-[-35] top-1/2 -translate-y-1/2 bg-gray p-2 rounded-full z-10"
            onClick={handleLeftButtonClick}
          >
            ▶
          </button>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
}
