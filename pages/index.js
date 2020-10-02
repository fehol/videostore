import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <header className="header">
        <select className="MenuButton">
          <option value="Videos">Videos</option>
          <option value="Shopping Cart">Shopping Cart</option>
          <option value="Checkout">Checkout</option>
        </select>
        <button className="MenuButton">MENU</button>
      </header>
      <main>
        <div className="wrapper">
          <h1 data-text="Slashback">Slashback</h1>
          <h2 data-text="VideoStore">Video Store</h2>
        </div>
        <div className="graph-container">
          <div class="graph"></div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
