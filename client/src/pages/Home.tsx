
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
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8 flex justify-center">
                <img 
                  src="/small_icon_1024_1766230347010.png" 
                  alt="RowLogger" 
                  className="w-48 h-48 object-contain drop-shadow-2xl"
                />
              </div>
              <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold tracking-wide uppercase mb-6 border border-blue-100">
                Simple. Powerful. Focused.
              </span>
              <h1 className="text-5xl md:text-7xl font-bold font-display text-primary mb-6 leading-[1.1]">
                Indoor Rowing Tracking.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Without the Clutter.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                <span className="brand-text">RowLogger</span> is a lightweight tracking app for indoor rowing. Log your sessions, track your PBs, analyze your power curve, and monitor your progress—no bells and whistles, just what you need.
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

      {/* DOWNLOAD SECTION */}
      <section id="download" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 border-y border-blue-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary mb-4">
              Download <span className="brand-text">RowLogger</span>
            </h2>
            <p className="text-slate-600 text-lg mb-10">
              Get started tracking your rowing sessions on your mobile device
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* Android Store */}
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl hover:from-blue-700 hover:to-cyan-600 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs font-medium opacity-80">GET IT ON</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </a>

              {/* iOS Store - Coming Soon */}
              <div className="relative">
                <div className="inline-flex items-center gap-3 px-8 py-4 bg-gray-300 text-gray-600 rounded-2xl cursor-not-allowed opacity-60">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs font-medium opacity-80">Download on the</div>
                    <div className="text-lg font-bold">App Store</div>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  Coming Soon
                </div>
              </div>
            </div>
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
                className="text-2xl font-bold text-primary hover:text-blue-600 transition-colors brand-text"
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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary mb-4">Training Resources</h2>
            <p className="text-slate-600 text-lg mb-12">
              Tutorials and training sessions to help you improve your technique and get the most out of <span className="brand-text">RowLogger</span>.
            </p>
            
            <div className="py-20 bg-white rounded-3xl border-2 border-dashed border-slate-300 shadow-sm">
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Coming Soon</h3>
                <p className="text-slate-500 text-lg max-w-md mx-auto">
                  Training videos and tutorials are on the way. Check back soon for helpful content!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
