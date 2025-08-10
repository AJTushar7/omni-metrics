import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const providersByChannel = {
  whatsapp: [
    { name: "MM Lite (Plivo)", cost: 0.25, delivery: 99.2, engagement: 82.1, support: 95, tag: "Current", recommended: true },
    { name: "Cloud API", cost: 0.18, delivery: 97.8, engagement: 78.5, support: 92, tag: "Alternative", recommended: false },
    { name: "Twilio", cost: 0.12, delivery: 98.5, engagement: 85.2, support: 98, tag: "Premium", recommended: false },
    { name: "Gupshup", cost: 0.07, delivery: 95.8, engagement: 76.3, support: 88, tag: "Budget", recommended: false },
    { name: "Infobip", cost: 0.09, delivery: 97.2, engagement: 80.1, support: 92, tag: "Stable", recommended: false },
    { name: "MessageBird", cost: 0.11, delivery: 96.8, engagement: 79.4, support: 90, tag: "Fastest", recommended: false },
    { name: "Karix", cost: 0.08, delivery: 96.9, engagement: 77.5, support: 89, tag: "Balanced", recommended: false },
    { name: "Kaleyra", cost: 0.10, delivery: 97.1, engagement: 78.2, support: 91, tag: "Popular", recommended: false },
    { name: "CM.com", cost: 0.13, delivery: 98.0, engagement: 81.2, support: 94, tag: "Enterprise", recommended: false },
    { name: "360Dialog", cost: 0.06, delivery: 95.2, engagement: 75.6, support: 86, tag: "Budget", recommended: false },
  ],
  email: [
    { name: "SendGrid", cost: 0.02, delivery: 98.2, engagement: 41.2, support: 96, tag: "Current", recommended: true },
    { name: "Mailgun", cost: 0.03, delivery: 97.5, engagement: 38.6, support: 94, tag: "Alternative", recommended: false },
    { name: "AWS SES", cost: 0.01, delivery: 96.8, engagement: 35.8, support: 88, tag: "Budget", recommended: false },
    { name: "SparkPost", cost: 0.02, delivery: 96.9, engagement: 36.5, support: 90, tag: "Reliable", recommended: false },
    { name: "Postmark", cost: 0.03, delivery: 97.3, engagement: 37.9, support: 92, tag: "Premium", recommended: false },
  ],
  push: [
    { name: "Firebase FCM", cost: 0.00, delivery: 96.5, engagement: 38.6, support: 90, tag: "Current", recommended: true },
    { name: "OneSignal", cost: 0.02, delivery: 95.4, engagement: 40.1, support: 88, tag: "Popular", recommended: false },
    { name: "Airship", cost: 0.04, delivery: 97.1, engagement: 42.7, support: 94, tag: "Enterprise", recommended: false },
    { name: "CleverTap", cost: 0.03, delivery: 96.2, engagement: 41.3, support: 91, tag: "Analytics", recommended: false },
    { name: "MoEngage", cost: 0.03, delivery: 95.8, engagement: 40.9, support: 90, tag: "Suite", recommended: false },
  ],
};

export const BSPComparison = () => {
  const channels = [
    { key: "whatsapp", label: "WhatsApp", color: "bg-green-500" },
    { key: "email", label: "Email", color: "bg-blue-500" },
    { key: "push", label: "Push", color: "bg-purple-500" },
  ] as const;

  const [visible, setVisible] = useState<Record<string, number>>({
    whatsapp: 5,
    email: 5,
    push: 5,
  });

  const renderCard = (provider: any) => (
    <div 
      key={provider.name}
      className={`p-3 rounded border text-xs hover-scale transition-colors ${provider.recommended ? 'bg-green-50 dark:bg-green-950/20 border-green-200' : 'bg-card'}`}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="font-medium text-xs">{provider.name}</span>
        <Badge variant="secondary" className="text-[10px] h-4 px-1">{provider.tag}</Badge>
      </div>
      <div className="grid grid-cols-4 gap-1 text-[11px]">
        <div>
          <div className="text-muted-foreground">Cost</div>
          <div className="font-semibold">₹{provider.cost.toFixed(2)}</div>
        </div>
        <div>
          <div className="text-muted-foreground">Del</div>
          <div className="font-semibold">{provider.delivery}%</div>
        </div>
        <div>
          <div className="text-muted-foreground">Eng</div>
          <div className="font-semibold">{provider.engagement}%</div>
        </div>
        <div>
          <div className="text-muted-foreground">Support</div>
          <div className="font-semibold">{provider.support}/100</div>
        </div>
      </div>
    </div>
  );

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <CardTitle className="text-lg">BSP Performance Comparison</CardTitle>
        <Button variant="outline" size="sm" className="h-7">
          <Settings className="h-3 w-3 mr-1" />
          Configure
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <Tabs defaultValue="whatsapp">
          <TabsList className="w-full grid grid-cols-3">
            {channels.map((c) => (
              <TabsTrigger key={c.key} value={c.key} className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded ${c.color}`} />
                {c.label}
                <Badge variant="outline" className="ml-1">{providersByChannel[c.key].length}</Badge>
              </TabsTrigger>
            ))}
          </TabsList>

          {channels.map((c) => (
            <TabsContent key={c.key} value={c.key} className="pt-3">
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                {providersByChannel[c.key].slice(0, visible[c.key]).map(renderCard)}
              </div>
              {providersByChannel[c.key].length > visible[c.key] && (
                <div className="text-center mt-2">
                  <Button variant="ghost" size="sm" onClick={() => setVisible({ ...visible, [c.key]: providersByChannel[c.key].length })}>
                    Show all {providersByChannel[c.key].length}
                  </Button>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>

        <div className="p-2 bg-blue-50 dark:bg-blue-950/20 rounded border border-blue-200">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-blue-500 flex items-center justify-center text-white text-xs">!</div>
            <div className="flex-1">
              <span className="text-sm font-medium text-blue-900 dark:text-blue-100">Cost Optimization:</span>
              <span className="text-xs text-blue-800 dark:text-blue-200 ml-1">
                Switch to WhatsApp Cloud API → Save ₹28K/month
              </span>
            </div>
            <Button variant="link" className="p-0 h-auto text-blue-600 text-xs">
              Analyze →
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
