import Link from "next/link";

const posts = [
  {
    slug: "/blog/algorithmic-bias",
    title: "The Implications of Bias on Hiring at Amazon",
    date: "March 22, 2024",
    summary:
      "A case study on Amazon's scrapped AI recruiting tool, examining how inherent biases in training data can lead to discriminatory outcomes and exploring the ethical implications through a deontological lens.",
  },
  {
    slug: "/blog/facial-recognition-policy",
    title:
      "A Case for a More Comprehensive Policy Surrounding Facial Recognition",
    date: "April 24, 2024",
    summary:
      "An analysis of the ethical concerns and societal impact of facial recognition technology, arguing for a comprehensive policy that promotes accuracy, fairness, accountability, and transparency.",
  },
  {
    slug: "/blog/ethics-in-ml",
    title:
      "A Deontological-Based Code of Ethics for a Machine Learning Engineer",
    date: "February 14, 2023",
    summary:
      "An exploration of a personal code of ethics for machine learning engineers, addressing dilemmas like data consent, fairness, model transparency, and environmental impact.",
  },
];

export default function BlogPage() {
  return (
    <section id="blog" className="my-12">
      <div className="border-b pb-4 mb-10">
        <h1 className="text-4xl font-bold">Selected Writings</h1>
        <p className="mt-2 text-lg text-gray-600">
          A collection of writings from my undergraduate studies at Boston
          University, exploring the ethical dimensions of data science and
          artificial intelligence.
        </p>
      </div>

      <div className="space-y-10">
        {posts.map((post) => (
          <article key={post.slug}>
            <h2 className="text-2xl font-bold">
              <Link
                href={post.slug}
                className="hover:text-blue-600 transition-colors"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-500 mt-1">{post.date}</p>
            <p className="mt-3 text-gray-700 leading-relaxed">{post.summary}</p>
            <Link
              href={post.slug}
              className="text-blue-600 font-semibold hover:underline mt-4 inline-block"
            >
              Read more &rarr;
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
