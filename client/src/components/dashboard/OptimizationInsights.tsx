import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lightbulb, TrendingUp, Users, Target, Clock, RefreshCw } from "lucide-react";

const insights = [
  {
    icon: <Target className="h-5 w-5" />,
    title: "Channel Mix Optimization",
    description: "Switch 30% SMS traffic to WhatsApp",
    impact: "32% cost reduction",
    confidence: 94
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Timing Optimization",
    description: "Send campaigns during peak hours (6-8 PM)",
    impact: "28% engagement boost",
    confidence: 89
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Audience Segmentation",
    description: "Create intent-based customer segments",
    impact: "45% conversion uplift",
    confidence: 91
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Cross-Channel Strategy", 
    description: "Use WhatsApp for warm leads, Email for nurturing",
    impact: "38% ROI improvement",
    confidence: 87
  },
  {
    icon: <Lightbulb className="h-5 w-5" />,
    title: "Creative Optimization",
    description: "A/B test RCS rich media vs standard messages", 
    impact: "52% CTR increase",
    confidence: 82
  },
  {
    icon: <RefreshCw className="h-5 w-5" />,
    title: "Inactive Customer Revival",
    description: "Re-engage 2,847 dormant customers with personalized offers",
    impact: "₹1.2L potential revenue",
    confidence: 76
  }
];

export const OptimizationInsights = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-blue-600" />
          AI-Powered Optimization Insights
        </CardTitle>
        <p className="text-sm text-muted-foreground">Smart recommendations to maximize campaign performance</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {insights.map((insight, index) => (
            <div key={index} className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800 hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                  {insight.icon}
                </div>
                <Badge variant="secondary" className="text-xs">
                  {insight.confidence}% confidence
                </Badge>
              </div>
              <h3 className="font-semibold text-sm mb-2 leading-tight">{insight.title}</h3>
              <p className="text-xs text-muted-foreground mb-3">{insight.description}</p>
              <div className="space-y-2">
                <p className="text-sm font-medium text-green-600">{insight.impact}</p>
                <Button variant="outline" size="sm" className="w-full h-7 text-xs">
                  Apply Insight
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};