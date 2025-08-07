import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { DollarSign, TrendingDown, Target, Lightbulb, ArrowRight } from "lucide-react";

const insights = [
  {
    title: "Cost Per Lead Reduction",
    value: "₹120",
    target: "₹85",
    reduction: 29,
    recommendation: "Switch 40% traffic from SMS to WhatsApp + Email combo",
    impact: "Save ₹2.1L monthly",
    color: "bg-gradient-to-r from-green-500 to-emerald-600",
    icon: <Target className="h-5 w-5" />
  },
  {
    title: "Channel Mix Optimization", 
    value: "₹18",
    target: "₹12",
    reduction: 33,
    recommendation: "Prioritize RCS rich cards for product catalog campaigns",
    impact: "33% better conversion",
    color: "bg-gradient-to-r from-blue-500 to-cyan-600",
    icon: <TrendingDown className="h-5 w-5" />
  },
  {
    title: "Audience Segmentation",
    value: "₹65",
    target: "₹45",
    reduction: 31,
    recommendation: "Create intent-based segments to reduce wastage by 31%",
    impact: "Increase ROAS by 2.1x",
    color: "bg-gradient-to-r from-purple-500 to-indigo-600",
    icon: <Lightbulb className="h-5 w-5" />
  }
];

export const CostOptimization = () => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950">
        <CardTitle className="flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-orange-600" />
          Smart Cost Optimization
        </CardTitle>
        <p className="text-sm text-muted-foreground">AI-powered recommendations to reduce campaign costs by up to 35%</p>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {insights.map((insight, index) => (
            <div key={index} className="group relative">
              <div className={`${insight.color} rounded-xl p-4 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    {insight.icon}
                    <Badge variant="secondary" className="bg-white/20 text-white border-0">
                      -{insight.reduction}%
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-sm mb-2">{insight.title}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">{insight.value}</span>
                      <ArrowRight className="h-4 w-4" />
                      <span className="text-xl font-semibold">{insight.target}</span>
                    </div>
                    <Progress value={insight.reduction} className="h-2 bg-white/20" />
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-xs text-muted-foreground mb-2">Recommendation:</p>
                <p className="text-sm font-medium mb-3">{insight.recommendation}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-green-600 font-medium">{insight.impact}</span>
                  <Button size="sm" variant="outline" className="h-7 text-xs">
                    Apply Changes
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="h-4 w-4 text-blue-600" />
            <span className="font-medium text-blue-900 dark:text-blue-100">Pro Tip</span>
          </div>
          <p className="text-sm text-blue-800 dark:text-blue-200">
            Implementing all three optimizations together can save up to ₹8.2L annually while maintaining current conversion rates.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
