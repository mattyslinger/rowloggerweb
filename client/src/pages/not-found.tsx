
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <Card className="w-full max-w-2xl mx-4 border-2 border-primary/20 shadow-2xl">
        <CardContent className="pt-12 pb-8 text-center">
          {/* Logo/Icon */}
          <div className="mb-6 flex justify-center">
            <img 
              src="/small_icon_1024_1766230347010.png" 
              alt="RowLogger" 
              className="w-32 h-32 opacity-50 animate-pulse"
            />
          </div>

          {/* 404 Title */}
          <h1 className="text-8xl font-bold font-display text-primary mb-4 animate-bounce">
            404
          </h1>

          {/* Funny Rowing-Themed Message */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            You've Lost Your Oars! 🚣
          </h2>

          <p className="text-lg text-gray-600 mb-6 max-w-md mx-auto">
            Looks like you've rowed off course... This page is like a boat without oars — 
            it's going nowhere fast!
          </p>

          {/* Fun Stats */}
          <div className="bg-slate-50 rounded-lg p-6 mb-8 max-w-md mx-auto border border-slate-200">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-primary">0m</p>
                <p className="text-sm text-gray-600">Distance Found</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">∞</p>
                <p className="text-sm text-gray-600">Split Time</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">0W</p>
                <p className="text-sm text-gray-600">Power Output</p>
              </div>
            </div>
          </div>

          {/* Motivational Quote */}
          <blockquote className="italic text-gray-500 mb-8 max-w-lg mx-auto">
            "The only bad workout is the one that didn't happen... and this page."
          </blockquote>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => setLocation("/")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8"
            >
              Row Back Home
            </Button>
            <Button 
              onClick={() => window.history.back()}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 font-semibold px-8"
            >
              Reverse Stroke
            </Button>
          </div>

          {/* Footer Message */}
          <p className="text-sm text-gray-400 mt-8">
            Don't worry, even Olympic rowers miss their catches sometimes! 🏅
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
