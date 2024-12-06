export type User = {
  id: string;
  name: string;
  email: string;
  status: "active" | "inactive";
  role: string;
  lastActive: string;
};
