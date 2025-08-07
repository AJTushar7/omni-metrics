import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="flex items-center gap-2">
          <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
          Peak Engagement Heatmap
        </CardTitle>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-xs">
            <div className="w-3 h-3 bg-purple-200 rounded"></div>
            <span>Low (0-40%)</span>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <div className="w-3 h-3 bg-purple-400 rounded"></div>
            <span>Medium (40-70%)</span>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <div className="w-3 h-3 bg-purple-600 rounded"></div>
            <span>High (70%+)</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="h-[320px] overflow-auto">
        <div className="space-y-2">
          <div className="grid grid-cols-8 gap-2 text-xs font-medium text-muted-foreground sticky top-0 bg-background">
            <div></div>
            <div className="text-center">Mon</div>
            <div className="text-center">Tue</div>
            <div className="text-center">Wed</div>
            <div className="text-center">Thu</div>
            <div className="text-center">Fri</div>
            <div className="text-center">Sat</div>
            <div className="text-center">Sun</div>
          </div>
          {heatmapData.map((row) => (
            <div key={row.hour} className="grid grid-cols-8 gap-2">
              <div className="text-xs text-muted-foreground font-medium py-2">
                {row.hour}
              </div>
              {Object.entries(row).map(([day, value]) => {
                if (day === "hour") return null;
                return (
                  <div
                    key={day}
                    className={`h-8 flex items-center justify-center text-xs font-medium rounded transition-all hover:scale-105 cursor-pointer ${getHeatmapColor(value as number)}`}
                    title={`${day.charAt(0).toUpperCase() + day.slice(1)} ${row.hour}: ${value}% engagement`}
                  >
                    {value}%
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-lg border p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
            <div className="text-sm font-medium text-green-800 dark:text-green-200">🎯 Best Times</div>
            <div className="text-sm text-green-600 dark:text-green-300">Friday 6 PM shows 92% peak engagement</div>
          </div>
          <div className="rounded-lg border p-3">
            <div className="text-sm font-medium">Avoid Times</div>
            <div className="text-sm text-muted-foreground">Early mornings show lower conversion rates</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
