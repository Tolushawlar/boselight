import { redirect } from "next/navigation";

import { checkRole } from "@/utils/roles";
import { clerkClient } from "@clerk/nextjs/server";
import { UserTable } from "@/components/admin/user-table";
import { StatsCard } from "@/components/admin/StatsCard";

export default async function AdminDashboard(params: {
  searchParams: Promise<{ search?: string }>;
}) {
  if (!checkRole("admin")) {
    redirect("/");
  }

  const query = (await params.searchParams).search;

  const client = await clerkClient();

  const users = query ? (await client.users.getUserList({ query })).data : [];

  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 md:p-6">
      <StatsCard />

      <UserTable data={users} />
    </main>
  );
}
