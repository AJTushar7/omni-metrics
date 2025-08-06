import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const rows = [
  { name: "Diwali Car Sale 2024", channel: "WhatsApp", reach: 125000, delivered: 122750, conversion: 35187, revenue: 874500, roi: "12.4x", status: "completed" },
  { name: "Service Reminder Oct", channel: "SMS", reach: 85000, delivered: 82450, conversion: 14841, revenue: 412300, roi: "8.2x", status: "completed" },
  { name: "New Model Launch", channel: "Email", reach: 200000, delivered: 192000, conversion: 15360, revenue: 287400, roi: "5.8x", status: "completed" },
  { name: "Year End Offers", channel: "Push", reach: 150000, delivered: 138750, conversion: 4162, revenue: 124860, roi: "4.2x", status: "active" },
  { name: "New Year Bonanza", channel: "WhatsApp", reach: 75000, delivered: 0, conversion: 0, revenue: 0, roi: "-", status: "scheduled" },
];

const Status = ({ s }: { s: string }) => {
  if (s === "completed") return <Badge variant="secondary" className="rounded-full">completed</Badge>;
  if (s === "active") return <Badge className="rounded-full">active</Badge>;
  return <Badge variant="outline" className="rounded-full">scheduled</Badge>;
};

export const CampaignTable = () => {
  return (
    <Card className="p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Campaign</TableHead>
            <TableHead>Channel</TableHead>
            <TableHead className="text-right">Reach</TableHead>
            <TableHead className="text-right">Delivered</TableHead>
            <TableHead className="text-right">Conversion</TableHead>
            <TableHead className="text-right">Revenue</TableHead>
            <TableHead className="text-right">ROI</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((r) => (
            <TableRow key={r.name}>
              <TableCell>
                <div className="font-medium">{r.name}</div>
                <div className="text-xs text-muted-foreground">Promotion</div>
              </TableCell>
              <TableCell>{r.channel}</TableCell>
              <TableCell className="text-right">{r.reach.toLocaleString()}</TableCell>
              <TableCell className="text-right">{r.delivered.toLocaleString()}</TableCell>
              <TableCell className="text-right">{r.conversion.toLocaleString()}</TableCell>
              <TableCell className="text-right">₹{r.revenue.toLocaleString()}</TableCell>
              <TableCell className="text-right">{r.roi}</TableCell>
              <TableCell><Status s={r.status} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};
