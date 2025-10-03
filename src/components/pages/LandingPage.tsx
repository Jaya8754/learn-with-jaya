import { Button } from "../ui/button";
import { SquareCheckBig, Clock, Code, Check, ClipboardList } from "lucide-react";

const LandingPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Left side: Image */}
        <aside
          className="relative md:w-1/2 h-80 md:h-auto bg-center bg-cover"
          style={{ backgroundImage: "url('/Learn With Jaya.png')" }}
        ></aside>

        {/* Right side: Content */}
        <section className="relative md:w-1/2 bg-gradient-to-br from-indigo-700 via-indigo-500 to-indigo-800 flex flex-col items-center justify-center px-6 py-16 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-xl shadow-white">
            Welcome to 
          </h1>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-500 via-teal-300 to-teal-500 bg-clip-text text-transparent">
            <em>Learn With Jaya</em>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white drop-shadow">
            Let’s make coding a fun experience together.
          </p>

          <Button
            className="relative overflow-hidden text-md px-6 py-3 rounded-full border-2 border-white drop-shadow-lg shadow-white text-white 
                      transition-all duration-300 
                      hover:text-white hover:border-transparent
                      bg-transparent"
          >
            <span className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-500 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
            <span className="relative z-10">Get Started</span>
          </Button>

          <ul className="mt-6 text-white space-y-2 drop-shadow">
            <li className="flex items-center gap-2">
              <SquareCheckBig className="w-5 h-5 text-teal-400" />
              <span>Learn HTML, CSS, and JavaScript basics</span>
            </li>
            <li className="flex items-center gap-2">
              <SquareCheckBig className="w-5 h-5 text-teal-400" />
              <span>Build interactive web projects</span>
            </li>
            <li className="flex items-center gap-2">
              <SquareCheckBig className="w-5 h-5 text-teal-400" />
              <span>Prepare for coding interviews</span>
            </li>
          </ul>

          <p className="mt-4 text-sm text-white/80 drop-shadow">
            No experience required. Start today!
          </p>
        </section>
      </div>

      {/* Roadmap / Concepts Section */}
     <section className="bg-gray-100 px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            Roadmap — What you'll learn
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            A short, practical path from basics to projects. Each stage includes a short project so you learn by building.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Stage 1 */}
            <article className="relative bg-gradient-to-br from-teal-400 via-blue-400 to-indigo-500 text-white rounded-2xl shadow-2xl p-8 transform transition-transform duration-300 hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <Code className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-semibold">Foundations</h3>
                </div>
                <span className="inline-flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm">
                  <Clock className="w-4 h-4" /> 1–2 weeks
                </span>
              </div>

              <p className="mb-4 text-sm opacity-95">
                Semantic HTML, CSS fundamentals, Flexbox & Grid — the building blocks of layout and accessibility.
              </p>

              <ul className="mb-6 space-y-2 text-sm">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-white/90 mt-1" />
                  <span>Responsive layouts with Flexbox & Grid</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-white/90 mt-1" />
                  <span>Semantic elements & forms</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-white/90 mt-1" />
                  <span>Accessibility basics (aria, alt, landmarks)</span>
                </li>
              </ul>

              <div className="flex items-center gap-3">
                <Button className="px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white">
                  Start HTML Basics
                </Button>
                <a className="text-white/90 text-sm underline opacity-95" href="#projects-html">Project: Landing page</a>
              </div>
            </article>

            {/* Stage 2 */}
            <article className="relative bg-gradient-to-br from-purple-400 via-pink-400 to-rose-500 text-white rounded-2xl shadow-2xl p-8 transform transition-transform duration-300 hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <ClipboardList className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-semibold">Interactivity</h3>
                </div>
                <span className="inline-flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm">
                  <Clock className="w-4 h-4" /> 2–3 weeks
                </span>
              </div>

              <p className="mb-4 text-sm opacity-95">
                JavaScript fundamentals: DOM, events, async, and practical patterns for building real features.
              </p>

              <ul className="mb-6 space-y-2 text-sm">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-white/90 mt-1" />
                  <span>Vanilla JS: functions, DOM, events</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-white/90 mt-1" />
                  <span>Fetch, async/await, and APIs</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-white/90 mt-1" />
                  <span>State basics & small app structure</span>
                </li>
              </ul>

              <div className="flex items-center gap-3">
                <Button className="px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white">
                  Start JS Projects
                </Button>
                <a className="text-white/90 text-sm underline opacity-95" href="#projects-js">Project: To-Do app</a>
              </div>
            </article>

            {/* Stage 3 */}
            <article className="relative bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 text-white rounded-2xl shadow-2xl p-8 transform transition-transform duration-300 hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <Code className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-semibold">Projects & Portfolio</h3>
                </div>
                <span className="inline-flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm">
                  <Clock className="w-4 h-4" /> ongoing
                </span>
              </div>

              <p className="mb-4 text-sm opacity-95">
                Combine what you learned into deployable projects, version control, and interview prep.
              </p>

              <ul className="mb-6 space-y-2 text-sm">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-white/90 mt-1" />
                  <span>Project planning & repo structure</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-white/90 mt-1" />
                  <span>Deploying & simple CI (Netlify/ Vercel)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-white/90 mt-1" />
                  <span>Interview questions & practice problems</span>
                </li>
              </ul>

              <div className="flex items-center gap-3">
                <Button className="px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white">
                  Build Portfolio
                </Button>
                <a className="text-white/90 text-sm underline opacity-95" href="#projects-portfolio">Project: Portfolio</a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
