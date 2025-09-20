export default function ProjectsPage() {
  return (
    <section id="projects" className="my-12">
      {/* --- Personal Projects Section --- */}
      <div>
        <h2 className="text-3xl font-bold border-b pb-4 mb-8">
          Personal Projects
        </h2>
        <div className="grid gap-10">
          {/* --- NFL Voronoi Map Project --- */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-2xl font-semibold">NFL Voronoi Map</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              An interactive map of the United States that visualizes NFL team
              allegiances based on the nearest stadium. Built with Next.js,
              D3.js, and TopoJSON, this project uses a Voronoi diagram to
              partition the map into territories for each team.
            </p>

            {/* --- Interactive Embed --- */}
            <div className="mt-6 border rounded-lg overflow-hidden shadow-md bg-gray-50">
              <iframe
                src="https://nfl-voronoi-map.vercel.app"
                className="w-full h-96 sm:h-[500px]"
                title="Interactive NFL Voronoi Map"
                loading="lazy"
              ></iframe>
            </div>

            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://nfl-voronoi-map.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Live Site
              </a>
              <a
                href="https://github.com/rohan-anand021/nfl-map"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-800 text-white font-semibold px-5 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --- Professional Projects Section --- */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold border-b pb-4 mb-8">
          Professional Projects
        </h2>
        <div className="grid gap-10">
          {/* --- FairCase AI Project --- */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-2xl font-semibold">FairCase AI</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              An innovative AI tool for evaluating police misconduct
              allegations. This system uses Large Language Models, LangChain,
              and ChromaDB to analyze complaints against established police
              department rules, ensuring unbiased, data-driven recommendations
              for disciplinary actions.
            </p>

            {/* --- PDF Embed --- */}
            <div className="mt-6 border rounded-lg overflow-hidden shadow-md">
              <iframe
                src="/faircase-poster.pdf"
                className="w-full h-[500px] sm:h-[650px]"
                title="FairCase AI Poster"
                loading="lazy"
              ></iframe>
            </div>

            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://github.com/rohan-anand21/faircase-ai/tree/main/fa24/LLM_Assesment_Model"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-800 text-white font-semibold px-5 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Source Code
              </a>
            </div>
          </div>

          {/* --- 311 Service Tracker Project --- */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-2xl font-semibold">311 Service Tracker</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              An in-depth analysis of the City of Boston&apos;s 311 service
              requests from 2011-2023. This project created a historical
              database to identify systemic flaws, highlight areas for
              improvement, and analyze how service patterns differ across
              communities, especially those with high social vulnerability.
            </p>

            {/* --- PDF Embed --- */}
            <div className="mt-6 border rounded-lg overflow-hidden shadow-md">
              <iframe
                src="/311-poster.pdf"
                className="w-full h-[500px] sm:h-[650px]"
                title="311 Service Tracker Poster"
                loading="lazy"
              ></iframe>
            </div>

            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://github.com/rohan-anand21/311-service-tracker/tree/main/fa23-team-d"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-800 text-white font-semibold px-5 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
