import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import ReactPlayer from 'react-player';
import { motion } from "framer-motion";

interface VideoCardProps {
  title: string;
  description: string;
  url: string;
  thumbnailUrl?: string | null;
  category?: string | null;
}

export function VideoCard({ title, description, url, thumbnailUrl, category }: VideoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white h-full flex flex-col">
        <div className="relative aspect-video w-full bg-slate-900">
          <ReactPlayer
            url={url}
            width="100%"
            height="100%"
            light={thumbnailUrl || true}
            controls
            className="absolute top-0 left-0"
          />
        </div>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start gap-2">
            <CardTitle className="text-xl font-bold text-primary leading-tight">
              {title}
            </CardTitle>
            {category && (
              <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground bg-slate-100 px-2 py-1 rounded">
                {category}
              </span>
            )}
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="text-base text-slate-600">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}
