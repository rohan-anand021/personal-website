export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto p-4 sm:p-8">
      <header className="text-center my-12">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
          Your Name
        </h1>
        <p className="mt-3 text-lg sm:text-xl text-gray-600">
          Software Developer | Designer | Lifelong Learner
        </p>
      </header>

      <section id="about" className="my-16">
        <h2 className="text-2xl sm:text-3xl font-bold border-b pb-2 mb-6">
          About Me
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Hello! I'm a passionate developer based in [Your City]. I specialize
          in creating modern, responsive, and user-friendly web applications.
          When I'm not coding, I enjoy [Your Hobby 1] and [Your Hobby 2].
        </p>
      </section>

      <section id="projects" className="my-16">
        <h2 className="text-2xl sm:text-3xl font-bold border-b pb-2 mb-6">
          Projects
        </h2>
        <div className="mt-6 grid gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Project One</h3>
            <p className="mt-2 text-gray-700">
              A brief description of your first cool project. Explain the tech
              you used and what it does.
            </p>
            <a
              href="#"
              className="inline-block bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors mt-4"
            >
              View on GitHub
            </a>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Project Two</h3>
            <p className="mt-2 text-gray-700">
              A brief description of your second cool project. Explain the tech
              you used and what it does.
            </p>
            <a
              href="#"
              className="inline-block bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors mt-4"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="my-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold border-b pb-2 mb-6 max-w-md mx-auto">
          Get In Touch
        </h2>
        <p className="mt-4 text-gray-700">
          I'm always open to new opportunities and collaborations. Feel free to
          reach out!
        </p>
        <a
          href="mailto:youremail@example.com"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors mt-6"
        >
          Email Me
        </a>
      </section>

      <footer className="text-center mt-16 text-gray-500">
        <p>&copy; 2025 Your Name. All rights reserved.</p>
      </footer>
    </main>
  );
}
