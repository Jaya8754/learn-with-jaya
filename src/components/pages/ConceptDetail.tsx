import { useParams, Link } from "react-router-dom";

const lessonsMap: Record<
  string,
  { title: string; description?: string; lessons: { id: string; title: string; short?: string }[] }
> = {
  basics: {
    title: "Basics",
    description: "Fundamentals to get you building static and responsive pages.",
    lessons: [
      { id: "html", title: "HTML Elements & Semantics", short: "Tags, forms, accessibility basics." },
      { id: "css", title: "Box Model, Flexbox & Grid", short: "Layout techniques and responsive tools." },
      { id: "js", title: "JS & DOM", short: "DOM selection, events, basic interactivity." },
    ],
  },
  intermediate: {
    title: "Intermediate",
    description: "Make your sites interactive and work with remote data.",
    lessons: [
      { id: "responsive", title: "Responsive Design", short: "Media queries, fluid typography." },
      { id: "es6", title: "Modern JavaScript (ES6+)", short: "Modules, promises, async/await." },
      { id: "api", title: "Working with APIs", short: "Fetch, error handling, JSON." },
    ],
  },
  advanced: {
    title: "Advanced",
    description: "Component-based apps, state and deployment.",
    lessons: [
      { id: "react", title: "React Hooks & Router", short: "useState, useEffect, routing basics." },
      { id: "state", title: "State Management", short: "Context, Redux overview." },
      { id: "perf", title: "Performance & Testing", short: "Profiling, unit tests, lighthouse." },
    ],
  },
  extras: {
    title: "Extras",
    description: "Career focused and polishing projects.",
    lessons: [
      { id: "interview", title: "Interview Prep", short: "Common questions, coding challenge practice." },
    ],
  },
};

export default function ConceptDetail() {
  const { slug } = useParams<{ slug: string }>();
  const group = slug ? lessonsMap[slug] : null;

  if (!group)
    return (
      <div className="p-8 max-w-3xl mx-auto">
        <p className="mb-4">Unknown concept.</p>
        <Link to="/concepts" className="text-indigo-600 underline">
          Back
        </Link>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-8">
      <header className="mb-6">
        <h2 className="text-2xl font-bold mb-2 text-slate-900">{group.title}</h2>
        {group.description && <p className="text-sm text-slate-600">{group.description}</p>}
      </header>

      <ul className="space-y-4">
        {group.lessons.map((l) => (
          <li key={l.id} className="p-4 border rounded-md hover:shadow-md transition-shadow bg-white">
            <Link to={`/concepts/${slug}/${l.id}`} className="font-medium text-slate-900">
              {l.title}
            </Link>
            {l.short && <p className="text-sm text-slate-600 mt-1">{l.short}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
