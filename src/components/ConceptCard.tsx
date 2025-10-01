import { Link } from "react-router-dom";
// import React from "react";

type Props = {
  id?: string;             // optional anchor id
  title: string;
  description: string;
  bullets?: string[];
  slug: string;            // route slug (e.g., "basics")
  color?: string;          // optional accent color e.g. "bg-[#434BE7]"
};

export default function ConceptCard({ id, title, description, bullets = [], slug, color = "bg-[#434BE7]" }: Props) {
  return (
    <article id={id} className="max-w-4xl mx-auto my-8 px-6 py-6 rounded-2xl shadow-md transition-transform transform hover:-translate-y-1">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className={`flex-none w-full md:w-56 h-28 md:h-36 rounded-lg flex items-center justify-center ${color} text-white font-semibold text-lg`}>
          {/* simple visual / icon area */}
          <span>{title}</span>
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-3">{description}</p>

          {bullets.length > 0 && (
            <ul className="mb-4 grid gap-1 text-sm text-gray-700 md:grid-cols-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-0.5 text-[12px]">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex items-center gap-4">
            {/* Link navigates to detail page; use `replace` if you don't want history entry */}
            <Link to={`/concepts/${slug}`} className="inline-block">
              <button
                className="px-4 py-2 rounded-md text-white font-medium transition-colors duration-200"
                // style dynamic: if color custom, invert for text/bg — simple approach:
                style={{ backgroundColor: "#434BE7" }}
              >
                Learn
              </button>
            </Link>

            <a href={`#${id ?? slug}`} className="text-sm text-gray-500 hover:underline">
              Quick jump
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
