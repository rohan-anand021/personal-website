export default function ResumePage() {
  return (
    <section id="resume" className="my-12">
      <h1 className="text-4xl font-bold border-b pb-4 mb-8">Resume</h1>
      <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
        <p className="text-gray-700">
          This is where your resume content will go. You could embed a PDF, list
          your experience, or link to a downloadable version.
        </p>
        <a
          href="#"
          className="inline-block bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors mt-6"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
