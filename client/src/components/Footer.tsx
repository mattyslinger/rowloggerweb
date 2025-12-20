export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-display mb-2">RowLogger</h3>
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
