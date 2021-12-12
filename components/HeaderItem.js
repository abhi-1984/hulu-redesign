import { TooltipContent } from "@radix-ui/react-tooltip";
import { Tooltip, TooltipArrow, TooltipTrigger } from "./Tooltip";

function HeaderItem({ title, Icon }) {
  return (
    <Tooltip className="relative">
      <TooltipTrigger className="focus:outline-none focus:bg-white focus:bg-opacity-10 p-2 rounded-md   ">
        <div className="w-8 h-8 ">
          <Icon className="h-full" />
        </div>
      </TooltipTrigger>
      <TooltipContent className="absolute bg-white text-black px-3 py-1 rounded-full mt-2">
        {title}
        <TooltipArrow className="fill-white" width={10} />
      </TooltipContent>
    </Tooltip>
  );
}

export default HeaderItem;
