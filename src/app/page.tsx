import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <header className="text-center my-16">
        <h1 className="text-5xl font-bold tracking-tight">Rohan Anand</h1>
        <div className="mt-4 text-xl text-gray-600">
          Data Engineer @{" "}
          <span className="relative group">
            <a
              href="http://dataeconomy.ai"
              target="_blank"
              rel="noopener noreferrer"
              // --- CHANGE IS HERE ---
              className="font-semibold text-blue-600 hover:underline"
            >
              Dataeconomy
            </a>
            <span
              className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full
                         w-64 max-w-xs p-3 bg-white border rounded-lg shadow-lg
                         invisible opacity-0 group-hover:visible group-hover:opacity-100
                         transition-opacity duration-300 pointer-events-none"
            >
              <span className="font-bold text-gray-900">Dataeconomy Inc.</span>
              <div className="text-sm text-gray-600 mt-1">
                A premier provider of enterprise data management and cloud
                solutions.
              </div>
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-white"></span>
            </span>
          </span>
        </div>
      </header>

      {/* --- About Me Section --- */}
      <section id="about" className="my-16">
        <h2 className="text-3xl font-bold border-b pb-2 mb-6">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <div className="text-gray-700 leading-relaxed text-left space-y-4">
            <p>
              Hello! I&apos;m a data engineer with a passion for analyzing data,
              and building the systems to do so.
            </p>
            <p></p>
            <p className="font-semibold pt-2">
              I&apos;m currently seeking new opportunities in data analysis,
              science or engineering. Feel free to explore my projects or get in
              touch!
            </p>
          </div>
        </div>
      </section>

      {/* --- Contact Me Section (Bento Grid Layout) --- */}
      <section id="contact" className="mt-24 mb-16">
        <h2 className="text-3xl font-bold border-b pb-2 mb-6">Contact Me</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="https://www.linkedin.com/in/rohan-h-anand"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-4 p-6 bg-white/50 border rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
            aria-label="LinkedIn Profile"
          >
            <Image
              src="/icons/linkedin.svg"
              alt=""
              width={48}
              height={48}
              aria-hidden="true"
            />
            <div>
              <h3 className="font-semibold text-lg">LinkedIn</h3>
            </div>
            <span className="absolute top-4 right-4 text-gray-300 group-hover:text-primary transition-colors">
              &rarr;
            </span>
          </a>
          <div className="group relative flex items-center gap-4 p-6 bg-white/50 border rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
            <Image
              src="/icons/gmail.svg"
              alt=""
              width={48}
              height={48}
              aria-hidden="true"
            />
            <div>
              <h3 className="font-semibold text-lg">Email: anandro@bu.edu</h3>
            </div>
            <span className="absolute top-4 right-4 text-gray-300 group-hover:text-primary transition-colors">
              &rarr;
            </span>
          </div>
          <a
            href="https://github.com/rohan-anand21?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-4 p-6 bg-white/50 border rounded-lg shadow-sm hover:shadow-xl transition-all duration-300"
            aria-label="Professional GitHub Profile"
          >
            <Image
              src="/icons/github-professional.svg"
              alt=""
              width={48}
              height={48}
              aria-hidden="true"
            />
            <div>
              <h3 className="font-semibold text-lg">GitHub - Professional</h3>
            </div>
            <span className="absolute top-4 right-4 text-gray-300 group-hover:text-primary transition-colors">
              &rarr;
            </span>
          </a>
          <a
            href="https://github.com/rohan-anand021?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-4 p-6 bg-white/50 border rounded-lg shadow-sm hover:shadow-xl transition-all duration-300"
            aria-label="Personal GitHub Profile"
          >
            <Image
              src="/icons/github-personal.svg"
              alt=""
              width={48}
              height={48}
              aria-hidden="true"
            />
            <div>
              <h3 className="font-semibold text-lg">GitHub - Personal</h3>
            </div>
            <span className="absolute top-4 right-4 text-gray-300 group-hover:text-primary transition-colors">
              &rarr;
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
