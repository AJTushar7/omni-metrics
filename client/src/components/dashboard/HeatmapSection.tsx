import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock } from "lucide-react";

const heatmapData = [
  { hour: "6 AM", mon: 12, tue: 18, wed: 15, thu: 22, fri: 28, sat: 35, sun: 8 },
  { hour: "9 AM", mon: 45, tue: 52, wed: 48, thu: 58, fri: 65, sat: 42, sun: 25 },
  { hour: "12 PM", mon: 38, tue: 42, wed: 45, thu: 48, fri: 52, sat: 58, sun: 35 },
  { hour: "3 PM", mon: 55, tue: 62, wed: 58, thu: 68, fri: 75, sat: 48, sun: 32 },
  { hour: "6 PM", mon: 72, tue: 78, wed: 75, thu: 85, fri: 92, sat: 65, sun: 45 },
  { hour: "9 PM", mon: 25, tue: 28, wed: 32, thu: 35, fri: 42, sat: 55, sun: 38 },
];

const getHeatmapColor = (value: number) => {
  if (value >= 80) return "bg-brand text-white"; // High
  if (value >= 60) return "bg-brand/80 text-white"; // Medium-high  
  if (value >= 40) return "bg-brand/60 text-black"; // Medium
  if (value >= 20) return "bg-brand/40 text-black"; // Medium-low
  return "bg-brand/20 text-black"; // Low
};

export const HeatmapSection = () => {
  return (
    <Card className="h-[400px]">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-orange-500 flex items-center justify-center text-white text-xs">⏱</div>
            Peak Engagement Heatmap
          </CardTitle>
          <div className="flex gap-4">
            <Button variant="outline" size="sm" className="text-orange-600">Engagement</Button>
            <Button variant="ghost" size="sm">Conversion</Button>
            <Button variant="ghost" size="sm">Cost Efficiency</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="h-[320px]">
        {/* Top Channel Performance Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border">
            <div className="text-lg font-semibold">WhatsApp</div>
            <div className="text-sm text-orange-600">68.5%</div>
            <div className="text-xs text-muted-foreground">Peak: Tue at 10 AM</div>
          </div>
          <div className="p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border">
            <div className="text-lg font-semibold">SMS</div>
            <div className="text-sm text-orange-600">54.2%</div>
            <div className="text-xs text-muted-foreground">Peak: Wed at 11 AM</div>
          </div>
        </div>

        {/* Engagement Heatmap by Time */}
        <div className="mb-4">
          <h4 className="font-medium mb-3">Engagement Heatmap by Time</h4>
          <div className="grid grid-cols-5 gap-2 text-xs">
            <div></div>
            <div className="text-center font-medium">12 AM</div>
            <div className="text-center font-medium">6 AM</div>
            <div className="text-center font-medium">12 PM</div>
            <div className="text-center font-medium">6 PM</div>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
              <React.Fragment key={day}>
                <div className="text-xs font-medium py-1">{day}</div>
                <div className="h-6 bg-orange-100 rounded text-center text-xs leading-6">-</div>
                <div className="h-6 bg-orange-100 rounded text-center text-xs leading-6">-</div>
                <div className="h-6 bg-orange-200 rounded text-center text-xs leading-6">-</div>
                <div className="h-6 bg-orange-300 rounded text-center text-xs leading-6">-</div>
              </React.Fragment>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-3 text-xs">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-orange-100 rounded"></div>
              <span>Low</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-orange-200 rounded"></div>
              <span className="mr-2">Medium</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-orange-300 rounded"></div>
              <span>High</span>
            </div>
          </div>
        </div>

        {/* Optimal Timing Recommendations */}
        <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded bg-blue-500 flex items-center justify-center text-white text-xs">💡</div>
            <span className="font-medium text-blue-900 dark:text-blue-100">Optimal Timing Recommendations</span>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="flex items-center gap-1 text-green-600 mb-1">
                <TrendingUp className="h-3 w-3" />
                <span className="font-medium">Best Times</span>
              </div>
              <p className="text-xs text-muted-foreground">Tuesday-Thursday 10-11 AM show 35% higher engagement</p>
            </div>
            <div>
              <div className="flex items-center gap-1 text-orange-600 mb-1">
                <Clock className="h-3 w-3" />
                <span className="font-medium">Avoid Times</span>
              </div>
              <p className="text-xs text-muted-foreground">Late evenings (8-10 PM) show 60% lower conversion rates</p>
            </div>
          </div>
          <Button variant="link" className="p-0 h-auto text-blue-600 text-sm mt-2">
            Schedule Campaigns Optimally →
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
