export default function ResumePage() {
  return (
    <section id="resume" className="my-12">
      {/* HEADER SECTION */}
      <div className="flex justify-between items-center border-b pb-4 mb-8">
        <h1 className="text-4xl font-bold">Resume</h1>
        <a
          href="/resume.pdf" // This links to the PDF in your public folder
          download="Rohan_Anand_Resume.pdf" // This is the filename the user will see
          className="inline-block bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Download
        </a>
      </div>

      {/* EMBEDDED RESUME SECTION */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <iframe
          src="/resume.pdf"
          className="w-full h-[1000px]" // Adjust height as needed for your resume length
          title="Rohan Anand's Resume"
        ></iframe>
      </div>
    </section>
  );
}
