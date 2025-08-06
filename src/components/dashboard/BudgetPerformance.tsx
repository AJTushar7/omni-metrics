import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, AreaChart, Area } from "recharts";
import { useMemo, useState } from "react";

const sample = [
  { date: "01", spend: 180000, revenue: 320000, clicks: 82000, impressions: 2100000, conversions: 5400 },
  { date: "02", spend: 160000, revenue: 300000, clicks: 79000, impressions: 1980000, conversions: 5100 },
  { date: "03", spend: 175000, revenue: 315000, clicks: 80500, impressions: 2050000, conversions: 5200 },
  { date: "04", spend: 190000, revenue: 340000, clicks: 86000, impressions: 2200000, conversions: 5700 },
  { date: "05", spend: 170000, revenue: 310000, clicks: 80000, impressions: 2055000, conversions: 5300 },
  { date: "06", spend: 165000, revenue: 305000, clicks: 79000, impressions: 2010000, conversions: 5000 },
  { date: "07", spend: 200000, revenue: 360000, clicks: 90000, impressions: 2300000, conversions: 5900 },
];

type MetricKey = "revenue" | "conversions" | "impressions" | "clicks";

export const BudgetPerformance = () => {
  const [tab, setTab] = useState<MetricKey>("revenue");

  const latest = sample[sample.length - 1];
  const metrics = useMemo(() => {
    const spend = latest.spend;
    return {
      cpl: latest.conversions ? `₹${(spend / latest.conversions).toFixed(1)}` : "-",
      cpc: latest.clicks ? `₹${(spend / latest.clicks).toFixed(2)}` : "-",
      cpm: latest.impressions ? `₹${((spend / latest.impressions) * 1000).toFixed(2)}` : "-",
    };
  }, [latest]);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Budget vs Performance</CardTitle>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="rounded-full">CPL {metrics.cpl}</Badge>
          <Badge variant="secondary" className="rounded-full">CPC {metrics.cpc}</Badge>
          <Badge variant="secondary" className="rounded-full">CPM {metrics.cpm}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs value={tab} onValueChange={(v) => setTab(v as MetricKey)}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="conversions">Conversions</TabsTrigger>
            <TabsTrigger value="impressions">Impressions</TabsTrigger>
            <TabsTrigger value="clicks">Clicks</TabsTrigger>
          </TabsList>
          <TabsContent value="revenue" className="pt-4">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={sample} margin={{ left: 12, right: 12 }}>
                  <defs>
                    <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--brand))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--brand))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted-foreground) / 0.2)" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="revenue" stroke="hsl(var(--brand))" fillOpacity={1} fill="url(#rev)" name="Revenue" />
                  <Line type="monotone" dataKey="spend" stroke="hsl(var(--destructive))" name="Spend" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          <TabsContent value="conversions" className="pt-4">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sample} margin={{ left: 12, right: 12 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted-foreground) / 0.2)" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="conversions" stroke="hsl(var(--brand))" name="Conversions" />
                  <Line type="monotone" dataKey="spend" stroke="hsl(var(--destructive))" name="Spend" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          <TabsContent value="impressions" className="pt-4">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sample} margin={{ left: 12, right: 12 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted-foreground) / 0.2)" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="impressions" stroke="hsl(var(--brand))" name="Impressions" />
                  <Line type="monotone" dataKey="spend" stroke="hsl(var(--destructive))" name="Spend" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          <TabsContent value="clicks" className="pt-4">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sample} margin={{ left: 12, right: 12 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted-foreground) / 0.2)" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="clicks" stroke="hsl(var(--brand))" name="Clicks" />
                  <Line type="monotone" dataKey="spend" stroke="hsl(var(--destructive))" name="Spend" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
