"use client";

import { useState } from "react";
import {
  BriefcaseIcon,
  AcademicCapIcon,
  SparklesIcon,
  CodeBracketSquareIcon,
  EnvelopeIcon,
  PhoneIcon,
  LinkIcon,
  MapPinIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

// Data parsed from your LaTeX resume
const resumeData = {
  name: "Rohan Anand",
  contact: {
    email: "anandro@bu.edu",
    website: "https://rh-anand.vercel.app/",
    linkedin: "https://www.linkedin.com/in/rohan-h-anand/",
    phone: "(603) 233-4670",
  },
  experience: [
    {
      title: "Data Engineer",
      company: "Dataeconomy",
      companyLink: "https://dataeconomy.ai",
      location: "Charlotte, NC",
      date: "Mar 2025 – Present",
      description: [
        "Developed a recommendation system for a data marketplace using Alternating Least Squares with Implicit Feedback to predict user preference for datasets",
        "Increased precision for top-k items by 50% compared to popularity baseline through hyperparameter tuning using Optuna",
        "Operationalized model by containerizing it with Docker and deploying it on AWS ECS",
        "Created an endpoint using FastAPI to serve predictions to users",
        "Orchestrated a CI/CD pipeline using Jenkins to automate the model retraining, validation, and deployment process",
        "Implemented data quality profiling and validation service using Snowpark in a Snowflake ETL pipeline, allowing calculation of row and column level metrics, ensuring data integrity",
        "Added functionality to segregate data into valid/invalid sets and automatically generate detailed data quality reports",
        "Incorporated feature to load Snowflake-managed Iceberg tables from S3 and apply SCD types 0-4 for historical data management",
        "Rewrote internal data validation package using Great Expectations in a PySpark ETL pipeline, adding new quality checks and categorization of constraints, reducing runtime by 70% on large datasets",
        "Engineered a low-latency pipeline using Snowpipe to ingest real-time data from Kafka into Snowflake",
        "Architected a FastAPI application for a no-code Airflow orchestration service with connections to third-party services such as Talend, Informatica, Confluence, Teams, etc., using GraphQL for front-end ingestion and its REST API for backend execution",
      ],
    },
    {
      title: "AI Engineer",
      company: "BU Spark!",
      companyLink: "https://www.bu.edu/spark/",
      location: "Boston, MA",
      date: "Sep 2024 – Jan 2025",
      description: [
        "Developed a RAG-LLM using OpenAI's API for the National Lawyers Guild to identify discrepancies in punitive outcomes for police officers by severity, complete with reasoning based on allegation and description of events, reducing investigation time by 80%",
        "Extracted officer information from historical spreadsheets from 2011 - 2024, generated embeddings and inserted into vector database using ChromaDB",
        "Utilized advanced techniques such as prompt engineering, chain-of-thought reasoning, feature augmentation with past offenses in LangChain to increase explainability and accuracy by 40%",
        "Visualized differences between AI-recommend and actual outcomes, focusing on variations across officer ranks and time spent in department",
        "Implemented full-stack functionality using FastAPI and JavaScript to serve LLM outputs, complete with CSV upload for future records",
        "Selected as top project and presented to client and data science faculty",
      ],
    },
    {
      title: "Data Services Intern",
      company: "Axis Technology, LLC",
      companyLink: "https://www.axistechnologyllc.com",
      location: "Boston, MA",
      date: "May 2024 – Aug 2024",
      description: [
        "Developed a Python script to populate CRM database with a variety of realistic fake personal information for a ML model that detects private information, ensuring robust training data, increasing validation accuracy by 60%",
        "Implemented flexible data generation features to scale number of training samples from 1k to 100k+, while maintaining similar runtime",
        "Created a script to label to parse JSON of database schema and label column information type to augment features for model",
        "Formulated test code to validate OpenSearch produced relevant results in a program that identified similar tables in a database",
      ],
    },
    {
      title: "Data Analyst Intern",
      company: "AS Insurance Agency",
      companyLink: "https://www.asureagency.com",
      location: "Manchester, NH",
      date: "Jun 2022 – Aug 2022",
      description: [
        "Concatenated personal information from 1,000+ customers and corresponding insurance statements from 1,500+ declaration pages using Pandas",
        "Constructed SQL queries on Snowflake to identify key customer segments and developed 10-15 Tableau dashboards to target customers for renewal",
        "Streamlined renewal process, leading to 95% retention in clients",
      ],
    },
  ],
  projects: [
    {
      name: "Analyzing Boston's 311 Service Requests",
      date: "Sep 2023 – Dec 2023",
      description: [
        "Developed and maintained a database of 2.7M+ Boston 311 service requests over 12 years, automating daily updates via API integration, to analyze community service equity",
        "Created interactive graphs using ipywidgets to identify trends in request volume, submission sources, and resolution times across neighborhoods",
        "Constructed a PowerBI map visualization encoded with social vulnerability index data to highlight leading requests by geographic area",
        "Produced and presented a PowerBI report analyzing disparities in request types and resolution times across income levels, presented findings to client and data science faculty",
      ],
    },
  ],
  skills: {
    Languages: "Python, SQL, R",
    "Cloud/Platforms":
      "Snowflake, AWS, Azure, Docker, Kafka, Airflow, Pinecone, PostgreSQL, Jenkins, Talend, Informatica, Confluence, Jira, Postman",
    "Libraries/APIs":
      "Pandas/NumPy, Scikit-learn, FastAPI, Optuna, OpenAI, Snowpark, Pytorch, PySpark, LangChain, ChromaDB, Great Expectations, Opensearch",
    Tools: "Git, Tableau, PowerBI, dbt",
  },
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      date: "Issued May 2025",
      // FIX: Changed this link to point to the PDF in the public folder
      link: "/AWS.pdf",
    },
  ],
  education: {
    school: "Boston University",
    location: "Boston, MA",
    degree: "B.S. in Data Science",
    details:
      "Dean's List: 2022 - 2025 | DS Undergraduate Tutor (Mar 2023 - Dec 2024)",
    date: "09/2021 – 01/2025",
  },
};

// --- HTML Resume Component ---
const HtmlResume = () => (
  <div className="bg-white p-6 sm:p-10 border border-gray-200 rounded-lg shadow-lg font-sans text-gray-800 max-w-4xl mx-auto">
    {/* Header */}
    <header className="text-center mb-10">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
        {resumeData.name}
      </h1>
      <div className="mt-4 text-sm text-gray-500 flex justify-center items-center flex-wrap gap-x-5 gap-y-2">
        <a
          href={`mailto:${resumeData.contact.email}`}
          className="flex items-center gap-1.5 hover:text-sky-600 transition-colors"
        >
          <EnvelopeIcon className="h-4 w-4" /> {resumeData.contact.email}
        </a>
        <span className="text-gray-300 hidden sm:inline">|</span>
        <a
          href={resumeData.contact.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-sky-600 transition-colors"
        >
          <LinkIcon className="h-4 w-4" /> Portfolio
        </a>
        <span className="text-gray-300 hidden sm:inline">|</span>
        <a
          href={resumeData.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-sky-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            {" "}
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-4.499 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />{" "}
          </svg>
          LinkedIn
        </a>
        <span className="text-gray-300 hidden sm:inline">|</span>
        <span className="flex items-center gap-1.5">
          <PhoneIcon className="h-4 w-4" /> {resumeData.contact.phone}
        </span>
      </div>
    </header>

    {/* Main Content */}
    <div className="space-y-12">
      {/* Experience */}
      <section>
        <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-800 border-b-2 border-gray-100 pb-3 mb-6">
          <BriefcaseIcon className="h-7 w-7 text-sky-600" />
          Experience
        </h2>
        <div className="space-y-8">
          {resumeData.experience.map((job, index) => (
            <div key={index}>
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {job.title}
                  </h3>
                  <a
                    href={job.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md font-semibold text-sky-700 hover:underline"
                  >
                    {job.company}
                  </a>
                </div>
                <div className="text-right text-xs font-medium text-gray-500 whitespace-nowrap">
                  <p>{job.date}</p>
                  <p className="flex items-center justify-end gap-1 mt-1">
                    <MapPinIcon className="h-3 w-3" /> {job.location}
                  </p>
                </div>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-1.5 text-sm text-gray-700 leading-relaxed">
                {job.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-800 border-b-2 border-gray-100 pb-3 mb-6">
          <SparklesIcon className="h-7 w-7 text-sky-600" />
          Projects
        </h2>
        <div className="space-y-6">
          {resumeData.projects.map((project, index) => (
            <div key={index}>
              <div className="flex justify-between items-baseline">
                <h3 className="text-lg font-bold text-gray-900">
                  {project.name}
                </h3>
                <span className="text-xs font-medium text-gray-500">
                  {project.date}
                </span>
              </div>
              <ul className="list-disc list-outside ml-5 mt-2 space-y-1.5 text-sm text-gray-700 leading-relaxed">
                {project.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills */}
      <section>
        <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-800 border-b-2 border-gray-100 pb-3 mb-6">
          <CodeBracketSquareIcon className="h-7 w-7 text-sky-600" />
          Technical Skills
        </h2>
        <div className="space-y-4">
          {Object.entries(resumeData.skills).map(([category, skills]) => (
            <div
              key={category}
              className="flex flex-col sm:flex-row sm:items-start gap-2"
            >
              <h4 className="font-bold w-full sm:w-40 text-gray-700 whitespace-nowrap">
                {category}:
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.split(", ").map((skill) => (
                  <span
                    key={skill}
                    className="bg-sky-100 text-sky-800 text-xs font-medium px-2.5 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Grid for Certifications & Education */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Certifications */}
        <section>
          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-800 border-b-2 border-gray-100 pb-3 mb-6">
            <StarIcon className="h-7 w-7 text-sky-600" />
            Certifications
          </h2>
          <div>
            {resumeData.certifications.map((cert, index) => (
              <div
                key={index}
                className="flex justify-between items-baseline text-sm"
              >
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sky-600 hover:underline"
                >
                  {cert.name}
                </a>
                <span className="text-gray-500 font-light text-xs">
                  {cert.date}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-800 border-b-2 border-gray-100 pb-3 mb-6">
            <AcademicCapIcon className="h-7 w-7 text-sky-600" />
            Education
          </h2>
          <div>
            <div className="flex justify-between items-baseline">
              <h3 className="text-lg font-bold">
                {resumeData.education.school}
              </h3>
              <span className="text-xs font-medium text-gray-500">
                {resumeData.education.date}
              </span>
            </div>
            <div className="flex justify-between items-baseline mb-1">
              <h4 className="text-md font-semibold text-sky-700">
                {resumeData.education.degree}
              </h4>
              <span className="text-xs font-light text-gray-500 flex items-center gap-1">
                <MapPinIcon className="h-3 w-3" />{" "}
                {resumeData.education.location}
              </span>
            </div>
            <p className="text-sm text-gray-600">
              {resumeData.education.details}
            </p>
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default function ResumePage() {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <section id="resume" className="my-12">
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b pb-4 mb-8 gap-4">
        <h1 className="text-4xl font-bold">Resume</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowPdf(!showPdf)}
            className="inline-block bg-gray-200 text-gray-800 font-semibold px-5 py-2 rounded-lg hover:bg-gray-300 transition-colors"
          >
            {showPdf ? "View HTML" : "View PDF"}
          </button>
          <a
            href="/resume.pdf"
            download="Rohan_Anand_Resume.pdf"
            className="inline-block bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Download
          </a>
        </div>
      </div>

      {/* EMBEDDED RESUME OR HTML RESUME SECTION */}
      <div>
        {showPdf ? (
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <iframe
              src="/resume.pdf"
              className="w-full h-[1000px]"
              title="Rohan Anand's Resume"
            ></iframe>
          </div>
        ) : (
          <HtmlResume />
        )}
      </div>
    </section>
  );
}
