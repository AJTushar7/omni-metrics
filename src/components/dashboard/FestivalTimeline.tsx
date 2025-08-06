import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Holidays from "date-holidays";

const getUpcomingHolidays = () => {
  try {
    const hd = new Holidays("IN");
    const now = new Date();
    const year = now.getFullYear();
    const list = hd.getHolidays(year);
    const next90 = new Date(now.getTime() + 90 * 24 * 60 * 60 * 1000);
    return list
      .map(h => ({ name: h.name, date: new Date(h.date as any) }))
      .filter(h => h.date >= now && h.date <= next90)
      .sort((a, b) => a.date.getTime() - b.date.getTime())
      .slice(0, 6);
  } catch {
    return [] as { name: string; date: Date }[];
  }
};

export const FestivalTimeline = () => {
  const items = getUpcomingHolidays();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Festival & Holiday Timeline (IN)</CardTitle>
      </CardHeader>
      <CardContent>
        {items.length === 0 ? (
          <div className="text-sm text-muted-foreground">No upcoming holidays detected in the next 90 days.</div>
        ) : (
          <div className="space-y-3">
            {items.map(i => (
              <div key={i.name + i.date.toISOString()} className="flex items-center justify-between rounded-lg border p-3">
                <div>
                  <div className="font-medium">{i.name}</div>
                  <div className="text-sm text-muted-foreground">Plan thematic campaigns and increase budgets near this date</div>
                </div>
                <Badge variant="secondary" className="rounded-full">{i.date.toLocaleDateString()}</Badge>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
