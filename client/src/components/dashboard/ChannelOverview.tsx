import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, Target } from "lucide-react";

const channels = [
  { name: "WhatsApp", delivery: 97.8, engagement: 82.1, cpm: 0.08, color: "#25D366", recommended: true },
  { name: "SMS", delivery: 94.2, engagement: 58.4, cpm: 0.12, color: "#FF6B6B" },
  { name: "Email", delivery: 96.0, engagement: 41.2, cpm: 0.03, color: "#4ECDC4" },
  { name: "Push", delivery: 92.5, engagement: 38.6, cpm: 0.02, color: "#45B7D1" },
  { name: "RCS", delivery: 89.3, engagement: 71.8, cpm: 0.15, color: "#96CEB4" },
];

export const ChannelOverview = () => {
  const [activeMetric, setActiveMetric] = useState<'delivery' | 'engagement'>('delivery');
  
  const chartData = channels.map(channel => ({
    name: channel.name,
    value: activeMetric === 'delivery' ? channel.delivery : channel.engagement,
    color: channel.color,
    recommended: channel.recommended
  }));

  return (
    <Card className="h-[400px]">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-500" />
            Channel Performance
          </CardTitle>
          <div className="flex gap-2">
            <Button 
              variant={activeMetric === 'delivery' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveMetric('delivery')}
              className="h-8"
            >
              <Target className="h-3 w-3 mr-1" />
              Delivery Rate
            </Button>
            <Button 
              variant={activeMetric === 'engagement' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveMetric('engagement')}
              className="h-8"
            >
              <TrendingUp className="h-3 w-3 mr-1" />
              Engagement Rate
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 12 }}
              axisLine={false}
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              axisLine={false}
              domain={[0, 100]}
            />
            <Tooltip 
              content={({ active, payload, label }) => {
                if (active && payload && payload[0]) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-white dark:bg-gray-800 p-3 border rounded-lg shadow-lg">
                      <p className="font-medium">{label}</p>
                      <p className="text-blue-600">
                        {activeMetric === 'delivery' ? 'Delivery Rate' : 'Engagement Rate'}: {payload[0].value}%
                      </p>
                      {data.recommended && (
                        <Badge variant="secondary" className="mt-1">Recommended</Badge>
                      )}
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar 
              dataKey="value" 
              radius={[4, 4, 0, 0]}
              fill="#8884d8"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
