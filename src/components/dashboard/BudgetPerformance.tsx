import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, AreaChart, Area, BarChart, Bar, ComposedChart } from "recharts";
import { Calculator, TrendingUp, TrendingDown } from "lucide-react";
import { useMemo, useState } from "react";

const performanceData = [
  { date: "01", spend: 180000, revenue: 320000, clicks: 82000, impressions: 2100000, conversions: 5400, whatsappSpend: 90000, smsSpend: 60000, emailSpend: 30000 },
  { date: "02", spend: 160000, revenue: 300000, clicks: 79000, impressions: 1980000, conversions: 5100, whatsappSpend: 80000, smsSpend: 55000, emailSpend: 25000 },
  { date: "03", spend: 175000, revenue: 315000, clicks: 80500, impressions: 2050000, conversions: 5200, whatsappSpend: 88000, smsSpend: 57000, emailSpend: 30000 },
  { date: "04", spend: 190000, revenue: 340000, clicks: 86000, impressions: 2200000, conversions: 5700, whatsappSpend: 95000, smsSpend: 65000, emailSpend: 30000 },
  { date: "05", spend: 170000, revenue: 310000, clicks: 80000, impressions: 2055000, conversions: 5300, whatsappSpend: 85000, smsSpend: 55000, emailSpend: 30000 },
  { date: "06", spend: 165000, revenue: 305000, clicks: 79000, impressions: 2010000, conversions: 5000, whatsappSpend: 83000, smsSpend: 52000, emailSpend: 30000 },
  { date: "07", spend: 200000, revenue: 360000, clicks: 90000, impressions: 2300000, conversions: 5900, whatsappSpend: 100000, smsSpend: 70000, emailSpend: 30000 },
];

const bspData = [
  { channel: "WhatsApp", bsp: "Gupshup", spend: 450000, conversions: 2800, cpl: 160.7 },
  { channel: "WhatsApp", bsp: "360Dialog", spend: 380000, conversions: 2400, cpl: 158.3 },
  { channel: "SMS", bsp: "Airtel", spend: 320000, conversions: 4200, cpl: 76.2 },
  { channel: "SMS", bsp: "Jio", spend: 280000, conversions: 3800, cpl: 73.7 },
  { channel: "Email", bsp: "SendGrid", spend: 180000, conversions: 2100, cpl: 85.7 },
  { channel: "RCS", bsp: "Vodafone", spend: 220000, conversions: 1800, cpl: 122.2 },
];

type MetricKey = "revenue" | "conversions" | "impressions" | "clicks";
type ViewMode = "performance" | "calculator" | "bsp";
type AnalysisType = "pre" | "post";

export const BudgetPerformance = () => {
  const [tab, setTab] = useState<MetricKey>("revenue");
  const [viewMode, setViewMode] = useState<ViewMode>("performance");
  const [analysisType, setAnalysisType] = useState<AnalysisType>("post");
  const [selectedChannel, setSelectedChannel] = useState<string>("all");

  const latest = performanceData[performanceData.length - 1];
  const metrics = useMemo(() => {
    const spend = latest.spend;
    return {
      cpl: latest.conversions ? `₹${(spend / latest.conversions).toFixed(1)}` : "-",
      cpc: latest.clicks ? `₹${(spend / latest.clicks).toFixed(2)}` : "-",
      cpm: latest.impressions ? `₹${((spend / latest.impressions) * 1000).toFixed(2)}` : "-",
    };
  }, [latest]);

  const filteredBspData = useMemo(() => {
    return selectedChannel === "all" 
      ? bspData 
      : bspData.filter(item => item.channel.toLowerCase() === selectedChannel);
  }, [selectedChannel]);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Budget & Performance Analysis</CardTitle>
        <div className="flex items-center gap-2">
          <Select value={analysisType} onValueChange={(v: AnalysisType) => setAnalysisType(v)}>
            <SelectTrigger className="w-[120px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pre">Pre-Campaign</SelectItem>
              <SelectItem value="post">Post-Campaign</SelectItem>
            </SelectContent>
          </Select>
          <Tabs value={viewMode} onValueChange={(v: ViewMode) => setViewMode(v)}>
            <TabsList>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="calculator">Calculator</TabsTrigger>
              <TabsTrigger value="bsp">BSP Analysis</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent>
        {viewMode === "performance" && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="rounded-full">CPL {metrics.cpl}</Badge>
              <Badge variant="secondary" className="rounded-full">CPC {metrics.cpc}</Badge>
              <Badge variant="secondary" className="rounded-full">CPM {metrics.cpm}</Badge>
            </div>
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
                    <ComposedChart data={performanceData} margin={{ left: 12, right: 12 }}>
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
                      <Bar dataKey="whatsappSpend" fill="hsl(var(--success))" name="WhatsApp Spend" />
                      <Bar dataKey="smsSpend" fill="hsl(var(--warning))" name="SMS Spend" />
                      <Bar dataKey="emailSpend" fill="hsl(var(--info))" name="Email Spend" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
              <TabsContent value="conversions" className="pt-4">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData} margin={{ left: 12, right: 12 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted-foreground) / 0.2)" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="conversions" stroke="hsl(var(--brand))" name="Conversions" />
                      <Line type="monotone" dataKey="spend" stroke="hsl(var(--destructive))" name="Total Spend" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
              <TabsContent value="impressions" className="pt-4">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData} margin={{ left: 12, right: 12 }}>
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
                    <LineChart data={performanceData} margin={{ left: 12, right: 12 }}>
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
          </div>
        )}

        {viewMode === "calculator" && (
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Calculator className="h-4 w-4 text-brand" />
                  <span className="font-medium">Budget Calculator</span>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Estimated Campaign Cost</div>
                  <div className="text-2xl font-semibold">₹2.5L</div>
                  <div className="text-xs text-muted-foreground">For 50K customers across 3 channels</div>
                </div>
              </div>
              <div className="rounded-lg border p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-success" />
                  <span className="font-medium">Projected ROI</span>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Expected Return</div>
                  <div className="text-2xl font-semibold text-success">4.2x</div>
                  <div className="text-xs text-muted-foreground">Based on historical data</div>
                </div>
              </div>
              <div className="rounded-lg border p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <TrendingDown className="h-4 w-4 text-warning" />
                  <span className="font-medium">Cost Optimization</span>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Potential Savings</div>
                  <div className="text-2xl font-semibold text-warning">₹45K</div>
                  <div className="text-xs text-muted-foreground">Use WA+SMS orchestration</div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="font-medium mb-3">Channel-wise Budget Breakdown</div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>WhatsApp (Primary)</span>
                  <span>₹1.2L (48%)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>SMS (Fallback)</span>
                  <span>₹80K (32%)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Email</span>
                  <span>₹30K (12%)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>RCS</span>
                  <span>₹20K (8%)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {viewMode === "bsp" && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Channel:</span>
              <Select value={selectedChannel} onValueChange={setSelectedChannel}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Channels</SelectItem>
                  <SelectItem value="whatsapp">WhatsApp</SelectItem>
                  <SelectItem value="sms">SMS</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="rcs">RCS</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={filteredBspData} margin={{ left: 12, right: 12 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted-foreground) / 0.2)" />
                  <XAxis dataKey="bsp" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="cpl" fill="hsl(var(--brand))" name="Cost Per Lead (₹)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid gap-2">
              {filteredBspData.map((bsp, idx) => (
                <div key={idx} className="flex justify-between items-center text-sm p-2 border rounded">
                  <span className="font-medium">{bsp.channel} - {bsp.bsp}</span>
                  <div className="flex gap-4">
                    <span>Spend: ₹{(bsp.spend / 1000).toFixed(0)}K</span>
                    <span>Conversions: {bsp.conversions}</span>
                    <span className="font-medium">CPL: ₹{bsp.cpl}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
