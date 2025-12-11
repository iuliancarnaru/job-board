import AppSidebar from "@/components/sidebar/AppSidebar";
import { ClipboardListIcon, PlusIcon } from "lucide-react";

import { SidebarNavMenuGroup } from "@/components/sidebar/SidebarNavMenuGroup";
import {
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { SidebarOrganizationButton } from "@/features/organizations/components/SidebarOrganizationButton";
import { Suspense } from "react";
import { getCurrentOrganization } from "@/services/clerk/lib/getCurrentAuth";
import { redirect } from "next/navigation";

export default function EmployerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <LayoutSuspense>{children}</LayoutSuspense>
    </Suspense>
  );
}

async function LayoutSuspense({ children }: { children: React.ReactNode }) {
  const { orgId } = await getCurrentOrganization();

  if (orgId == null) return redirect("/organizations/select");

  return (
    <AppSidebar
      content={
        <>
          <SidebarGroup>
            <SidebarGroupLabel>Job listings</SidebarGroupLabel>
            <SidebarGroupAction title="Add job listing" asChild>
              <Link href="/employer/job-listings/new">
                <PlusIcon />
                <span className="sr-only">Add a job listing</span>
              </Link>
            </SidebarGroupAction>
          </SidebarGroup>
          <SidebarNavMenuGroup
            className="mt-auto"
            items={[
              { href: "/", icon: <ClipboardListIcon />, label: "Job Board" },
            ]}
          />
        </>
      }
      footerButton={<SidebarOrganizationButton />}
    >
      {children}
    </AppSidebar>
  );
}
