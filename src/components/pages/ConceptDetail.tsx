import { useParams, Link } from "react-router-dom";

const lessonsMap: Record<string, { title: string; lessons: { id: string; title: string }[] }> = {
  basics: {
    title: "Basics",
    lessons: [
      { id: "html", title: "HTML Elements & Semantics" },
      { id: "css", title: "Box model, Flexbox" },
      { id: "js", title: "JS & DOM" },
    ],
  },
  intermediate: {
    title: "Intermediate",
    lessons: [{ id: "responsive", title: "Responsive Design" }, { id: "es6", title: "ES6+" }],
  },
  advanced: {
    title: "Advanced",
    lessons: [{ id: "react", title: "React Hooks & Router" }, { id: "perf", title: "Performance" }],
  },
  extras: {
    title: "Extras",
    lessons: [{ id: "interview", title: "Interview Prep" }],
  },
};

export default function ConceptDetail() {
  const { slug } = useParams<{ slug: string }>();
  const group = slug ? lessonsMap[slug] : null;

  if (!group) return <div className="p-8">Unknown concept. <Link to="/concepts" className="text-blue-600">Back</Link></div>;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">{group.title}</h2>
      <ul className="space-y-3">
        {group.lessons.map((l) => (
          <li key={l.id} className="p-4 border rounded-md">
            <Link to={`/concepts/${slug}/${l.id}`} className="font-medium">
              {l.title}
            </Link>
            <p className="text-sm text-gray-600">Short description for {l.title}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
