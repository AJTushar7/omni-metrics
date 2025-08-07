import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ResponsiveContainer, Sankey, Cell } from "recharts";
import { ArrowRight, Zap, TrendingUp } from "lucide-react";

const journeyData = [
  { step: "Initial Send", channel: "WhatsApp", success: 85, failed: 15, cost: 120000 },
  { step: "Fallback 1", channel: "SMS", success: 78, failed: 7, cost: 45000 },
  { step: "Fallback 2", channel: "Email", success: 65, failed: 2, cost: 15000 },
  { step: "Final", channel: "Push", success: 12, failed: 0, cost: 8000 }
];

const orchestrationPaths = [
  { path: "WA → SMS → Email", customers: 45000, successRate: 78, avgCPL: 142 },
  { path: "Push → WA → SMS", customers: 32000, successRate: 82, avgCPL: 138 },
  { path: "Email → WA → SMS", customers: 28000, successRate: 75, avgCPL: 156 },
  { path: "WA → Email → Push", customers: 18000, successRate: 71, avgCPL: 164 }
];

export const OrchestrationAnalysis = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-brand" />
          Journey Orchestration Analysis
        </CardTitle>
        <Badge variant="secondary" className="rounded-full">4 Active Orchestrations</Badge>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Journey Flow Visualization */}
        <div className="space-y-3">
          <div className="text-sm font-medium">Customer Journey Flow</div>
          <div className="grid gap-3">
            {journeyData.map((step, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="flex-1 rounded-lg border p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-sm">{step.step}</div>
                    <Badge variant="outline" className="rounded-full">{step.channel}</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Success Rate</span>
                      <span className="font-medium">{step.success}%</span>
                    </div>
                    <Progress value={step.success} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Cost: ₹{(step.cost / 1000).toFixed(0)}K</span>
                      <span>Failed: {step.failed}%</span>
                    </div>
                  </div>
                </div>
                {idx < journeyData.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Orchestration Paths Performance */}
        <div className="space-y-3">
          <div className="text-sm font-medium">Top Performing Orchestration Paths</div>
          <div className="grid gap-2">
            {orchestrationPaths.map((path, idx) => (
              <div key={idx} className="rounded-lg border p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium text-sm">{path.path}</div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-3 w-3 text-success" />
                    <span className="text-sm font-medium">{path.successRate}%</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-xs">
                  <div>
                    <div className="text-muted-foreground">Customers</div>
                    <div className="font-medium">{(path.customers / 1000).toFixed(0)}K</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Avg CPL</div>
                    <div className="font-medium">₹{path.avgCPL}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Performance</div>
                    <div className="font-medium text-success">
                      {idx === 0 ? "Best" : idx === 1 ? "Good" : "Average"}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insights */}
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border p-3">
            <div className="text-sm font-medium">Fallback Success</div>
            <div className="text-sm text-muted-foreground">WA ➝ SMS fallback improved delivery by <span className="text-foreground font-medium">+8.4%</span></div>
          </div>
          <div className="rounded-lg border p-3">
            <div className="text-sm font-medium">Multi-touch Conversion</div>
            <div className="text-sm text-muted-foreground">2-step orchestration lifts conversion by <span className="text-foreground font-medium">+13%</span></div>
          </div>
          <div className="rounded-lg border p-3">
            <div className="text-sm font-medium">Cost Optimization</div>
            <div className="text-sm text-muted-foreground">Smart orchestration reduces CPL by <span className="text-foreground font-medium">₹14</span></div>
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="rounded-lg bg-muted/50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="h-4 w-4 text-brand" />
            <span className="font-medium text-sm">AI Recommendations</span>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div>• Switch to Push → WA → SMS path for 23% better conversion on prospects</div>
            <div>• Reduce email timeout from 24h to 12h to improve fallback efficiency</div>
            <div>• Add RCS as primary for customers with RCS capability (estimated +15% engagement)</div>
          </div>
          <Button size="sm" className="mt-3">Apply Recommendations</Button>
        </div>
      </CardContent>
    </Card>
  );
};
