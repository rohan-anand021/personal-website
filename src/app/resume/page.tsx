"use client";

import { useState } from "react";

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
  <div className="bg-white p-8 sm:p-12 border border-gray-200 rounded-lg shadow-sm font-sans text-gray-800">
    {/* Header */}
    <header className="text-center mb-10">
      <h1 className="text-5xl font-bold tracking-tight">{resumeData.name}</h1>
      <div className="mt-4 text-sm text-gray-600 flex justify-center items-center flex-wrap gap-x-4 gap-y-2">
        <a
          href={`mailto:${resumeData.contact.email}`}
          className="hover:underline"
        >
          {resumeData.contact.email}
        </a>
        <span>|</span>
        <a
          href={resumeData.contact.website}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Portfolio
        </a>
        <span>|</span>
        <a
          href={resumeData.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>
        <span>|</span>
        <span>{resumeData.contact.phone}</span>
      </div>
    </header>

    {/* Sections */}
    <div className="space-y-10">
      {/* Experience */}
      <section>
        <h2 className="text-2xl font-bold border-b pb-2 mb-4">Experience</h2>
        <div className="space-y-6">
          {resumeData.experience.map((job, index) => (
            <div key={index}>
              <div className="flex justify-between items-baseline">
                <h3 className="text-lg font-bold">{job.title}</h3>
                <span className="text-sm font-light text-gray-500">
                  {job.date}
                </span>
              </div>
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-md italic">{job.company}</h4>
                <span className="text-sm font-light text-gray-500">
                  {job.location}
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
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
        <h2 className="text-2xl font-bold border-b pb-2 mb-4">Projects</h2>
        <div className="space-y-6">
          {resumeData.projects.map((project, index) => (
            <div key={index}>
              <div className="flex justify-between items-baseline">
                <h3 className="text-lg font-bold">{project.name}</h3>
                <span className="text-sm font-light text-gray-500">
                  {project.date}
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
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
        <h2 className="text-2xl font-bold border-b pb-2 mb-4">
          Technical Skills
        </h2>
        <div className="text-sm text-gray-700 space-y-2">
          {Object.entries(resumeData.skills).map(([category, skills]) => (
            <div key={category}>
              <span className="font-bold">{category}:</span> {skills}
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section>
        <h2 className="text-2xl font-bold border-b pb-2 mb-4">
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
                className="font-semibold text-blue-600 hover:underline"
              >
                {cert.name}
              </a>
              <span className="text-gray-500 font-light">{cert.date}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-bold border-b pb-2 mb-4">Education</h2>
        <div>
          <div className="flex justify-between items-baseline">
            <h3 className="text-lg font-bold">{resumeData.education.school}</h3>
            <span className="text-sm font-light text-gray-500">
              {resumeData.education.date}
            </span>
          </div>
          <div className="flex justify-between items-baseline mb-1">
            <h4 className="text-md italic">{resumeData.education.degree}</h4>
            <span className="text-sm font-light text-gray-500">
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
