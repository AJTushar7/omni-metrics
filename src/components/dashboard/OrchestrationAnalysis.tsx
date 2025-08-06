import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const OrchestrationAnalysis = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Journey Orchestration Analysis</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="rounded-lg border p-3">
          <div className="text-sm font-medium">Fallback Success</div>
          <div className="text-sm text-muted-foreground">WA ➝ SMS fallback improved delivery by <span className="text-foreground font-medium">+8.4%</span></div>
        </div>
        <div className="rounded-lg border p-3">
          <div className="text-sm font-medium">Multi-touch Conversion</div>
          <div className="text-sm text-muted-foreground">2-step orchestration (Push ➝ WA) lifts conv. by <span className="text-foreground font-medium">+13%</span></div>
        </div>
        <div className="rounded-lg border p-3">
          <div className="text-sm font-medium">Cost Impact</div>
          <div className="text-sm text-muted-foreground">Smart fallback reduces CPL by <span className="text-foreground font-medium">₹14</span></div>
        </div>
        <Badge variant="secondary" className="rounded-full">Recommendations available</Badge>
      </CardContent>
    </Card>
  );
};
