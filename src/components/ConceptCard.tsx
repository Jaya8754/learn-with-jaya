import { Link } from "react-router-dom";
import { Check } from "lucide-react";

type Props = {
  id?: string;
  title: string;
  description: string;
  bullets?: string[];
  slug: string;
  color?: string;
};

export default function ConceptCard({
  id,
  title,
  description,
  bullets = [],
  slug,
  color = "bg-gradient-to-br from-indigo-600 via-indigo-500 to-indigo-700",
}: Props) {
  return (
    <article
      id={id}
      className="max-w-4xl mx-auto my-6 px-4 py-5 rounded-2xl shadow-md bg-white dark:bg-slate-900 transition-transform transform hover:-translate-y-2"
    >
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {/* Accent / icon area */}
        <div
          className={`flex-none w-full md:w-56 h-28 md:h-36 rounded-lg flex items-center justify-center text-white font-semibold text-lg ${color}`}
        >
          <span className="px-3 text-center">{title}</span>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{title}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">{description}</p>

          {bullets.length > 0 && (
            <ul className="mb-4 grid gap-2 text-sm text-slate-700 dark:text-slate-300 md:grid-cols-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-0.5">
                    <Check className="w-4 h-4 text-teal-500" aria-hidden />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex items-center gap-4">
            <Link to={`/concepts/${slug}`} className="inline-block">
              <button
                className="px-4 py-2 rounded-md text-white font-medium transition-colors duration-200"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(67,75,231,1) 0%, rgba(59,130,246,1) 100%)",
                }}
              >
                Learn
              </button>
            </Link>

            <a href={`#${id ?? slug}`} className="text-sm text-slate-500 hover:underline">
              Quick jump
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

