import HeaderItem from "./HeaderItem";
import { links } from "../lib/data";
import { LogoIcon } from "./Icons";

function Header() {
  return (
    <header className="px-6 py-8">
      <div className="wrapper flex flex-col-reverse md:flex-row gap-6 items-center justify-between">
        <div className="flex items-center justify-between flex-grow max-w-lg">
          {links.map((link) => {
            return (
              <HeaderItem key={link.id} title={link.title} Icon={link.Icon} />
            );
          })}
        </div>
        <LogoIcon />
      </div>
    </header>
  );
}

export default Header;
