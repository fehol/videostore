import styles from '../styles/Home.module.css';
import Link from 'next/link';

function Home() {
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <button className={styles.MusicButton}>
          <Link href="./music/Retrowave.mp3">Music</Link>
        </button>
        <Link href="/checkout">
          <button className={styles.Flamingo}>
            <img
              src="https://svg-clipart.com/svg/pink/TJxhRqE-pink-flamingo-vector.svg"
              height="80px"
            />
          </button>
        </Link>
      </header>
      <main>
        <div className={styles.wrapper}>
          <Link href="/menu">
            <h1 className={styles.h1} data-text="Slashback">
              Slashback
            </h1>
          </Link>
          <h2 className={styles.h2} data-text="VideoStore">
            Video Store
          </h2>
        </div>
        <div className={styles.graphContainer}>
          <div className={styles.graph}></div>
        </div>
      </main>
      {/* <footer className={styles.footer}>Copyright 2020</footer> */}
    </div>
  );
}

export default Home;
