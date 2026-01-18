import type { ReactElement } from "react";

interface SideBarProps {
  text: string;
  icon: ReactElement;
}

export const SidebarItem = ({ text, icon }: SideBarProps) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-200">
      <div className="pr-2 pl-2">
        {icon}
      </div>
      <div className="p-2">
        {text}
      </div>
    </div>
  );
};
