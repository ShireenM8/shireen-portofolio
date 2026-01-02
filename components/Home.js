export default function Home() {
  return (
    <section
      id="hero"
      className="
        pt-16 pb-14
        bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900
        relative
      "
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-14 items-center">

        {/* ================= LEFT – INTRO ================= */}
        <div>
          <h1 className="text-4xl md:text-4.9xl font-bold mb-4">
            Hello,
          </h1>

          {/* SEBARIS */}
          <h1 className="text-4xl md:text-4.9xl font-bold mb-5">
            I&apos;m{" "}
            <span className="text-accent">
              Shireen Malika
            </span>
          </h1>

          <p className="text-lg text-accent/90 font-medium mb-6">
            Data Analyst
          </p>

          <p className="text-gray-300 leading-relaxed text-justify max-w-xl">
            Data Analyst with nearly three years of experience in e-commerce and fintech, turning customer and performance data into actionable insights for strategic decision-making and business growth.
          </p>

          {/* CTA */}
          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="
                px-6 py-3 rounded-full
                bg-accent text-slate-900
                font-semibold
                hover:opacity-90 transition
              "
            >
              View Projects
            </a>

            <a
              href="/CV-Shireen-Malika.pdf"
              download
              className="
                px-6 py-3 rounded-full
                border border-accent
                text-accent
                hover:bg-accent hover:text-slate-900
                transition
              "
            >
              Download CV
            </a>
          </div>
        </div>

        {/* ================= CENTER – PHOTO ================= */}
        <div className="flex justify-center">
          <img
            src="/image.JPG"
            alt="Shireen Malika"
            className="
              w-full max-w-md
              rounded-2xl
              object-cover
              shadow-xl
            "
          />
        </div>

        {/* ================= RIGHT – BRANDS ================= */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
            Brands & Platforms Collaborated
          </p>

          <p className="text-sm text-gray-300 mb-2 leading-relaxed">
            Collaborated with various brands and platforms to deliver data-driven insights, evaluate campaign performance, and support scalable business growth.
          </p>

          {/* LOGO GRID */}
          <div className="grid grid-cols-3 gap-3">
            {[
              "brand1","brand2","brand3","brand4",
              "brand5","brand6","brand7","brand8",
              "brand9","brand10","brand11","brand12",
              "brand13","brand14","brand15"
            ].map((brand) => (
              <div
                key={brand}
                className="
                  bg-white
                  rounded-2xl
                  h-16
                  px-4
                  flex items-center justify-center
                  shadow-sm
                "
              >
                <img
                  src={`/brands/${brand}.png`}
                  alt={brand}
                  className="
                    max-h-10
                    max-w-full
                    object-contain
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2">
          {/* Panah */}
          <div className="w-4 h-4 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-400 animate-bounce"></div>
          <div className="w-4 h-4 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-400 animate-bounce delay-150"></div>
          <div className="w-4 h-4 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-400 animate-bounce delay-300"></div>
        </div>
      </div>
    </section>
  );
}
