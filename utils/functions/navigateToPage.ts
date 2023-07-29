import { NavItem } from "../constant/navItem";

export const navigateToPage = (e: any, item: NavItem, router: any) => {
  e.preventDefault();
  if (typeof window !== "undefined") {
    localStorage.setItem("@active", item.href) as any;
    localStorage.setItem("@title", item.name) as any;
  }
  item.name === "About"
    ? router.push("https://iknite.space")
    : router.push(item.href);
};
