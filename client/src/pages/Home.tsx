
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VideoCard } from "@/components/VideoCard";
import { Loader2, BarChart3, TrendingUp, Download, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  // Static video data for GitHub Pages deployment
  const videos = [
    {
      id: 1,
      title: "Getting Started with RowLogger",
      description: "Learn the basics of tracking your rowing sessions.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
      thumbnailUrl: "https://images.unsplash.com/photo-1547483954-3fb180c96bfa",
      category: "training"
    },
    {
      id: 2,
      title: "Advanced Features",
      description: "Deep dive into data analysis and export tools.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
      thumbnailUrl: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff",
      category: "training"
    }
  ];

  const trainingVideos = videos;
  const isLoading = false;
  const error = null;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
        {/* Abstract Background Graphic */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-300 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold tracking-wide uppercase mb-6 border border-blue-100">
                Simple. Powerful. Focused.
              </span>
              <h1 className="text-5xl md:text-7xl font-bold font-display text-primary mb-6 leading-[1.1]">
                Indoor Rowing Tracking.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Without the Clutter.
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                RowLogger is a lightweight tracking app for indoor rowing. Log your sessions, track your PBs, analyze your power curve, and monitor your progress—no bells and whistles, just what you need.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#features"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-primary rounded-full hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Explore Features
                </a>
                <a 
                  href="#videos"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary transition-all duration-200 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300"
                >
                  Training Videos
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-primary mb-4">Everything You Need. Nothing You Don't.</h2>
              <p className="text-slate-600 text-lg">Track your progress with focused features designed for serious rowers.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {[
                { 
                  icon: BarChart3, 
                  title: "Simple Session Logging", 
                  text: "Quickly log your indoor rowing sessions with distance, power, splits, and time. Get straight to training without unnecessary complexity." 
                },
                { 
                  icon: TrendingUp, 
                  title: "PB Tracking", 
                  text: "Automatically track your personal bests across all raced distances. See your progress at a glance and know when you've hit a new milestone." 
                },
                { 
                  icon: BarChart3, 
                  title: "Performance Summary", 
                  text: "Monitor your overall progress with workout volume summaries. Track your consistency and total training load over time." 
                },
                { 
                  icon: TrendingUp, 
                  title: "Power Curve Analysis", 
                  text: "Visualize your performance across varying distances compared to your previous metrics. Identify strengths and areas for improvement." 
                }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-primary">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Quick Workout Challenges</h3>
                <p className="text-slate-600 leading-relaxed">
                  Get started fast with easy workout challenges. Perfect for when you want to jump into a session without planning.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-primary">
                  <Download className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Import & Export Data</h3>
                <p className="text-slate-600 leading-relaxed">
                  Your data is yours. Easily import and export your training history whenever you need it.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-600 mb-4">Coming soon to</p>
              <a 
                href="https://rowlogger.app" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold text-primary hover:text-blue-600 transition-colors"
              >
                rowlogger.app
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING VIDEOS SECTION */}
      <section id="videos" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-primary mb-4">Training Resources</h2>
              <p className="text-slate-600 text-lg max-w-2xl">
                Watch our latest tutorials and training sessions to improve your technique and get the most out of RowLogger.
              </p>
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <Loader2 className="w-12 h-12 text-primary animate-spin" />
            </div>
          ) : error ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-red-100 shadow-sm">
              <p className="text-red-500 font-medium">Failed to load videos. Please try again later.</p>
            </div>
          ) : trainingVideos.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 border-dashed">
              <p className="text-slate-500 text-lg">No training videos available yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trainingVideos.map((video) => (
                <VideoCard
                  key={video.id}
                  title={video.title}
                  description={video.description}
                  url={video.url}
                  thumbnailUrl={video.thumbnailUrl}
                  category={video.category}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
