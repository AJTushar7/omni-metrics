import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CalendarDays, Plus, Clock, Users } from "lucide-react";
import { useState } from "react";

const campaignEvents = [
  { date: new Date(2024, 11, 15), title: "Diwali Sale Campaign", status: "scheduled", type: "festival", customers: 125000 },
  { date: new Date(2024, 11, 18), title: "Service Reminder Batch", status: "active", type: "service", customers: 45000 },
  { date: new Date(2024, 11, 22), title: "New Year Pre-booking", status: "scheduled", type: "promotional", customers: 85000 },
  { date: new Date(2024, 11, 25), title: "Christmas Special", status: "draft", type: "festival", customers: 67000 },
  { date: new Date(2024, 11, 28), title: "Year-end Clearance", status: "scheduled", type: "promotional", customers: 95000 }
];

const upcomingCampaigns = [
  { id: 1, name: "Winter Service Campaign", date: "Dec 20, 2024", channel: "WhatsApp + SMS", segment: "All vehicle owners", status: "scheduled" },
  { id: 2, name: "New Model Launch", date: "Dec 25, 2024", channel: "Email + Push", segment: "Prospects", status: "draft" },
  { id: 3, name: "Insurance Renewal", date: "Jan 1, 2025", channel: "SMS + RCS", segment: "Policy expiring", status: "scheduled" }
];

export const CampaignCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [viewMode, setViewMode] = useState<"calendar" | "timeline">("calendar");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "text-success";
      case "scheduled": return "text-brand";
      case "draft": return "text-muted-foreground";
      default: return "text-muted-foreground";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "festival": return "🎉";
      case "service": return "🔧";
      case "promotional": return "💰";
      default: return "📢";
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <CalendarDays className="h-5 w-5 text-brand" />
          Campaign Calendar
        </CardTitle>
        <div className="flex items-center gap-2">
          <Select value={viewMode} onValueChange={(v: "calendar" | "timeline") => setViewMode(v)}>
            <SelectTrigger className="w-[120px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="calendar">Calendar</SelectItem>
              <SelectItem value="timeline">Timeline</SelectItem>
            </SelectContent>
          </Select>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" /> Schedule Campaign
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Schedule New Campaign</DialogTitle>
              </DialogHeader>
              <div className="text-sm text-muted-foreground">
                Campaign scheduling interface would go here with date picker, channel selection, and segment configuration.
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        {viewMode === "calendar" ? (
          <div className="grid gap-4 lg:grid-cols-2">
            <div>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
              />
            </div>
            <div className="space-y-3">
              <div className="text-sm font-medium">Campaigns & Events</div>
              {campaignEvents.map((event, idx) => (
                <div key={idx} className="rounded-lg border p-3">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{getTypeIcon(event.type)}</span>
                      <div>
                        <div className="font-medium text-sm">{event.title}</div>
                        <div className="text-xs text-muted-foreground">
                          {event.date.toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className={`rounded-full ${getStatusColor(event.status)}`}>
                      {event.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {(event.customers / 1000).toFixed(0)}K customers
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {event.status === "active" ? "Running" : "Scheduled"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-sm font-medium">Upcoming Campaigns Timeline</div>
            <div className="space-y-3">
              {upcomingCampaigns.map((campaign) => (
                <div key={campaign.id} className="rounded-lg border p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium">{campaign.name}</div>
                    <Badge variant="secondary" className="rounded-full">
                      {campaign.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Date</div>
                      <div className="font-medium">{campaign.date}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Channel</div>
                      <div className="font-medium">{campaign.channel}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Segment</div>
                      <div className="font-medium">{campaign.segment}</div>
                    </div>
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick Stats */}
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border p-3">
            <div className="text-sm text-muted-foreground">This Month</div>
            <div className="text-2xl font-semibold">8</div>
            <div className="text-xs text-muted-foreground">Campaigns scheduled</div>
          </div>
          <div className="rounded-lg border p-3">
            <div className="text-sm text-muted-foreground">Next 7 Days</div>
            <div className="text-2xl font-semibold">3</div>
            <div className="text-xs text-muted-foreground">Campaigns launching</div>
          </div>
          <div className="rounded-lg border p-3">
            <div className="text-sm text-muted-foreground">Total Reach</div>
            <div className="text-2xl font-semibold">2.1M</div>
            <div className="text-xs text-muted-foreground">Customers this month</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};