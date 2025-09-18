export default function HomePage() {
  return (
    <div>
      <header className="text-center my-16">
        <h1 className="text-5xl font-bold tracking-tight">Rohan Anand</h1>
        {/* FIX: Changed the <p> tag to a <div> */}
        <div className="mt-4 text-xl text-gray-600">
          Data Engineer @{" "}
          <span className="relative group">
            <a
              href="http://dataeconomy.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Dataeconomy
            </a>

            {/* Tooltip */}
            <span
              className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full
                         w-64 max-w-xs p-3 bg-white border rounded-lg shadow-lg
                         invisible opacity-0 group-hover:visible group-hover:opacity-100
                         transition-opacity duration-300 pointer-events-none"
            >
              <span className="font-bold text-gray-900">Dataeconomy Inc.</span>
              {/* FIX: Changed the nested <p> tag to a <div> */}
              <div className="text-sm text-gray-600 mt-1">
                A premier provider of enterprise data management and cloud
                solutions.
              </div>
              {/* Triangle */}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-white"></span>
            </span>
          </span>
        </div>
      </header>

      <section id="about" className="my-16">
        <h2 className="text-3xl font-bold border-b pb-2 mb-6">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          Hello! I&apos;m a data engineer based in Charlotte, NC. I am
          passionate about analyzing data, and building systems used to analyze
          data.
        </p>
      </section>
    </div>
  );
}
