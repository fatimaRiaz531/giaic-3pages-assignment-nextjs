import Link from 'next/link';
import styles from './about.module.css';

export default function About() {
  return (
    <div className="">
      <Link href="/about" className={styles.aboutLink}>
        About
      </Link>
      <p className={styles.aboutParagraph}>
        This is about page
      </p>
    </div>
  );
}