import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebarClient } from "./_AppSidebarClient";

export default function Home() {
  return (
    <SidebarProvider className="overflow-y-hidden">
      <AppSidebarClient>
        <Sidebar collapsible="icon" className="overflow-y-hidden">
          <SidebarHeader className="flex-row">
            <SidebarTrigger />
            <span className="text-xl text-nowrap">Job Board</span>
          </SidebarHeader>
          <SidebarContent>Content</SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>Abc</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <main className="flex-1">Content</main>
      </AppSidebarClient>
    </SidebarProvider>
  );
}
