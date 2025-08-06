import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const slots = ["12 AM", "6 AM", "12 PM", "6 PM"];

const intensities: number[][] = [
  [1, 2, 2, 1],
  [2, 3, 4, 2],
  [2, 4, 5, 3],
  [1, 2, 3, 2],
  [2, 3, 4, 5],
  [1, 3, 5, 4],
  [1, 2, 3, 2],
];

const cellClass = (n: number) => {
  switch (n) {
    case 1: return "bg-primary/5";
    case 2: return "bg-primary/10";
    case 3: return "bg-primary/20";
    case 4: return "bg-primary/30";
    default: return "bg-primary/40";
  }
};

export const HeatmapSection = () => {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Peak Engagement Heatmap</CardTitle>
        <div className="flex gap-2">
          <Badge variant="secondary" className="rounded-full">Engagement</Badge>
          <Badge variant="secondary" className="rounded-full">Conversion</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left text-muted-foreground font-medium"></th>
                {slots.map((t) => (
                  <th key={t} className="text-left text-muted-foreground font-medium px-2 py-1">{t}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {days.map((d, i) => (
                <tr key={d}>
                  <td className="py-2 pr-2 text-muted-foreground">{d}</td>
                  {slots.map((_, j) => (
                    <td key={j} className="p-2">
                      <div className={`h-8 w-14 rounded flex items-center justify-center ${cellClass(intensities[i][j])}`}>
                        <span className="text-[10px] font-medium text-foreground/80">
                          {Math.round((intensities[i][j] / 5) * 100)}%
                        </span>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-lg border p-3">
            <div className="text-sm font-medium">Best Times</div>
            <div className="text-sm text-muted-foreground">Tue-Thu 10-11 AM show 35% higher engagement</div>
          </div>
          <div className="rounded-lg border p-3">
            <div className="text-sm font-medium">Avoid Times</div>
            <div className="text-sm text-muted-foreground">Late evenings (8-10 PM) show lower conversion rates</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
