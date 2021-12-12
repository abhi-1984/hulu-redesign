import requests from "../lib/requests";

import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();
  console.log("router is ", router);

  return (
    <nav className="py-6 px-8 relative">
      <div className="wrapper relative">
        <div className="flex whitespace-nowrap space-x-12 sm:space-x-16 overflow-x-auto overflow-y-hidden scrollbar-hide">
          {Object.entries(requests).map(([key, { title, url }]) => {
            return (
              <button
                onClick={() => router.push(`/?genre=${key}`)}
                key={key}
                className={`cursor-pointer transition-all duration-200 transform hover:scale-110 text-2xl last:pr-24  ${
                  `/?genre=${key}` === router.asPath
                    ? "opacity-100"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                {title}
              </button>
            );
          })}
        </div>
        <div className="absolute top-0 right-0 bg-gradient-to-l from-black h-full w-2/12" />
      </div>
    </nav>
  );
}

export default Nav;
