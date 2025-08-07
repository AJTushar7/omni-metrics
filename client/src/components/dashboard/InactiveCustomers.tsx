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
          Inactive Customers
        </CardTitle>
        <Badge variant="secondary" className="rounded-full">
          {inactiveCustomers.length} inactive ({inactivityPeriod}+ days)
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border p-3">
            <div className="flex items-center gap-2 mb-1">
              <TrendingDown className="h-4 w-4 text-warning" />
              <span className="text-sm font-medium">Inactivity Rate</span>
            </div>
            <div className="text-xl font-semibold">12.5%</div>
            <div className="text-xs text-muted-foreground">vs last month +2.1%</div>
          </div>
          <div className="rounded-lg border p-3">
            <div className="text-sm text-muted-foreground">Potential Savings</div>
            <div className="text-xl font-semibold">₹2.8L</div>
            <div className="text-xs text-muted-foreground">By excluding inactive users</div>
          </div>
          <div className="rounded-lg border p-3">
            <div className="text-sm text-muted-foreground">Exclusion Lists</div>
            <div className="text-xl font-semibold">{exclusionLists.length}</div>
            <div className="text-xs text-muted-foreground">{exclusionLists.reduce((acc, list) => acc + list.count, 0).toLocaleString()} customers</div>
          </div>
        </div>
        
        <div className="mt-4 flex items-center gap-2">
          <Select value={inactivityPeriod} onValueChange={setInactivityPeriod}>
            <SelectTrigger className="w-[120px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="30">30+ days</SelectItem>
              <SelectItem value="60">60+ days</SelectItem>
              <SelectItem value="90">90+ days</SelectItem>
              <SelectItem value="180">180+ days</SelectItem>
            </SelectContent>
          </Select>
          <Button 
            variant="outline" 
            size="sm"
            disabled={selectedCustomers.length === 0}
            onClick={createExclusionList}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Create Exclusion ({selectedCustomers.length})
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Manage Lists
          </Button>
        </div>

        {/* Compact customer list */}
        <div className="mt-4 space-y-2 max-h-48 overflow-y-auto">
          {inactiveCustomers.slice(0, 5).map((customer) => (
            <div key={customer.id} className="flex items-center justify-between p-2 border rounded">
              <div className="flex items-center gap-3">
                <Checkbox
                  checked={selectedCustomers.includes(customer.id)}
                  onCheckedChange={(checked) => handleSelectCustomer(customer.id, checked as boolean)}
                />
                <div>
                  <div className="text-sm font-medium">{customer.name}</div>
                  <div className="text-xs text-muted-foreground">{customer.email}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="rounded-full text-xs">
                  {customer.channel}
                </Badge>
                <span className="text-xs text-muted-foreground">{customer.lastEngagement} ago</span>
              </div>
            </div>
          ))}
          {inactiveCustomers.length > 5 && (
            <div className="text-center py-2">
              <Button variant="ghost" size="sm">
                View all {inactiveCustomers.length} customers
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};