import Link from 'next/link';
import dynamic from 'next/dynamic';
import Router from "next/router";
const All = dynamic(() => import('../components/TestComponent/all'));
function HomePage() {
  return (
    <div>
      <h1>Other Page</h1>
      <Link href="/">
        <a>Home page</a>
      </Link>
      <All />
    </div>
  );
}

export default HomePage;
