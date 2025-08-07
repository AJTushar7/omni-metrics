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
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-500" />
            Channel Performance
          </CardTitle>
          <div className="flex gap-1">
            <Button 
              variant={activeMetric === 'delivery' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveMetric('delivery')}
              className="h-7 text-xs"
            >
              Delivery
            </Button>
            <Button 
              variant={activeMetric === 'engagement' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveMetric('engagement')}
              className="h-7 text-xs"
            >
              Engagement
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Performance Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
          {channels.slice(0, 6).map((channel) => (
            <div key={channel.name} className="p-3 border rounded-lg bg-gray-50 dark:bg-gray-800">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded" 
                    style={{ backgroundColor: channel.color }}
                  ></div>
                  <span className="font-medium text-sm">{channel.name}</span>
                </div>
                {channel.recommended && (
                  <Badge variant="secondary" className="text-xs h-5">Recommended</Badge>
                )}
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">
                    {activeMetric === 'delivery' ? 'Delivery' : 'Engagement'}
                  </span>
                  <span className="font-semibold">
                    {activeMetric === 'delivery' ? channel.delivery : channel.engagement}%
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Cost/msg</span>
                  <span className="font-semibold">₹{channel.cpm.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Chart */}
        <div className="h-[160px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10, right: 10, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 10 }}
                axisLine={false}
              />
              <YAxis 
                tick={{ fontSize: 10 }}
                axisLine={false}
                domain={[0, 100]}
                width={30}
              />
              <Tooltip 
                content={({ active, payload, label }) => {
                  if (active && payload && payload[0]) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-white dark:bg-gray-800 p-2 border rounded shadow-lg">
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
        </div>
      </CardContent>
    </Card>
  );
};
