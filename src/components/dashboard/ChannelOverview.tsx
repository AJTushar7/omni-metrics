import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const channels = [
  { name: "WhatsApp", delivery: 97.8, engagement: 82.1, cpm: 0.08, recommended: true },
  { name: "SMS", delivery: 94.2, engagement: 58.4, cpm: 0.12 },
  { name: "Email", delivery: 96.0, engagement: 41.2, cpm: 0.03 },
  { name: "Push", delivery: 92.5, engagement: 38.6, cpm: 0.02 },
  { name: "RCS", delivery: 89.3, engagement: 71.8, cpm: 0.15 },
];

export const ChannelOverview = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3">{/* Fixed desktop layout */}
      {channels.map((c) => (
        <Card key={c.name}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">{c.name}</CardTitle>
              {c.recommended && (
                <Badge variant="secondary" className="rounded-full">RECOMMENDED</Badge>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Delivery</span>
                <span>{c.delivery}%</span>
              </div>
              <Progress value={c.delivery} />
            </div>
            <div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Engagement</span>
                <span>{c.engagement}%</span>
              </div>
              <Progress value={c.engagement} />
            </div>
            <div className="text-sm"><span className="text-muted-foreground">CPM:</span> ₹{c.cpm.toFixed(2)}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
