import Image from "next/image";

export default function Ecosystem() {
  return (
    <section className="py-40 bg-gradient-to-b from-black via-[#050d2a] via-40% to-[#0d1a4a] flex items-center justify-center min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <Image
          src="/ecosystem-temporary-graphic.png"
          alt="FinOS Ecosystem"
          width={730}
          height={960}
          className="w-full max-w-3xl lg:max-w-5xl h-auto"
          priority
        />
      </div>
    </section>
  );
}
