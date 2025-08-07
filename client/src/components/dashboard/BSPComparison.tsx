import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

const bspData = {
  whatsapp: [
    { name: "MM Lite (Plivo)", status: "Current", cost: "₹0.25/msg", delivery: "99.2% delivery", tag: "plivo", recommended: true },
    { name: "Cloud API", status: "direct", cost: "₹0.18/msg", delivery: "97.8% delivery", tag: "", recommended: false }
  ],
  rcs: [
    { name: "TCL", status: "Current", cost: "₹0.35/msg", delivery: "94.5% delivery", tag: "preferred", recommended: true },
    { name: "Karix", status: "alternative", cost: "₹0.42/msg", delivery: "92.1% delivery", tag: "", recommended: false }
  ]
};

export const BSPComparison = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>BSP Performance Comparison</CardTitle>
        <Button variant="outline" size="sm">
          <Settings className="h-4 w-4 mr-2" />
          Configure
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* WhatsApp Business API */}
        <div>
          <h3 className="font-medium mb-3">WhatsApp Business API</h3>
          <div className="space-y-3">
            {bspData.whatsapp.map((provider) => (
              <div 
                key={provider.name}
                className={`p-4 rounded-lg border ${provider.recommended ? 'bg-green-50 dark:bg-green-950/20 border-green-200' : 'bg-gray-50 dark:bg-gray-800'}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="font-medium">{provider.name}</span>
                    {provider.tag && (
                      <Badge variant="secondary" className="ml-2 text-xs">{provider.tag}</Badge>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{provider.cost}</div>
                    <div className="text-sm text-green-600">{provider.delivery}</div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">{provider.status}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RCS Messaging */}
        <div>
          <h3 className="font-medium mb-3">RCS Messaging</h3>
          <div className="space-y-3">
            {bspData.rcs.map((provider) => (
              <div 
                key={provider.name}
                className={`p-4 rounded-lg border ${provider.recommended ? 'bg-green-50 dark:bg-green-950/20 border-green-200' : 'bg-gray-50 dark:bg-gray-800'}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="font-medium">{provider.name}</span>
                    {provider.tag && (
                      <Badge variant="secondary" className="ml-2 text-xs">{provider.tag}</Badge>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{provider.cost}</div>
                    <div className="text-sm text-green-600">{provider.delivery}</div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">{provider.status}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Optimization Opportunity */}
        <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs mt-0.5">!</div>
            <div>
              <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-1">Optimization Opportunity</h4>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-2">
                Switching to WhatsApp Cloud API could save ₹28,000/month (₹0.07 per message).
              </p>
              <Button variant="link" className="p-0 h-auto text-blue-600 text-sm">
                Analyze Impact →
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
