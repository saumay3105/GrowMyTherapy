import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative h-screen" style={{ backgroundColor: "#F3F0E8" }}>
      {/* Logo/Header - Outside on cream background */}
      <div className="absolute top-8 left-4 md:left-16 z-20">
        <div className="flex items-center space-x-3">
          <div className="text-gray-800">
            <h3 className="text-lg font-semibold leading-tight">
              Dr. Serena Blake, PsyD
            </h3>
            <p className="text-sm opacity-90 leading-tight">
              Clinical Psychologist
            </p>
          </div>
        </div>
      </div>

      {/* Inset Video Container */}
      <div className="absolute top-24 left-2 right-2 md:left-16 md:right-16 bottom-16">
        <div className="relative w-full h-full">
          <video
            className="w-full h-full object-cover"
            src="/bg-1.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Main Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-6xl mx-auto">
              {/* Main Heading */}
              <h1 className="text-3xl md:text-3xl lg:text-6xl font-light mb-6 leading-tight">
                Psychological Care for
              </h1>

              {/* Subheading */}
              <h2 className="text-2xl md:text-2xl lg:text-5xl font-light mb-12 leading-tight">
                Change, Insight, and Well-Being
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl lg:text-2xl font-light mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
                Offering individual psychotherapy for adults and couples
                <span className="underline decoration-1 underline-offset-4"></span>{" "}
              </p>
              {/* CTA Button */}
              <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/40 hover:border-white/60 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
                SCHEDULE A
                <br />
                CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
