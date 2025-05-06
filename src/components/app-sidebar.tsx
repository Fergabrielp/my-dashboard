"use client";
import { useTranslations } from "next-intl";

import { Frame, Map, PieChart, FileUser } from "lucide-react";

import { NavResume } from "@/components/nav-resume";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const t = useTranslations("NavMain");
  const data = {
    user: {
      name: "Invitado",
      avatar: "../../public/user-round.svg",
    },
    navResume: [
      {
        title: t("subTitle"),
        url: "#",
        icon: FileUser,
        isActive: true,
        items: [
          {
            title: t("about"),
            url: "#",
          },
          {
            title: t("experience"),
            url: "#",
          },
          {
            title: t("projects"),
            url: "#",
          },
          {
            title: t("contact"),
            url: "#",
          },
        ],
      },
    ],
    projects: [
      {
        name: t("project1"),
        url: "#",
        icon: Frame,
      },
      {
        name: t("project2"),
        url: "#",
        icon: PieChart,
      },
      {
        name: t("project3"),
        url: "#",
        icon: Map,
      },
    ],
  };
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <NavResume items={data.navResume} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
