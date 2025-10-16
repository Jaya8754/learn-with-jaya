import ConceptCard from "@/components/pages/ConceptCard";

const contents = [
  {
    title: "Basics",
    slug: "basics",
    description: "HTML, CSS, and JavaScript fundamentals — build static pages and add simple interactivity.",
    bullets: [
      "Semantic HTML & accessible markup",
      "CSS fundamentals, box model, typography",
      "Flexbox and Grid for layout",
      "Small project: responsive landing page",
    ],
  },
  {
    title: "Intermediate",
    slug: "intermediate",
    description: "Responsive UI, modern JS (ES6+), working with APIs, and intro to component-based thinking.",
    bullets: [
      "Responsive design & mobile-first approach",
      "Fetch, async/await, handling JSON APIs",
      "Modular JS, ES6 modules, and bundling basics",
      "Small project: To-Do app with local persistence",
    ],
  },
  {
    title: "Advanced",
    slug: "advanced",
    description: "React fundamentals, state management, code organization, testing, and deployment.",
    bullets: [
      "React hooks, component patterns, routing",
      "State management (Context/Redux) & side effects",
      "Performance basics, profiling & optimization",
      "Small project: Multi-page React app (portfolio or notes)",
    ],
  },
  {
    title: "Extras",
    slug: "extras",
    description: "Interview prep, deployment, and career-ready polish.",
    bullets: [
      "Project checklist & documentation",
      "Git, GitHub workflows & simple CI (Vercel/Netlify)",
      "Resume tips, interview questions & mock interviews",
    ],
  },
];

export default function Concepts() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4 text-slate-900">Concepts Roadmap</h1>
        <p className="text-slate-600 mb-8 max-w-3xl">
          A clear, staged learning path. Each card shows what you'll learn, a short outcome, and a suggested small project.
        </p>

        <div>
          {contents.map((c, i) => (
            <ConceptCard
              key={c.slug}
              id={c.slug}
              title={c.title}
              description={c.description}
              bullets={c.bullets}
              slug={c.slug}
              color={
                i === 0
                  ? "bg-gradient-to-br from-teal-400 via-blue-400 to-indigo-500"
                  : i === 1
                  ? "bg-gradient-to-br from-purple-400 via-pink-400 to-rose-500"
                  : i === 2
                  ? "bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400"
                  : "bg-gradient-to-br from-sky-400 via-cyan-400 to-emerald-400"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

