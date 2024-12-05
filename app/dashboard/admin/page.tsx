import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { UserTable } from "@/components/admin/user-table";
import { StatsCard } from "@/components/admin/StatsCard";

import { checkRole } from "@/utils/roles";

export default async function AdminDashboard() {
  if (!checkRole("admin")) {
    redirect("/");
  }
  // Get the currently logged-in user's ID
  const currentUserInfo = await currentUser();
  const currentUserId = currentUserInfo?.id;

  const client = await clerkClient();

  const { data } = await client.users.getUserList({
    orderBy: "-created_at",
  });

  const filteredData = data.filter((user) => user.id !== currentUserId);

  const plainData = JSON.parse(JSON.stringify(filteredData));

  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 md:p-6">
      <StatsCard />

      <UserTable data={plainData ?? []} />
    </main>
  );
}
