const skills = {
  Languages: [
    {
      name: "Python",
      description:
        "My primary language for data engineering, used for everything from building ETL pipelines with PySpark to developing APIs with FastAPI and creating machine learning models with Scikit-learn.",
    },
    {
      name: "SQL",
      description:
        "Extensive experience writing complex queries and constructing data models in platforms like Snowflake and PostgreSQL to analyze data and identify key business insights.",
    },
    {
      name: "R",
      description:
        "Utilized for statistical analysis and data visualization during academic projects and coursework.",
    },
  ],
  "Cloud & Platforms": [
    {
      name: "AWS",
      description:
        "Proficient in deploying and managing cloud infrastructure. I have hands-on experience containerizing models with Docker and deploying them on ECS, and using S3 for scalable data storage with Iceberg tables.",
    },
    {
      name: "Snowflake",
      description:
        "Deep experience in building and optimizing data solutions, including engineering low-latency ingestion pipelines with Snowpipe, implementing data quality services with Snowpark, and managing historical data with managed Iceberg tables.",
    },
    {
      name: "Docker",
      description:
        "Used to containerize machine learning models and applications, ensuring consistent and reproducible deployments across different environments.",
    },
    {
      name: "Kafka",
      description:
        "Engineered and implemented a real-time, low-latency data pipeline to ingest streaming data from Kafka topics directly into Snowflake using Snowpipe.",
    },
    {
      name: "Airflow",
      description:
        "Architected a no-code orchestration service that integrated Airflow with third-party services like Talend and Informatica, enabling complex workflow automation.",
    },
    {
      name: "Jenkins",
      description:
        "Designed and orchestrated a full CI/CD pipeline to automate the machine learning lifecycle, including model retraining, validation, and deployment.",
    },
    {
      name: "Azure",
      description:
        "Familiar with core Azure services and concepts from coursework and personal exploration.",
    },
  ],
  "Libraries & APIs": [
    {
      name: "PySpark",
      description:
        "Successfully re-engineered an internal data validation package, significantly reducing runtime on large datasets by leveraging Spark's distributed processing capabilities.",
    },
    {
      name: "LangChain & LLMs",
      description:
        "Developed a RAG-LLM system using LangChain and OpenAI's API. Implemented advanced techniques like prompt engineering and chain-of-thought reasoning to improve model accuracy and explainability.",
    },
    {
      name: "FastAPI",
      description:
        "Built and deployed high-performance, production-ready API endpoints to serve machine learning model predictions and create full-stack applications.",
    },
    {
      name: "Great Expectations",
      description:
        "Used to build a robust data validation and quality assurance framework within a PySpark ETL pipeline, adding new quality checks and categorizing constraints.",
    },
    {
      name: "Vector Databases (ChromaDB)",
      description:
        "Utilized ChromaDB to generate and store embeddings for a RAG-LLM, enabling efficient similarity search over large document sets.",
    },
    {
      name: "Pandas & Scikit-learn",
      description:
        "Core libraries in my toolkit for data manipulation, analysis, and building classical machine learning models like recommendation systems.",
    },
  ],
  Tools: [
    {
      name: "Tableau & PowerBI",
      description:
        "Designed and developed dozens of interactive dashboards to visualize key trends, identify customer segments, and present findings from complex datasets to both technical and non-technical audiences.",
    },
    {
      name: "Git",
      description:
        "Proficient in version control using Git, including branching, merging, and collaborating on codebases in team environments.",
    },
    {
      name: "dbt",
      description:
        "Experienced in using dbt for transforming data in the warehouse, building modular, reusable data models, and ensuring data quality through automated testing.",
    },
  ],
};

const SkillCard = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
    <p className="mt-2 text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default function SkillsPage() {
  return (
    <section id="skills" className="my-12">
      <div className="border-b pb-4 mb-10">
        <h1 className="text-4xl font-bold">Tech Stack</h1>
        <p className="mt-2 text-lg text-gray-600"></p>
      </div>

      <div className="space-y-12">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category}>
            <h2 className="text-3xl font-bold mb-6">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillList.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  description={skill.description}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
