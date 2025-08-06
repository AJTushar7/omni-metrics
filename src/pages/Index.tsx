import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { AlertsTicker } from "@/components/dashboard/AlertsTicker";
import { BudgetPerformance } from "@/components/dashboard/BudgetPerformance";
import { ChannelOverview } from "@/components/dashboard/ChannelOverview";
import { BSPComparison } from "@/components/dashboard/BSPComparison";
import { HeatmapSection } from "@/components/dashboard/HeatmapSection";
import { CampaignTable } from "@/components/dashboard/CampaignTable";
import { Badge } from "@/components/ui/badge";
import { BellRing, LineChart, MessageSquare, Plus } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-10 space-y-8">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Campaign Analytics Dashboard</h1>
            <p className="text-sm text-muted-foreground">Multi-channel performance • Real-time tracking across SMS, WhatsApp, Email, Push & RCS</p>
            <div className="mt-2 inline-flex items-center gap-2 text-sm">
              <span className="inline-flex h-2 w-2 rounded-full bg-success" aria-hidden></span>
              <span className="text-muted-foreground">Live Updates Active</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Channels" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Channels</SelectItem>
                <SelectItem value="wa">WhatsApp</SelectItem>
                <SelectItem value="sms">SMS</SelectItem>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="push">Push</SelectItem>
                <SelectItem value="rcs">RCS</SelectItem>
              </SelectContent>
            </Select>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> New Campaign
            </Button>
          </div>
        </div>

        {/* Alerts ticker */}
        <AlertsTicker
          items={[
            { id: "1", text: "Service Reminder campaign is starting at 3:25 PM", type: "info", time: "in 10m" },
            { id: "2", text: "Diwali Festival Sale just started execution", type: "success", time: "now" },
            { id: "3", text: "RCS pilot paused due to high bounce rate. Review BSP.", type: "warning" },
          ]}
        />

        {/* KPI cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <KpiCard title="Total Revenue" value="₹50.5L" subtitle="vs last month" trendLabel="+18.5%" trendPositive icon={<LineChart className="h-5 w-5" />} />
          <KpiCard title="Campaign ROI" value="6.0x" subtitle="improvement" trendLabel="+2.1x" trendPositive />
          <KpiCard title="Messages Sent" value="4.8M" subtitle="Across all channels" trendLabel="+3.2%" trendPositive icon={<MessageSquare className="h-5 w-5" />} />
          <KpiCard title="Avg Conversion Rate" value="10.7%" subtitle="from target" trendLabel="+3.2%" trendPositive />
        </div>

        {/* Budget vs Performance */}
        <BudgetPerformance />

        {/* Channel Overview */}
        <div>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Channel Performance Snapshot</h2>
            <Badge variant="secondary" className="rounded-full">Last 15 days</Badge>
          </div>
          <ChannelOverview />
        </div>

        {/* BSP Comparison */}
        <BSPComparison />

        {/* Heatmap + Campaign table */}
        <div className="grid gap-4 lg:grid-cols-2">
          <HeatmapSection />
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Campaign Performance Details</h2>
              <Button variant="secondary"><BellRing className="mr-2 h-4 w-4" /> Export Report</Button>
            </div>
            <CampaignTable />
          </div>
        </div>

        {/* Info strip */}
        <Card>
          <CardContent className="py-4 text-sm text-muted-foreground">
            Tips: Use orchestration to set WhatsApp as primary with SMS fallback to reduce cost per conversion by up to 18%.
          </CardContent>
        </Card>

        <Separator />
        <p className="text-center text-xs text-muted-foreground">Designed for large-scale automotive campaigns • Accessible • Keyboard-friendly</p>
      </div>
    </div>
  );
};

export default Index;
