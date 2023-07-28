import { SideBarItem } from "../constants/default.sidbar-item";
export const navigateToPage = (e: any, item: SideBarItem, router: any) => {
  e.preventDefault();
  if (typeof window !== "undefined") {
    localStorage.setItem("@active", item.href) as any;
    localStorage.setItem("@title", item.label) as any;
  }
  router.push(item.href);
};
