export interface NavItem {
  name: string;
  href: string;
}

export const navItems: NavItem[] = [
  { name: "Home", href: "/home" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Team", href: "/team" },
  { name: "Events", href: "/events" },
];

export const footerItems: NavItem[] = [
  { name: "Home", href: "/home" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
];
