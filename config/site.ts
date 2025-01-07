export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "StableCoin",
  mainNav: [
    {
      title: "Deposit/Withdraw",
      href: "/admin",
    },
    {
      title: "Liquidate",
      href: "/admin/liquidate",
    },
    {
      title: "Config",
      href: "/admin/config",
    },
  ],
};
