import Layout from './components/Layout';

export const metadata = {
  title: 'Home - My Portfolio',
};

export default function Home() {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-vampire-blood mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg">I build things for the web and beyond.</p>
      </div>
    </Layout>
  );
}