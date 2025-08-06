import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertTriangle, BarChart2, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";

export type CampaignStatus = "scheduled" | "active" | "completed";

type Campaign = {
  id: string;
  name: string;
  segment: string;
  status: CampaignStatus;
  channel: string;
  startAt: string; // ISO
  progress: number; // 0-100
  errors: number;
  retryCost: number; // in INR
};

const sampleCampaigns: Campaign[] = [
  { id: "c1", name: "Diwali Offers Blast", segment: "Owners > 3yrs", status: "active", channel: "WhatsApp", startAt: new Date().toISOString(), progress: 62, errors: 12, retryCost: 420 },
  { id: "c2", name: "Service Reminder", segment: "All 6M due", status: "scheduled", channel: "SMS", startAt: new Date(Date.now() + 2*60*60*1000).toISOString(), progress: 0, errors: 0, retryCost: 0 },
  { id: "c3", name: "EV Test Drive", segment: "Prospects EV", status: "completed", channel: "Email", startAt: new Date(Date.now() - 3*24*60*60*1000).toISOString(), progress: 100, errors: 5, retryCost: 120 },
  { id: "c4", name: "Exchange Week", segment: "Owners 6-8yrs", status: "active", channel: "RCS", startAt: new Date(Date.now() - 1*24*60*60*1000).toISOString(), progress: 41, errors: 3, retryCost: 60 },
  { id: "c5", name: "App Re‑engagement", segment: "Dormant 90d", status: "active", channel: "Push", startAt: new Date(Date.now() - 6*24*60*60*1000).toISOString(), progress: 23, errors: 8, retryCost: 150 },
  { id: "c6", name: "Festive Accessories", segment: "Recent buyers", status: "scheduled", channel: "WhatsApp", startAt: new Date(Date.now() + 1*24*60*60*1000).toISOString(), progress: 0, errors: 0, retryCost: 0 },
];

export const RealTimeMonitoring = () => {
  const { toast } = useToast();
  const [status, setStatus] = useState<"all" | CampaignStatus>("all");

  const last15cut = useMemo(() => Date.now() - 15 * 24 * 60 * 60 * 1000, []);

  const data = useMemo(() => {
    return sampleCampaigns
      .filter(c => new Date(c.startAt).getTime() >= last15cut)
      .filter(c => (status === "all" ? true : c.status === status));
  }, [status, last15cut]);

  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Real‑time Campaign Monitoring</CardTitle>
        <div className="flex items-center gap-2">
          <Select defaultValue="all" onValueChange={(v: any) => setStatus(v)}>
            <SelectTrigger className="w-[160px]"><SelectValue placeholder="Status" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="scheduled">Scheduled</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="cards">
          <TabsList>
            <TabsTrigger value="cards">Card View</TabsTrigger>
            <TabsTrigger value="table">Table View</TabsTrigger>
          </TabsList>
          <TabsContent value="cards" className="pt-3">
            <div className="relative">
              <Carousel>
                <CarouselContent>
                  {data.map((c) => (
                    <CarouselItem key={c.id} className="basis-full sm:basis-1/2 lg:basis-1/3">
                      <div className="rounded-lg border p-4 h-full flex flex-col gap-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="font-medium">{c.name}</div>
                            <div className="text-xs text-muted-foreground">Segment: {c.segment}</div>
                          </div>
                          <Badge variant="secondary" className="rounded-full capitalize">{c.status}</Badge>
                        </div>
                        <div className="text-xs text-muted-foreground">Channel: <span className="text-foreground font-medium">{c.channel}</span></div>
                        <div>
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Progress</span>
                            <span>{c.progress}%</span>
                          </div>
                          <Progress value={c.progress} />
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div className="rounded-md border p-2">
                            <div className="flex items-center gap-1 text-muted-foreground"><BarChart2 className="h-3 w-3" /> AI Insight</div>
                            <div className="mt-1">Try WA primary + SMS fallback; est. +12% conv.</div>
                          </div>
                          <div className="rounded-md border p-2">
                            <div className="flex items-center gap-1 text-muted-foreground"><AlertTriangle className="h-3 w-3" /> Errors</div>
                            <div className="mt-1 font-medium">{c.errors}</div>
                          </div>
                          <div className="rounded-md border p-2">
                            <div className="text-muted-foreground">Retry cost</div>
                            <div className="mt-1 font-medium">₹{c.retryCost}</div>
                          </div>
                        </div>
                        <div className="mt-auto flex items-center justify-between">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="secondary" size="sm">Details</Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>{c.name}</DialogTitle>
                              </DialogHeader>
                              <div className="text-sm text-muted-foreground">
                                Attached template & segment details. Delivery logs, error breakdown, and cost projection for retries.
                              </div>
                            </DialogContent>
                          </Dialog>
                          <Button size="sm" onClick={() => toast({ title: "Retry queued", description: `Estimated extra cost: ₹${c.retryCost}` })}>
                            <RotateCcw className="mr-2 h-4 w-4" /> Retry failed
                          </Button>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious aria-label="Previous"><ChevronLeft className="h-4 w-4" /></CarouselPrevious>
                <CarouselNext aria-label="Next"><ChevronRight className="h-4 w-4" /></CarouselNext>
              </Carousel>
            </div>
          </TabsContent>
          <TabsContent value="table" className="pt-3">
            <div className="rounded-lg border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Segment</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Channel</TableHead>
                    <TableHead>Start</TableHead>
                    <TableHead className="text-right">Progress</TableHead>
                    <TableHead className="text-right">Errors</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map(c => (
                    <TableRow key={c.id}>
                      <TableCell className="font-medium">{c.name}</TableCell>
                      <TableCell>{c.segment}</TableCell>
                      <TableCell className="capitalize"><Badge variant="secondary" className="rounded-full">{c.status}</Badge></TableCell>
                      <TableCell>{c.channel}</TableCell>
                      <TableCell>{new Date(c.startAt).toLocaleString()}</TableCell>
                      <TableCell className="text-right">{c.progress}%</TableCell>
                      <TableCell className="text-right">{c.errors}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
