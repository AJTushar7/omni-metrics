import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

const bspData = {
  whatsapp: [
    { name: "MM Lite (Plivo)", cost: 0.25, delivery: 99.2, engagement: 82.1, support: 95, tag: "Current", recommended: true },
    { name: "Cloud API", cost: 0.18, delivery: 97.8, engagement: 78.5, support: 92, tag: "Alternative", recommended: false },
    { name: "Twilio", cost: 0.12, delivery: 98.5, engagement: 85.2, support: 98, tag: "Premium", recommended: false },
    { name: "Gupshup", cost: 0.07, delivery: 95.8, engagement: 76.3, support: 88, tag: "Budget", recommended: false }
  ],
  rcs: [
    { name: "TCL", cost: 0.35, delivery: 94.5, engagement: 71.8, support: 89, tag: "Current", recommended: true },
    { name: "Karix", cost: 0.42, delivery: 92.1, engagement: 68.5, support: 85, tag: "Alternative", recommended: false },
    { name: "Jio", cost: 0.28, delivery: 96.2, engagement: 74.1, support: 91, tag: "Emerging", recommended: false }
  ],
  email: [
    { name: "SendGrid", cost: 0.02, delivery: 98.2, engagement: 41.2, support: 96, tag: "Current", recommended: true },
    { name: "Mailgun", cost: 0.03, delivery: 97.5, engagement: 38.6, support: 94, tag: "Alternative", recommended: false },
    { name: "AWS SES", cost: 0.01, delivery: 96.8, engagement: 35.8, support: 88, tag: "Budget", recommended: false }
  ]
};

export const BSPComparison = () => {
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
        {/* WhatsApp BSPs */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 bg-green-500 rounded flex items-center justify-center text-white text-xs">W</div>
            <h3 className="font-medium text-sm">WhatsApp BSPs</h3>
            <Badge variant="outline" className="text-xs">{bspData.whatsapp.length} providers</Badge>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {bspData.whatsapp.map((provider) => (
              <div 
                key={provider.name}
                className={`p-2 rounded border text-xs ${provider.recommended ? 'bg-green-50 dark:bg-green-950/20 border-green-200' : 'bg-gray-50 dark:bg-gray-800'}`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-xs">{provider.name}</span>
                  <Badge variant="secondary" className="text-xs h-4 px-1">{provider.tag}</Badge>
                </div>
                <div className="grid grid-cols-3 gap-1 text-xs">
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
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RCS BSPs */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 bg-purple-500 rounded flex items-center justify-center text-white text-xs">R</div>
            <h3 className="font-medium text-sm">RCS BSPs</h3>
            <Badge variant="outline" className="text-xs">{bspData.rcs.length} providers</Badge>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
            {bspData.rcs.map((provider) => (
              <div 
                key={provider.name}
                className={`p-2 rounded border text-xs ${provider.recommended ? 'bg-green-50 dark:bg-green-950/20 border-green-200' : 'bg-gray-50 dark:bg-gray-800'}`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-xs">{provider.name}</span>
                  <Badge variant="secondary" className="text-xs h-4 px-1">{provider.tag}</Badge>
                </div>
                <div className="grid grid-cols-3 gap-1 text-xs">
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
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Email BSPs */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 bg-blue-500 rounded flex items-center justify-center text-white text-xs">E</div>
            <h3 className="font-medium text-sm">Email BSPs</h3>
            <Badge variant="outline" className="text-xs">{bspData.email.length} providers</Badge>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
            {bspData.email.map((provider) => (
              <div 
                key={provider.name}
                className={`p-2 rounded border text-xs ${provider.recommended ? 'bg-green-50 dark:bg-green-950/20 border-green-200' : 'bg-gray-50 dark:bg-gray-800'}`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-xs">{provider.name}</span>
                  <Badge variant="secondary" className="text-xs h-4 px-1">{provider.tag}</Badge>
                </div>
                <div className="grid grid-cols-3 gap-1 text-xs">
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
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compact Optimization Opportunity */}
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
