import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <header className="header">
        <button className="MenuButton">MENU</button>
      </header>
      <main>
        <div className="wrapper">
          <h1 data-text="Slashback">Slashback</h1>
          <h2 data-text="VideoStore">Video Store</h2>
          <a className="Triangle"></a>
        </div>
        <div className="graph-container">
          <div class="graph"></div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
