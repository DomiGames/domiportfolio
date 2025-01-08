import Layout from '../components/Layout';

export const metadata = {
  title: 'Projects - My Portfolio',
};


const projects = [
  { name: 'Malicios Email Detector', description: 'Cool AI project to detect scam mails', link: 'https://malicious-email-detector.vercel.app/' },
  { name: 'Project 2', description: 'Another cool project', link: '#' },
];

export default function Projects() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-vampire-blood mb-4">Projects</h1>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="p-4 bg-vampire-gray rounded-lg">
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.link} className="text-vampire-blood hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </Layout>
  );
}