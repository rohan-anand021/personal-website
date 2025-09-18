export default function HomePage() {
  return (
    <div>
      <header className="text-center my-16">
        <h1 className="text-5xl font-bold tracking-tight">Your Name</h1>
        <p className="mt-4 text-xl text-gray-600">
          Software Developer | Designer | Lifelong Learner
        </p>
      </header>

      <section id="about" className="my-16">
        <h2 className="text-3xl font-bold border-b pb-2 mb-6">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          Hello! I&apos;m a passionate developer based in [Your City]. I
          specialize in creating modern, responsive, and user-friendly web
          applications. When I&apos;m not coding, I enjoy [Your Hobby 1] and
          [Your Hobby 2].
        </p>
      </section>
    </div>
  );
}
