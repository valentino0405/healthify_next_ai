import React from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const Start = () => {
  const router = useRouter();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with logo and tagline */}
        <div className="text-center mb-16">
          <h1 className="font-bold text-4xl md:text-5xl mt-8 mb-4 text-blue-700">
            Welcome to <span className="text-green-500">Healthify</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Your partner in health and wellness. Choose your journey below.
          </p>
        </div>

        {/* Cards container with responsive layout */}
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
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
        <div className="text-center mt-16 text-slate-500 text-sm">
          <p>Â© 2025 Healthify. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Start;