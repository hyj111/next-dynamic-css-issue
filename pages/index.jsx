// import React,{Suspense} from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../components/TestComponent/TestComponent.module.scss';
const TestComponent = dynamic(() => import('../components/TestComponent/TestComponent'));
function HomePage() {
  return (
    <div >
      <h1 className={styles.style1}>Home Page</h1>
      <Link href="/other-page">
        <a>Other page</a>
      </Link>
      <TestComponent />
    </div>
  );
}

export default HomePage;
