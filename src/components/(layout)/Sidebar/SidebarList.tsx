import { sidebarList } from "@/constants/constants";
import SidebarListItem from "./SidebarListItem";

const SidebarList = () => {
  return (
    <ul className="flex flex-col my-8">
      {sidebarList.map((item, i) => (
        <SidebarListItem key={i} {...item} />
      ))}
    </ul>
  );
};

export default SidebarList;
