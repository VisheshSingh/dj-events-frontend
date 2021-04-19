import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <Link href='/about'>About page</Link>
    </div>
  );
}
