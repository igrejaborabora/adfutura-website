'use client';

import { motion } from 'framer-motion';

export default function DynamicBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#030812]">
      
      {/* 1. Ambient Background Glows (Blurred Orbs) */}
      <div className="absolute inset-0 opacity-80 mix-blend-screen">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] rounded-full bg-blue/30 blur-[140px]"
        />
        
        {/* The warm/orange glow on the bottom left similar to Disruptive Edge */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-15%] left-[-15%] w-[60%] h-[60%] rounded-full bg-[#FF5E3A]/20 blur-[150px]"
        />
        
        {/* Subtle Cyan highlight floating around */}
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -100, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] left-[20%] w-[40%] h-[40%] rounded-full bg-cyan/20 blur-[120px]"
        />
      </div>

      {/* 2. Glass Rings (Mimicking 3D sweeping curves & light trails) */}
      <div className="absolute top-1/2 left-1/2 w-0 h-0 flex items-center justify-center mix-blend-screen">
        
        {/* Massive outer curved ribbon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute w-[180vw] h-[100vw] md:w-[150vw] md:h-[80vw] rounded-[50%] border-[2px] border-cyan/10 blur-[2px] opacity-60"
          style={{ boxShadow: 'inset 0 0 100px rgba(0,200,255,0.1), 0 0 50px rgba(30,111,217,0.1)' }}
        />
        
        {/* Secondary sharp glass streak */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute w-[130vw] h-[160vw] md:w-[110vw] md:h-[130vw] rounded-[50%] border-[1px] border-white/20 blur-[1px] opacity-40"
          style={{ boxShadow: 'inset 0 0 60px rgba(255,255,255,0.05)' }}
        />
        
        {/* Inner deep blue glass ring */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[90vw] h-[90vw] rounded-[50%] border-[3px] border-blue/20 blur-[4px] opacity-50"
          style={{ boxShadow: '0 0 150px rgba(30,111,217,0.3)' }}
        />
      </div>

      {/* 3. Noise Overlay (Optional: makes gradients look more organic like WebGL) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNuKSIvPjwvc3ZnPg==')]" />
    </div>
  );
}
