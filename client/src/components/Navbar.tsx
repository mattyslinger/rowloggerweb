import { Link } from "wouter";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Features", href: "#features" },
    { name: "Training", href: "#videos" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4 border-b border-slate-100"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a
          href="#hero"
          className="flex items-center hover:opacity-80 transition-opacity"
          onClick={(e) => scrollToSection(e, "#hero")}
        >
          <img
            src="/rowlogger-logo.png"
            alt="RowLogger"
            className="h-12 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-lg p-4 animate-in slide-in-from-top-5">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-base font-medium text-slate-800 py-2 hover:text-primary"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

// Placeholder for the hero section
export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white py-20">
      <div className="text-center px-4">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 animate-fade-in">
          Unlock Your Potential with RowLogger
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 animate-fade-in-delay-1">
          The ultimate tool for tracking your rowing performance and achieving your fitness goals.
        </p>
        <div className="animate-fade-in-delay-2">
          <a
            href="#features"
            className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all duration-300 mr-4"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Learn More
          </a>
          <a
            href="#download"
            className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#download")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get the App
          </a>
        </div>
      </div>
    </section>
  );
}

// Placeholder for the features section
export function Features() {
  const features = [
    {
      title: "Real-time Tracking",
      description: "Monitor your speed, distance, and stroke rate in real-time.",
      icon: "📊",
    },
    {
      title: "Performance Analysis",
      description: "Dive deep into your workout data with detailed analytics.",
      icon: "📈",
    },
    {
      title: "Goal Setting",
      description: "Set personal goals and track your progress over time.",
      icon: "🎯",
    },
    {
      title: "Progress Sharing",
      description: "Share your achievements with friends and your training community.",
      icon: "🤝",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-primary mb-4">
            Features to Elevate Your Rowing
          </h2>
          <p className="text-lg text-slate-600">
            Discover the tools that will help you perform at your best.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Download section
export function Download() {
  return (
    <section id="download" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-primary mb-4">
          Download the App
        </h2>
        <p className="text-lg text-slate-600 mb-12">
          Get RowLogger on your device and start tracking your progress today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="https://play.google.com/store/apps/details?id=com.example.rowlogger" // Placeholder for Android
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300"
          >
            Download on Android
          </a>
          <span className="inline-block px-8 py-4 border-2 border-primary text-primary font-bold rounded-full cursor-not-allowed opacity-70">
            Coming Soon on iOS
          </span>
        </div>
      </div>
    </section>
  );
}


// Placeholder for the videos section
export function Videos() {
  const videos = [
    { title: "Getting Started with RowLogger", url: "/api/video1" },
    { title: "Advanced Features", url: "/api/video2" },
    { title: "Training Tips", url: "/api/video3" },
  ];

  return (
    <section id="videos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-primary mb-4">
            Training Videos
          </h2>
          <p className="text-lg text-slate-600">
            Learn how to make the most of RowLogger with our helpful tutorials.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {videos.map((video) => (
            <div
              key={video.title}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-primary mb-3">
                {video.title}
              </h3>
              <p className="text-slate-600 mb-4">
                Watch this video to learn more about RowLogger.
              </p>
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold hover:underline"
              >
                Watch Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Placeholder for the footer
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              src="/small_icon_1024_1766230347010.png"
              alt="RowLogger"
              className="h-12 w-auto mb-4 mx-auto md:mx-0"
            />
            <p className="text-sm opacity-80">
              RowLogger helps you track your rowing performance and achieve your
              fitness goals.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 uppercase">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="hover:opacity-80 transition-opacity">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="hover:opacity-80 transition-opacity">
                  Features
                </a>
              </li>
              <li>
                <a href="#download" className="hover:opacity-80 transition-opacity">
                  Download
                </a>
              </li>
              <li>
                <a href="#videos" className="hover:opacity-80 transition-opacity">
                  Training
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 uppercase">Contact Us</h4>
            <p className="text-sm">Email: support@rowlogger.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
            <div className="flex space-x-4 mt-4 justify-center md:justify-start">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm opacity-80">
          <p>
            © {currentYear} RowLogger. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}