import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const CostOptimization = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cost Optimization Panels</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border p-4">
          <div className="text-sm text-muted-foreground">CPL</div>
          <div className="text-2xl font-semibold">₹120</div>
          <Badge variant="secondary" className="mt-2 rounded-full">Reduce by prioritizing WA + Email</Badge>
        </div>
        <div className="rounded-lg border p-4">
          <div className="text-sm text-muted-foreground">CPC</div>
          <div className="text-2xl font-semibold">₹18</div>
          <Badge variant="secondary" className="mt-2 rounded-full">Optimize creatives for RCS rich cards</Badge>
        </div>
        <div className="rounded-lg border p-4">
          <div className="text-sm text-muted-foreground">CPM</div>
          <div className="text-2xl font-semibold">₹65</div>
          <Badge variant="secondary" className="mt-2 rounded-full">Segment by recent intent to cut waste</Badge>
        </div>
      </CardContent>
    </Card>
  );
};
