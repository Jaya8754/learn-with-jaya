import { Button } from "../ui/button";

const LandingPage = () => {
  return (
    <div
  className="relative min-h-screen bg-center bg-cover flex flex-col items-center justify-start pt-32"
  style={{ backgroundImage: "url('/background.png')" }}
>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      {/* You can change 50 → 40/60/etc. to control darkness */}

      {/* Content */}
      <div className="relative text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
          Welcome to Learn With Jaya
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white drop-shadow">
          Let’s make coding a fun experience together.
        </p>
        <Button variant="default">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
