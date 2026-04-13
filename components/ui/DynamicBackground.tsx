'use client';

export default function DynamicBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-midnight">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue/10 blur-[120px] mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan/10 blur-[150px] mix-blend-screen" />
      <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-deep-navy/40 blur-[100px] mix-blend-screen" />
    </div>
  );
}
