import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, RefreshCw, CheckCircle2 } from "lucide-react";

const insights = [
  {
    title: "Cost Per Acquisition",
    subtitle: "WhatsApp",
    value: "₹125",
    description: "Best performing channel",
    status: "success",
    icon: <CheckCircle2 className="h-4 w-4" />
  },
  {
    title: "Channel Comparison", 
    subtitle: "SMS: ₹187",
    value: "Email: ₹245 | Push: ₹312",
    description: "",
    status: "neutral",
    icon: <TrendingUp className="h-4 w-4" />
  },
  {
    title: "Optimization Opportunity",
    subtitle: "₹2.9L",
    value: "Shift 30% SMS to WhatsApp",
    description: "",
    status: "warning",
    icon: <RefreshCw className="h-4 w-4" />
  },
  {
    title: "Inactive Customers",
    subtitle: "47,500",
    value: "No engagement 90+ days",
    description: "",
    status: "alert",
    icon: <Users className="h-4 w-4" />
  }
];

export const CostOptimization = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Cost Optimization Insights</CardTitle>
        <Button variant="outline" size="sm" className="text-green-600">
          Export Cost Report
        </Button>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">Actionable recommendations to reduce spend and improve ROI, based on your last 30 days performance.</p>
        <div className="grid gap-4 md:grid-cols-4">
          {insights.map((insight, index) => (
            <div key={index} className={`p-4 rounded-lg border bg-gradient-to-br ${
              insight.status === 'success' ? 'from-green-400/10 to-green-600/10' :
              insight.status === 'warning' ? 'from-yellow-400/10 to-yellow-600/10' :
              insight.status === 'alert' ? 'from-red-400/10 to-red-600/10' :
              'from-primary/5 to-accent/10'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                {insight.icon}
                <span className="text-sm font-medium">{insight.title}</span>
              </div>
              <div className="space-y-1">
                <div className="text-lg font-semibold">{insight.subtitle}</div>
                <div className="text-sm text-muted-foreground">{insight.value}</div>
                {insight.description && (
                  <div className="text-xs text-muted-foreground">{insight.description}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* AI Cost Optimization Suggestions */}
        <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-5 rounded bg-purple-500 flex items-center justify-center text-white text-xs">AI</div>
            <span className="font-medium">AI Cost Optimization Suggestions</span>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-3 bg-white dark:bg-gray-800 rounded border">
              <h4 className="font-medium mb-2">Budget Reallocation</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Shift 30% SMS budget to WhatsApp to save ₹1.8L monthly while maintaining reach.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-green-600 font-medium">Save ₹1.8L</span>
                <Button variant="link" className="p-0 h-auto text-purple-600 text-sm">
                  Apply →
                </Button>
              </div>
            </div>

            <div className="p-3 bg-white dark:bg-gray-800 rounded border">
              <h4 className="font-medium mb-2">Timing Optimization</h4>
              <p className="text-sm text-muted-foreground mb-3">
                10-11 AM & 7-8 PM show 35% higher conversion rates. Schedule accordingly.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-green-600 font-medium">Save ₹62.0K</span>
                <Button variant="link" className="p-0 h-auto text-purple-600 text-sm">
                  Apply →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
