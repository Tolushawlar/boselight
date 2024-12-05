"use client";

import { motion } from "framer-motion";
import { Users, DollarSign } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const StatsCard = () => {
  return (
    <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-6">
      {[
        {
          title: "Total Users",
          value: "1,234",
          increase: "20.1%",
          icon: Users,
        },
        {
          title: "Active Users",
          value: "987",
          increase: "18.2%",
          icon: Users,
        },
        {
          title: "New Signups",
          value: "89",
          increase: "4.6%",
          icon: Users,
        },
        {
          title: "Total Donations",
          value: "$12,345",
          increase: "8.3%",
          icon: DollarSign,
        },
      ].map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {card.title}
              </CardTitle>
              <card.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              <p className="text-xs text-muted-foreground">
                +{card.increase} from last month
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};
