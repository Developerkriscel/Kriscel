export interface SolutionLink {
  name: string;
  href: string;
}

export interface SolutionCategory {
  title: string;
  href?: string;
  links: SolutionLink[];
}

export type SolutionColumns = SolutionCategory[][];

export interface DynamicServiceOption {
  title?: string;
  slug?: string;
  category?: string;
}

export const SOLUTIONS_COLS: SolutionColumns = [
  [
    {
      title: "Business Automation",
      href: "/business-automation",
      links: [
        { name: "Inventory Management System", href: "/inventory-management-system" },
        { name: "Production Management System", href: "/production-management-system" },
        { name: "Purchase Management System", href: "/purchase-management-system" },
        { name: "HR Management System", href: "/hr-management-system" },
        { name: "Employee Task Management System", href: "/employee-task-management-system" },
        { name: "Account Management System", href: "/account-management-system" },
      ],
    },
  ],
  [
    {
      title: "Digital Marketing",
      href: "/digital-marketing",
      links: [
        { name: "Search Engine Optimization (SEO)", href: "/search-engine-optimization" },
        { name: "Social media optimization (SMO)", href: "/social-media-optimization" },
        { name: "Paid Ads Management", href: "/paid-ads-management" },
        { name: "GMB Creation", href: "/gmb-creation" },
        { name: "Content Marketing", href: "/content-marketing" },
        { name: "Web Development", href: "/web-development" },
        { name: "Web Designing", href: "/web-designing" },
        { name: "Online reputation Management", href: "/online-reputation-management" },
        { name: "Indiamart Account Management", href: "/indiamart-account-management" },
      ],
    },
  ],
  [
    {
      title: "Ecommerce Services",
      href: "/ecommerce-services",
      links: [
        { name: "Account Creation", href: "/account-creation" },
        { name: "Account Management", href: "/account-management" },
        { name: "Catalog Management", href: "/catalog-management" },
        { name: "ADS Campaign Management", href: "/ads-campaign-management" },
      ],
    },
    {
      title: "Services",
      links: [{ name: "Recruitment", href: "/recruitment" }],
    },
  ],
];

export function mergeDynamicServices(services: DynamicServiceOption[] = []): SolutionColumns {
  const columns = SOLUTIONS_COLS.map((column) =>
    column.map((category) => ({
      ...category,
      links: [...category.links],
    }))
  );

  services.forEach((service) => {
    if (!service.title || !service.slug || !service.category) return;

    let found = false;
    for (const column of columns) {
      for (const category of column) {
        if (category.title === service.category) {
          category.links.push({ name: service.title, href: `/${service.slug}` });
          found = true;
        }
      }
    }

    if (!found) {
      columns[2].push({
        title: service.category,
        links: [{ name: service.title, href: `/${service.slug}` }],
      });
    }
  });

  return columns;
}

