import Layout from './components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-vampire-blood mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg">I build things for the web and beyond.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta quas perspiciatis rem ipsa culpa dolorum quisquam, necessitatibus facilis delectus nulla esse minima placeat error, molestias reiciendis non ipsum fuga excepturi?</p>
      </div>
    </Layout>
  );
}