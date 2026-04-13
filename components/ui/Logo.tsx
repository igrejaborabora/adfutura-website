export default function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <div className="flex items-center gap-3">
      <svg className={className} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Glowing Hexagon / Network Node (Abstract AF) */}
        <path d="M12 25 L22 8 M22 8 L42 8 M42 8 L52 25 M52 25 L42 42 M42 42 L22 42 M22 42 L12 25 Z" stroke="url(#paint0_linear)" strokeWidth="2" strokeLinejoin="round"/>
        
        {/* Inner Connection */}
        <path d="M22 8 L32 25 L42 42 M12 25 L52 25 M32 25 L42 8" stroke="rgba(0, 200, 255, 0.4)" strokeWidth="1.5" strokeDasharray="3 3"/>
        
        {/* Glowing Nodes */}
        <circle cx="12" cy="25" r="3" fill="#00C8FF" />
        <circle cx="22" cy="8" r="3" fill="#1E6FD9" />
        <circle cx="42" cy="8" r="3" fill="#00C8FF" />
        <circle cx="52" cy="25" r="3" fill="#1E6FD9" />
        <circle cx="42" cy="42" r="3" fill="#00C8FF" />
        <circle cx="22" cy="42" r="3" fill="#1E6FD9" />
        <circle cx="32" cy="25" r="4.5" fill="#FFFFFF" filter="url(#glow)"/>
        
        {/* Definitions */}
        <defs>
          <linearGradient id="paint0_linear" x1="12" y1="25" x2="52" y2="25" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00C8FF" />
            <stop offset="1" stopColor="#1E6FD9" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
      <span className="font-sans font-black text-2xl tracking-tighter text-white">
        ad<span className="text-[#1E6FD9]">Futura</span>
      </span>
    </div>
  );
}
