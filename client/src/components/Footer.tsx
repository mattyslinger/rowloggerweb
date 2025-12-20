export function Footer() {
  return (
    <footer className="py-12 text-white" style={{ backgroundColor: '#0B7168' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <img 
              src="/rowlogger-logo.png" 
              alt="RowLogger" 
              className="h-12 w-auto object-contain mb-2 mx-auto md:mx-0"
            />
            <p className="text-slate-300 text-sm max-w-xs">
              Lightweight indoor rowing tracking. Simple, powerful, focused.
            </p>
          </div>
          
          <div className="flex gap-6 text-sm text-slate-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="mailto:support@rowlogger.app" className="hover:text-white transition-colors">Contact Support</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-slate-400">
          &copy; {new Date().getFullYear()} RowLogger. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
