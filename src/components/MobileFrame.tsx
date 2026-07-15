import { useState, useEffect, type ReactNode } from "react";
import { Battery, Signal, Wifi } from "lucide-react";

export default function MobileFrame({ children }: { children: ReactNode }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    update();
    const id = setInterval(update, 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-[100dvh] bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-950 flex items-center justify-center p-4 md:p-8">
      {/* Desktop: phone mockup frame */}
      <div className="w-full max-w-[390px] md:shadow-[0_0_80px_rgba(16,185,129,0.15)] md:rounded-[3rem] md:border-[6px] md:border-gray-800 md:bg-gray-900 md:p-2 relative">
        {/* Phone notch (desktop only) */}
        <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-800 rounded-b-2xl z-50 items-center justify-center">
          <div className="w-16 h-4 bg-gray-900 rounded-full" />
        </div>

        {/* Status bar */}
        <div className="hidden md:flex items-center justify-between px-8 pt-2 pb-1 text-[11px] text-white/80 font-medium">
          <span>{time}</span>
          <div className="flex items-center gap-1.5">
            <Signal className="w-3.5 h-3.5" />
            <Wifi className="w-3.5 h-3.5" />
            <Battery className="w-4 h-4" />
          </div>
        </div>

        {/* App content */}
        <div className="bg-white md:rounded-[2.2rem] overflow-hidden md:max-h-[780px] md:overflow-y-auto relative" style={{ minHeight: "100dvh" }}>
          {children}
        </div>

        {/* Home indicator (desktop only) */}
        <div className="hidden md:flex justify-center pb-2 pt-1">
          <div className="w-28 h-1 bg-gray-600 rounded-full" />
        </div>
      </div>
    </div>
  );
}
