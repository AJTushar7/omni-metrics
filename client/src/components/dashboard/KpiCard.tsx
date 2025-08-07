import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface KpiCardProps {
  title: string;
  value: string;
  subtitle?: string;
  trendLabel?: string;
  trendPositive?: boolean;
  icon?: ReactNode;
}

export const KpiCard = ({ title, value, subtitle, trendLabel, trendPositive = true, icon }: KpiCardProps) => {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
          {icon && <div className="text-primary/70">{icon}</div>}
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="text-3xl font-semibold tracking-tight">{value}</div>
        {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
        {trendLabel && (
          <div className="mt-3">
            <Badge
              variant="secondary"
              className={cn(
                "rounded-full",
                trendPositive ? "bg-success/15 text-success" : "bg-destructive/15 text-destructive"
              )}
            >
              {trendLabel}
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
