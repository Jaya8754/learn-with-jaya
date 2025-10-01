import ConceptCard from "@/components/ConceptCard";

const contents = [
  {
    title: "Basics",
    slug: "basics",
    description: "HTML, CSS, JS fundamentals — build static pages and simple interactivity.",
    bullets: ["Semantic HTML", "CSS Box model, Flex, Grid", "JS DOM basics"]
  },
  {
    title: "Intermediate",
    slug: "intermediate",
    description: "Responsive UI, ES6+, API usage, intro to React.",
    bullets: ["Responsive layouts", "Fetch & async", "Component thinking"]
  },
  {
    title: "Advanced",
    slug: "advanced",
    description: "React, state management, performance, testing & deployment.",
    bullets: ["Hooks, routing", "Redux / Context", "Testing & optimization"]
  },
  {
    title: "Extras",
    slug: "extras",
    description: "Interview prep, career tips and mini-projects.",
    bullets: ["Project checklist", "Resume tips", "Interview questions"]
  },
];

export default function Concepts() {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Concepts Roadmap</h1>

        {/* Cards */}
        <div>
          {contents.map((c, i) => (
            <ConceptCard
              key={c.slug}
              id={c.slug}
              title={c.title}
              description={c.description}
              bullets={c.bullets}
              slug={c.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
