import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const Start = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Enhanced Header with gradient text effects */}
        <div className="text-center mb-16">
          <h1 className="font-bold text-5xl md:text-6xl mt-8 mb-4 relative">
            <span className="relative inline-block overflow-hidden">
              {/* Main gradient text with animated background */}
              <span className={`bg-gradient-to-r from-blue-600 via-purple-500 to-green-500 bg-clip-text text-transparent inline-block transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}>
                Welcome to 
              </span>
              
              {/* Animated gradient for "Healthify" */}
              <span className={`relative ml-2 inline-block transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`} style={{ transitionDelay: '300ms' }}>
                <span className="animate-gradient-x bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent font-extrabold">
                  Healthify
                </span>
                {/* Subtle glow effect */}
                <span className="absolute -inset-1 rounded-lg blur-xl bg-gradient-to-r from-green-400 to-teal-500 opacity-30 group-hover:opacity-40 animate-pulse" style={{ filter: 'blur(20px)', zIndex: -1 }}></span>
              </span>
            </span>
          </h1>
          
          <p 
            className={`text-lg max-w-2xl mx-auto transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <span className="bg-gradient-to-r from-slate-600 to-slate-400 bg-clip-text text-transparent font-medium">
              Your partner in health and wellness. Choose your journey below.
            </span>
          </p>
        </div>

        {/* Cards container with responsive layout */}
        <div 
          className={`flex flex-col md:flex-row justify-center gap-8 md:gap-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          {/* AI's Advice Card */}
          <Card
            className="w-full md:w-80 flex flex-col items-center shadow-2xl rounded-3xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-blue-200 hover:shadow-lg overflow-hidden border-none"
            onClick={() => router.push("/dashboard")}
          >
            <div className="relative w-full h-64">
              <Image
                src="/ai.webp"
                alt="AI Advice"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-t-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold text-xl">AI's Advice</h3>
                  <p className="text-blue-100">Personalized health insights</p>
                </div>
              </div>
            </div>
            <CardContent className="p-6 text-center bg-white w-full">
              <p className="text-slate-600 mb-4">
                Get tailored health recommendations based on your unique profile.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-colors">
                Explore
              </button>
            </CardContent>
          </Card>

          {/* Our Products Card */}
          <Card
            className="w-full md:w-80 flex flex-col items-center shadow-2xl rounded-3xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-green-200 hover:shadow-lg overflow-hidden border-none"
            onClick={() => window.location.href = "https://healthify-next-js-ecommerce.vercel.app/"}
          >
            <div className="relative w-full h-64">
              <Image
                src="/product.png"
                alt="Our Products"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-t-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold text-xl">Our Products</h3>
                  <p className="text-green-100">Premium health solutions</p>
                </div>
              </div>
            </div>
            <CardContent className="p-6 text-center bg-white w-full">
              <p className="text-slate-600 mb-4">
                Browse our curated selection of high-quality health products.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full transition-colors">
                Shop Now
              </button>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div 
          className={`text-center mt-16 text-slate-500 text-sm transition-all duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '1200ms' }}
        >
          <p>© 2025 Healthify. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

// Add this CSS to your global styles or a styled component
const gradientAnimationStyles = `
@keyframes gradient-x {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 5s ease infinite;
}
`;

// Append styles to the document head (in a real app, you'd use a better approach)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = gradientAnimationStyles;
  document.head.appendChild(styleEl);
}

export default Start;