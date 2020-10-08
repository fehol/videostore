import styles from '../styles/checkout.module.css';
import Link from 'next/link';

function Checkout() {
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <Link href="/">
          <h1>Slashback - Checkout</h1>
        </Link>
      </header>
      <main className={styles.main}>
        <input className={styles.input} type="text" placeholder="Name" />
        <input className={styles.input} type="text" placeholder="eMail" />
      </main>
    </div>
  );
}

export default Checkout;
