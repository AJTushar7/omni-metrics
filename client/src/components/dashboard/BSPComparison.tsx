import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Star, TrendingUp, DollarSign, Clock, Shield } from "lucide-react";

const bspData = {
  whatsapp: [
    { name: "Cloud API", cost: 0.08, delivery: 97.8, reliability: 99.2, support: 95, tag: "RECOMMENDED", color: "bg-green-500" },
    { name: "MM Lite", cost: 0.05, delivery: 94.2, reliability: 96.8, support: 88, tag: "COST EFFICIENT", color: "bg-blue-500" },
    { name: "Twilio", cost: 0.12, delivery: 98.5, reliability: 99.5, support: 98, tag: "PREMIUM", color: "bg-purple-500" },
    { name: "Gupshup", cost: 0.07, delivery: 95.8, reliability: 97.2, support: 90, tag: "BALANCED", color: "bg-orange-500" },
    { name: "MessageBird", cost: 0.09, delivery: 96.5, reliability: 98.1, support: 92, tag: "RELIABLE", color: "bg-teal-500" },
    { name: "Vonage", cost: 0.11, delivery: 97.2, reliability: 98.8, support: 94, tag: "ENTERPRISE", color: "bg-indigo-500" },
    { name: "Infobip", cost: 0.10, delivery: 96.8, reliability: 98.3, support: 93, tag: "GLOBAL", color: "bg-pink-500" },
    { name: "Clickatell", cost: 0.06, delivery: 93.5, reliability: 95.8, support: 85, tag: "BUDGET", color: "bg-yellow-500" },
    { name: "Route Mobile", cost: 0.08, delivery: 95.2, reliability: 96.5, support: 89, tag: "LOCAL", color: "bg-cyan-500" },
    { name: "Kaleyra", cost: 0.09, delivery: 96.1, reliability: 97.8, support: 91, tag: "SCALABLE", color: "bg-red-500" }
  ],
  email: [
    { name: "SendGrid", cost: 0.02, delivery: 98.2, reliability: 99.1, support: 96, tag: "RECOMMENDED", color: "bg-blue-600" },
    { name: "Mailgun", cost: 0.03, delivery: 97.5, reliability: 98.8, support: 94, tag: "DEVELOPER FRIENDLY", color: "bg-green-600" },
    { name: "Amazon SES", cost: 0.01, delivery: 96.8, reliability: 99.5, support: 88, tag: "COST EFFICIENT", color: "bg-orange-600" },
    { name: "Postmark", cost: 0.05, delivery: 99.1, reliability: 99.8, support: 98, tag: "PREMIUM", color: "bg-purple-600" },
    { name: "Mailchimp", cost: 0.04, delivery: 97.2, reliability: 98.2, support: 95, tag: "ALL-IN-ONE", color: "bg-yellow-600" }
  ],
  push: [
    { name: "Firebase", cost: 0.01, delivery: 94.5, reliability: 99.2, support: 92, tag: "RECOMMENDED", color: "bg-red-600" },
    { name: "OneSignal", cost: 0.02, delivery: 93.8, reliability: 98.5, support: 89, tag: "FEATURE RICH", color: "bg-blue-600" },
    { name: "Pusher", cost: 0.03, delivery: 95.2, reliability: 98.8, support: 94, tag: "REAL-TIME", color: "bg-green-600" },
    { name: "Urban Airship", cost: 0.04, delivery: 96.1, reliability: 99.1, support: 96, tag: "ENTERPRISE", color: "bg-purple-600" },
    { name: "Batch", cost: 0.02, delivery: 94.8, reliability: 98.2, support: 90, tag: "MOBILE FIRST", color: "bg-teal-600" }
  ]
};

const BSPCard = ({ bsp, index }: { bsp: any; index: number }) => (
  <div className="group relative">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-gray-100 dark:to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
    <div className="relative p-4 border rounded-lg hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${bsp.color}`}></div>
          <h4 className="font-semibold text-sm">{bsp.name}</h4>
        </div>
        <Badge variant="secondary" className="text-xs px-2 py-1">{bsp.tag}</Badge>
      </div>
      
      <div className="grid grid-cols-2 gap-3 text-xs">
        <div>
          <div className="flex items-center gap-1 mb-1">
            <DollarSign className="h-3 w-3 text-green-600" />
            <span className="text-muted-foreground">Cost</span>
          </div>
          <div className="font-semibold">₹{bsp.cost.toFixed(2)}</div>
        </div>
        <div>
          <div className="flex items-center gap-1 mb-1">
            <TrendingUp className="h-3 w-3 text-blue-600" />
            <span className="text-muted-foreground">Delivery</span>
          </div>
          <div className="font-semibold">{bsp.delivery}%</div>
        </div>
        <div>
          <div className="flex items-center gap-1 mb-1">
            <Shield className="h-3 w-3 text-purple-600" />
            <span className="text-muted-foreground">Reliability</span>
          </div>
          <div className="font-semibold">{bsp.reliability}%</div>
        </div>
        <div>
          <div className="flex items-center gap-1 mb-1">
            <Star className="h-3 w-3 text-yellow-600" />
            <span className="text-muted-foreground">Support</span>
          </div>
          <div className="font-semibold">{bsp.support}%</div>
        </div>
      </div>
      
      <div className="mt-3">
        <div className="flex justify-between text-xs mb-1">
          <span>Overall Score</span>
          <span>{Math.round((bsp.delivery + bsp.reliability + bsp.support) / 3)}%</span>
        </div>
        <Progress value={Math.round((bsp.delivery + bsp.reliability + bsp.support) / 3)} className="h-1" />
      </div>
    </div>
  </div>
);

const ChannelSection = ({ title, bsps, icon }: { title: string; bsps: any[]; icon: React.ReactNode }) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        {icon}
        {title}
        <Badge variant="outline" className="ml-auto">{bsps.length} Providers</Badge>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {bsps.map((bsp, index) => (
          <BSPCard key={bsp.name} bsp={bsp} index={index} />
        ))}
      </div>
    </CardContent>
  </Card>
);

export const BSPComparison = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-6">
        <ChannelSection 
          title="WhatsApp Business Service Providers" 
          bsps={bspData.whatsapp} 
          icon={<div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">W</div>}
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <ChannelSection 
            title="Email Service Providers" 
            bsps={bspData.email} 
            icon={<div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">E</div>}
          />
          <ChannelSection 
            title="Push Notification Providers" 
            bsps={bspData.push} 
            icon={<div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">P</div>}
          />
        </div>
      </div>
    </div>
  );
};
