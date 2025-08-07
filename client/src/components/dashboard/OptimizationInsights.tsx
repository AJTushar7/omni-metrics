import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Lightbulb, TrendingUp, Users, Target, Clock, ArrowRight } from "lucide-react";

const insights = [
  {
    icon: <Target className="h-5 w-5" />,
    title: "Channel Mix Optimization",
    description: "Switch 30% SMS traffic to WhatsApp",
    impact: "32% cost reduction",
    confidence: 94,
    color: "bg-gradient-to-r from-blue-500 to-blue-600"
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Timing Optimization",
    description: "Send campaigns during peak hours (6-8 PM)",
    impact: "28% engagement boost",
    confidence: 89,
    color: "bg-gradient-to-r from-green-500 to-green-600"
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Audience Segmentation",
    description: "Create intent-based customer segments",
    impact: "45% conversion uplift",
    confidence: 91,
    color: "bg-gradient-to-r from-purple-500 to-purple-600"
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Cross-Channel Strategy",
    description: "Use WhatsApp for warm leads, Email for nurturing",
    impact: "38% ROI improvement",
    confidence: 87,
    color: "bg-gradient-to-r from-orange-500 to-orange-600"
  },
  {
    icon: <Lightbulb className="h-5 w-5" />,
    title: "Creative Optimization",
    description: "A/B test RCS rich media vs standard messages",
    impact: "52% CTR increase",
    confidence: 82,
    color: "bg-gradient-to-r from-pink-500 to-pink-600"
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Inactive Customer Revival",
    description: "Re-engage 2,847 dormant customers with personalized offers",
    impact: "₹1.2L potential revenue",
    confidence: 76,
    color: "bg-gradient-to-r from-teal-500 to-teal-600"
  }
];

export const OptimizationInsights = () => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950">
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-indigo-600" />
          AI-Powered Optimization Insights
        </CardTitle>
        <p className="text-sm text-muted-foreground">Smart recommendations to maximize campaign performance</p>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {insights.map((insight, index) => (
            <div key={index} className="relative group border-r last:border-r-0 border-b md:border-b-0">
              <div className={`${insight.color} p-4 text-white relative overflow-hidden h-full`}>
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mr-8 -mt-8"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    {insight.icon}
                    <Badge variant="secondary" className="bg-white/20 text-white border-0 text-xs">
                      {insight.confidence}% confidence
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-sm mb-2 leading-tight">{insight.title}</h3>
                  <p className="text-xs opacity-90 mb-3 flex-1">{insight.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium">Impact</span>
                      <ArrowRight className="h-3 w-3" />
                    </div>
                    <p className="text-sm font-bold">{insight.impact}</p>
                    <Progress value={insight.confidence} className="h-1 bg-white/20" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};