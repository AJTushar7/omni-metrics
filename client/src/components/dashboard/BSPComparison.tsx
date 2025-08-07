import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const whatsapp = [
  { name: "Cloud API", cost: 0.08, delivery: 97.8, tag: "RECOMMENDED" },
  { name: "MM Lite", cost: 0.05, delivery: 94.2, tag: "COST EFFICIENT" },
];

const rcs = [
  { name: "Karix", cost: 0.15, delivery: 92.1, tag: "RECOMMENDED" },
  { name: "TCL", cost: 0.12, delivery: 89.3, tag: "BUDGET OPTION" },
];

const Column = ({ title, items }: { title: string; items: typeof whatsapp }) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-3">
      {items.map((i) => (
        <div key={i.name} className="rounded-lg border p-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="font-medium">{i.name}</div>
              <div className="text-xs text-muted-foreground">COST</div>
              <div className="text-sm">₹{i.cost.toFixed(2)}</div>
            </div>
            <Badge variant="secondary" className="rounded-full">{i.tag}</Badge>
          </div>
          <div className="mt-2 text-sm">
            <span className="text-muted-foreground">DELIVERY</span> <span className="text-primary font-medium">{i.delivery}%</span>
          </div>
        </div>
      ))}
    </CardContent>
  </Card>
);

export const BSPComparison = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Column title="WhatsApp BSPs" items={whatsapp} />
      <Column title="RCS BSPs" items={rcs} />
    </div>
  );
};
