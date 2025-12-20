import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VideoCard } from "@/components/VideoCard";
import { useVideos } from "@/hooks/use-videos";
import { Loader2, Shield, Lock, Eye, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const { data: videos, isLoading, error } = useVideos();

  // Filter videos by category if needed, for now show all
  const trainingVideos = videos || [];

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
                Performance Analytics
              </span>
              <h1 className="text-5xl md:text-7xl font-bold font-display text-primary mb-6 leading-[1.1]">
                Master Your Stroke.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Protect Your Data.
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                RowLogger provides advanced telemetry for rowing performance while ensuring your personal data remains secure and private.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#videos"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-primary rounded-full hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Training Videos
                </a>
                <a 
                  href="#privacy"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary transition-all duration-200 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300"
                >
                  Privacy Policy
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRIVACY POLICY SECTION */}
      <section id="privacy" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-primary mb-4">Privacy & Security</h2>
              <p className="text-slate-600 text-lg">How we handle and protect your rowing data.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { icon: Shield, title: "Data Collection", text: "We only collect essential telemetry data (stroke rate, speed, distance) required for performance analysis." },
                { icon: Lock, title: "Secure Storage", text: "All training logs are encrypted at rest and in transit. Your personal metrics are never sold to third parties." },
                { icon: Eye, title: "Transparency", text: "You have full control over your data. Export or delete your training history at any time through the app settings." }
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

            <div className="prose prose-slate max-w-none bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100">
              <h3>Detailed Privacy Policy</h3>
              <p>
                <strong>Last Updated: June 15, 2024</strong>
              </p>
              <p>
                At RowLogger, we respect your privacy and are committed to protecting it through our compliance with this policy. 
                This policy describes the types of information we may collect from you or that you may provide when you visit the website 
                RowLogger or use our mobile application.
              </p>
              <h4>1. Information We Collect</h4>
              <p>
                We collect several types of information from and about users of our Application, including information by which you may be personally identified, such as name, email address, and rowing statistics.
              </p>
              <h4>2. How We Use Your Information</h4>
              <p>
                We use information that we collect about you or that you provide to us, including any personal information:
              </p>
              <ul>
                <li>To present our Application and its contents to you.</li>
                <li>To provide you with information, products, or services that you request from us.</li>
                <li>To fulfill any other purpose for which you provide it.</li>
              </ul>
              <h4>3. Data Security</h4>
              <p>
                We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure.
              </p>
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
