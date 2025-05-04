
import React from "react";
import { SearchBar } from "@/components/SearchBar";

export const Hero: React.FC = () => {
  return (
    <section className="relative">
      <div className="hero-gradient py-20 lg:py-32">
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Find Your Dream Home Today
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mb-10">
            Discover thousands of properties for sale and rent across the country.
            Start your search today and find your perfect home.
          </p>
          <div className="w-full max-w-4xl">
            <SearchBar />
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 bg-black/50 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      />
    </section>
  );