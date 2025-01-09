import Layout from './components/Layout';
import AsciiBackground from './components/AsciiBackground';

export const metadata = {
  title: 'Home - My Portfolio',
};

export default function Home() {
  return (
    <Layout>
      <div className="text-center">

        <AsciiBackground imageUrl="/lain.png" outputWidth={100} />
        <h1 className="text-4xl font-bold text-vampire-blood mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg">I build things for the web and beyond.</p>
      </div>
    </Layout>
  );
}