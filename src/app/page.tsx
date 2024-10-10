import BrainIcon from "./icons/brain";
import SolarSystemIcon from "./icons/solar_system";

export default function Home() {
  return (
    <div className="h-1/2 overflow-y-hidden max-w-screen-2xl mx-auto">
      {/* Navbar */}
      <div className="h-16 w-full flex px-8 py-3 justify-between">
        <BrainIcon />
        <div className="content-center border-[1px] border-lg border-foreground px-3 cursor-pointer hover:bg-foreground hover:text-slate-800">
          <div className="font-bold">Get Started</div>
        </div>
      </div>

      {/* Main Contents */}
      <div className="flex flex-col gap-y-14 md:flex-row mt-32 px-8">
        <div className="content-center">
          <h3 className="text-xl md:text-2xl font-bold tracking-wide text-white">The best solution for</h3>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
            Big data at scale with efficiency and reliability
          </h1>
          <br />
          <p className="text-sm text-[#5F5F5F] tracking-wide">
            Elevate your apps with instant access to real-time data from diverse sources.
            Our platform simplifies data integration, enabling smarter decisions, better analytics, and faster innovation for your success.
          </p>
        </div>
        <div className="w-5/6 text-foreground order-first md:order-last mx-auto">
          <SolarSystemIcon />
        </div>
      </div>
    </div>
  );
}
