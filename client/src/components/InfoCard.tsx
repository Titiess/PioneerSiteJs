import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export default function InfoCard({ title, description, icon: Icon }: InfoCardProps) {
  return (
    <Card className="h-full hover-elevate transition-all" data-testid={`card-${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <CardHeader>
        {Icon && (
          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        )}
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
