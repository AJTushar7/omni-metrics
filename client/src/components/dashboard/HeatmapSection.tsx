import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const heatmapData = [
  { hour: "6 AM", mon: 12, tue: 18, wed: 15, thu: 22, fri: 28, sat: 35, sun: 8 },
  { hour: "9 AM", mon: 45, tue: 52, wed: 48, thu: 58, fri: 65, sat: 42, sun: 25 },
  { hour: "12 PM", mon: 38, tue: 42, wed: 45, thu: 48, fri: 52, sat: 58, sun: 35 },
  { hour: "3 PM", mon: 55, tue: 62, wed: 58, thu: 68, fri: 75, sat: 48, sun: 32 },
  { hour: "6 PM", mon: 72, tue: 78, wed: 75, thu: 85, fri: 92, sat: 65, sun: 45 },
  { hour: "9 PM", mon: 25, tue: 28, wed: 32, thu: 35, fri: 42, sat: 55, sun: 38 },
];

const getHeatmapColor = (value: number) => {
  if (value >= 80) return "bg-primary/95 text-primary-foreground";
  if (value >= 60) return "bg-primary/70 text-primary-foreground";  
  if (value >= 40) return "bg-primary/50 text-foreground"; 
  if (value >= 20) return "bg-primary/30 text-foreground"; 
  return "bg-primary/15 text-foreground"; 
};

export const HeatmapSection = () => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-primary text-primary-foreground flex items-center justify-center text-[10px]">⏱</div>
            Peak Engagement Heatmap
          </CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Engagement</Button>
            <Button variant="ghost" size="sm">Conversion</Button>
            <Button variant="ghost" size="sm">Cost Efficiency</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div>
          <div className="grid grid-cols-8 gap-1 text-[10px]">
            <div></div>
            {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d) => (
              <div key={`h-${d}`} className="text-center">{d}</div>
            ))}
            {heatmapData.map((row) => (
              <React.Fragment key={row.hour}>
                <div className="text-xs py-0.5">{row.hour}</div>
                {["mon","tue","wed","thu","fri","sat","sun"].map((day) => {
                  const val = (row as any)[day] as number;
                  return (
                    <div key={`${row.hour}-${day}`} className={`h-5 rounded ${getHeatmapColor(val)} text-[10px] leading-5 text-center`}>
                      {val}%
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
          <div className="mt-2 flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Low</span>
            <div className="flex-1 mx-2 h-1.5 rounded bg-gradient-to-r from-primary/15 via-primary/60 to-primary" />
            <span className="text-muted-foreground">High</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
