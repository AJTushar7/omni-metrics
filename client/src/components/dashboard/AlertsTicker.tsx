import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Megaphone, Timer } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

export type AlertItem = {
  id: string;
  text: string;
  time?: string;
  type?: "info" | "warning" | "success";
};

interface AlertsTickerProps {
  items: AlertItem[];
}

export const AlertsTicker = ({ items }: AlertsTickerProps) => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const current = useMemo(() => items[index % items.length], [index, items]);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 5000);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [items.length]);

  const colorVariant = current.type === "warning" ? "warning" : current.type === "success" ? "success" : "info";

  return (
    <Card role="status" aria-live="polite" className="overflow-hidden">
      <CardContent className="flex items-center gap-3 py-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary" aria-hidden>
          <Megaphone className="h-4 w-4" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="truncate text-sm">
            {current.text}
            {current.time && (
              <span className="ml-2 inline-flex items-center gap-1 text-muted-foreground">
                <Timer className="h-3 w-3" />
                {current.time}
              </span>
            )}
          </p>
        </div>
        <Badge variant="secondary" className="uppercase">
          {colorVariant}
        </Badge>
      </CardContent>
    </Card>
  );
};
