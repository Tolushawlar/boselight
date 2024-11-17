"use client";

import {
  User,
  DollarSign,
  Calendar,
  Settings,
  LogOut,
  LayoutDashboard,
  Users,
} from "lucide-react";
import { ReactNode } from "react";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const NavItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "#" },
  { icon: Users, label: "Users", href: "#" },
  { icon: DollarSign, label: "Donations", href: "#" },
  { icon: Calendar, label: "Volunteering", href: "#" },
  { icon: User, label: "Profile", href: "#" },
  { icon: DollarSign, label: "Donations", href: "#" },
  { icon: Settings, label: "Settings", href: "#" },
];

const AdminDashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-[#F9F5E8] flex-1">
        <Sidebar>
          <SidebarHeader className="flex h-16 items-center justify-center">
            <h2 className="px-4 text-lg font-semibold">Admin Dashboard</h2>
          </SidebarHeader>

          <SidebarContent>
            <SidebarMenu>
              {NavItems.map((item) => (
                <SidebarMenuItem key={item.label} className="px-4">
                  <SidebarMenuButton asChild>
                    <Link href={item.href}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.label}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>

          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="text-red-500 hover:text-red-600 hover:bg-red-50">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset>
          <header className="flex h-16 items-center border-b px-4">
            <SidebarTrigger />
            <h1 className="text-2xl font-bold text-gray-900 ml-4">
              Admin Dashboard
            </h1>
          </header>
          {children}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboardLayout;
