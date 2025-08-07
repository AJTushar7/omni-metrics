import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { UserX, Download, Trash2, Filter, AlertTriangle, TrendingDown, Plus } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const inactiveCustomers = [
  { id: "C001", name: "Rajesh Kumar", email: "rajesh.k@email.com", phone: "+91-9876543210", lastEngagement: "180 days", segment: "Premium", channel: "WhatsApp", reason: "No response" },
  { id: "C002", name: "Priya Sharma", email: "priya.sharma@email.com", phone: "+91-9876543211", lastEngagement: "125 days", segment: "Regular", channel: "SMS", reason: "Bounced messages" },
  { id: "C003", name: "Amit Patel", email: "amit.patel@email.com", phone: "+91-9876543212", lastEngagement: "95 days", segment: "VIP", channel: "Email", reason: "Unsubscribed" },
  { id: "C004", name: "Sneha Reddy", email: "sneha.reddy@email.com", phone: "+91-9876543213", lastEngagement: "200 days", segment: "Regular", channel: "Push", reason: "App uninstalled" },
  { id: "C005", name: "Vikram Singh", email: "vikram.singh@email.com", phone: "+91-9876543214", lastEngagement: "150 days", segment: "Premium", channel: "RCS", reason: "Device unsupported" }
];

const exclusionLists = [
  { id: "EX001", name: "DND - Do Not Disturb", count: 15420, created: "2024-01-15", type: "regulatory" },
  { id: "EX002", name: "Bounced Emails", count: 8760, created: "2024-02-10", type: "technical" },
  { id: "EX003", name: "Unsubscribed Users", count: 12340, created: "2024-03-05", type: "preference" },
  { id: "EX004", name: "Inactive 6+ Months", count: 25680, created: "2024-11-01", type: "engagement" }
];

export const InactiveCustomers = () => {
  const [selectedCustomers, setSelectedCustomers] = useState<string[]>([]);
  const [inactivityPeriod, setInactivityPeriod] = useState<string>("90");
  const { toast } = useToast();

  const handleSelectCustomer = (customerId: string, checked: boolean) => {
    if (checked) {
      setSelectedCustomers([...selectedCustomers, customerId]);
    } else {
      setSelectedCustomers(selectedCustomers.filter(id => id !== customerId));
    }
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedCustomers(inactiveCustomers.map(c => c.id));
    } else {
      setSelectedCustomers([]);
    }
  };

  const createExclusionList = () => {
    toast({
      title: "Exclusion list created",
      description: `${selectedCustomers.length} customers added to exclusion list`
    });
    setSelectedCustomers([]);
  };

  const getInactivityBadgeColor = (days: string) => {
    const dayCount = parseInt(days);
    if (dayCount > 180) return "text-destructive";
    if (dayCount > 120) return "text-warning";
    return "text-muted-foreground";
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <UserX className="h-5 w-5 text-warning" />
          Inactive Customer Management
        </CardTitle>
        <div className="flex items-center gap-2">
          <Select value={inactivityPeriod} onValueChange={setInactivityPeriod}>
            <SelectTrigger className="w-[150px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="30">30+ days</SelectItem>
              <SelectItem value="60">60+ days</SelectItem>
              <SelectItem value="90">90+ days</SelectItem>
              <SelectItem value="180">180+ days</SelectItem>
            </SelectContent>
          </Select>
          <Badge variant="secondary" className="rounded-full">
            {inactiveCustomers.length} inactive customers
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="customers">
          <TabsList>
            <TabsTrigger value="customers">Inactive Customers</TabsTrigger>
            <TabsTrigger value="exclusions">Exclusion Lists</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="customers" className="space-y-4">
            {/* Action Bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={selectedCustomers.length === inactiveCustomers.length}
                  onCheckedChange={handleSelectAll}
                />
                <span className="text-sm text-muted-foreground">
                  {selectedCustomers.length} of {inactiveCustomers.length} selected
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  disabled={selectedCustomers.length === 0}
                  onClick={createExclusionList}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Create Exclusion List
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>

            {/* Customer Table */}
            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12"></TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Last Engagement</TableHead>
                    <TableHead>Segment</TableHead>
                    <TableHead>Last Channel</TableHead>
                    <TableHead>Reason</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inactiveCustomers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell>
                        <Checkbox
                          checked={selectedCustomers.includes(customer.id)}
                          onCheckedChange={(checked) => handleSelectCustomer(customer.id, checked as boolean)}
                        />
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{customer.name}</div>
                          <div className="text-xs text-muted-foreground">{customer.id}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>{customer.email}</div>
                          <div className="text-muted-foreground">{customer.phone}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant="secondary" 
                          className={`rounded-full ${getInactivityBadgeColor(customer.lastEngagement)}`}
                        >
                          {customer.lastEngagement} ago
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="rounded-full">
                          {customer.segment}
                        </Badge>
                      </TableCell>
                      <TableCell>{customer.channel}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <AlertTriangle className="h-3 w-3 text-warning" />
                          <span className="text-sm">{customer.reason}</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="exclusions" className="space-y-4">
            <div className="grid gap-3">
              {exclusionLists.map((list) => (
                <div key={list.id} className="rounded-lg border p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium">{list.name}</div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="rounded-full">
                        {list.type}
                      </Badge>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Customers</div>
                      <div className="font-medium">{list.count.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Created</div>
                      <div className="font-medium">{list.created}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Status</div>
                      <div className="font-medium text-success">Active</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create New Exclusion List
            </Button>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingDown className="h-4 w-4 text-warning" />
                  <span className="text-sm font-medium">Inactivity Trend</span>
                </div>
                <div className="text-2xl font-semibold">+12%</div>
                <div className="text-xs text-muted-foreground">vs last month</div>
              </div>
              <div className="rounded-lg border p-4">
                <div className="text-sm text-muted-foreground">Potential Savings</div>
                <div className="text-2xl font-semibold">₹2.8L</div>
                <div className="text-xs text-muted-foreground">By excluding inactive customers</div>
              </div>
              <div className="rounded-lg border p-4">
                <div className="text-sm text-muted-foreground">Re-engagement Rate</div>
                <div className="text-2xl font-semibold">8.5%</div>
                <div className="text-xs text-muted-foreground">From win-back campaigns</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-medium">Inactivity Breakdown by Channel</div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">WhatsApp</span>
                  <div className="flex items-center gap-2">
                    <Progress value={35} className="w-20 h-2" />
                    <span className="text-sm">35%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">SMS</span>
                  <div className="flex items-center gap-2">
                    <Progress value={28} className="w-20 h-2" />
                    <span className="text-sm">28%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Email</span>
                  <div className="flex items-center gap-2">
                    <Progress value={22} className="w-20 h-2" />
                    <span className="text-sm">22%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Push</span>
                  <div className="flex items-center gap-2">
                    <Progress value={15} className="w-20 h-2" />
                    <span className="text-sm">15%</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};