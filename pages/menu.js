import styles from '../styles/Menu.module.css';
import Link from 'next/link';
import Router from 'next/router';

function Menu() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h1 className={styles.h1}>Slashback</h1>
        </Link>
      </header>
      <main className={styles.main}>
        <section className={styles.movies}>
          <MovieDieHard />
          <MovieTerminator />
          <MovieRambo />
          <MovieTrouble />
          <MovieMadMax2 />
          <MovieRoboCop />
          <MoviePredator />
          <MovieTopGun />
          <MovieEscape />
          <MovieWeapon />
          <MovieCobra />
          <MovieRoadHouse />
        </section>
      </main>
    </>
  );
}
const MovieDieHard = () => {
  return (
    <>
      <h1>Die Hard</h1>
      <img
        src="https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX140_CR0,0,140,209_AL_.jpg"
        alt=""
      />
    </>
  );
};
const MovieTerminator = () => {
  return (
    <>
      <h1>Terminator</h1>
      <img
        src="https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX140_CR0,0,140,209_AL_.jpg"
        alt=""
      />
    </>
  );
};
const MovieRambo = () => {
  return (
    <>
      <h1>Terminator</h1>
      <img
        src="https://m.media-amazon.com/images/M/MV5BODBmOWU2YWMtZGUzZi00YzRhLWJjNDAtYTUwNWVkNDcyZmU5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX140_CR0,0,140,209_AL_.jpg"
        alt=""
      />
    </>
  );
};
const MovieTrouble = () => {
  return (
    <>
      <h1>Big Trouble in little China</h1>
      <img
        src="https://m.media-amazon.com/images/M/MV5BNzlhYjEzOGItN2MwNS00ODRiLWE5OTItYThiNmJlMTdmMzgxXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX140_CR0,0,140,209_AL_.jpg"
        alt=""
      />
    </>
  );
};

const MovieMadMax2 = () => {
  return (
    <>
      <h1>Mad Max 2: Road Warrior</h1>
      <img
        src="https://m.media-amazon.com/images/M/MV5BN2VlNjNhZWQtMTY2OC00Y2E1LWJkNGUtMDU4M2ViNzliMGYwXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX140_CR0,0,140,209_AL_.jpg"
        alt=""
      />
    </>
  );
};

const MovieRoboCop = () => {
  return (
    <>
      <h1>Die Hard</h1>
      <img
        src="https://m.media-amazon.com/images/M/MV5BZWVlYzU2ZjQtZmNkMi00OTc3LTkwZmYtZDVjNmY4OWFmZGJlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX140_CR0,0,140,209_AL_.jpg"
        alt=""
      />
    </>
  );
};

const MoviePredator = () => {
  return (
    <>
      <h1>Predator</h1>
      <img
        src="https://m.media-amazon.com/images/M/MV5BY2QwYmFmZTEtNzY2Mi00ZWMyLWEwY2YtMGIyNGZjMWExOWEyXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UY209_CR0,0,140,209_AL_.jpg"
        alt=""
      />
    </>
  );
};

const MovieTopGun = () => {
  return (
    <>
      <h1>Top Gun</h1>
      <img
        src="https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX182_CR0,0,182,268_AL_.jpg"
        alt=""
        width="140"
        height="209"
      />
    </>
  );
};
const MovieEscape = () => {
  return (
    <>
      <h1>Escape from New York</h1>
      <img
        src="https://m.media-amazon.com/images/M/MV5BMTUzMTY0Nzg0MV5BMl5BanBnXkFtZTgwMDU3MzQxMDE@._V1_UX182_CR0,0,182,268_AL_.jpg"
        alt=""
        width="140"
        height="209"
      />
    </>
  );
};
const MovieWeapon = () => {
  return (
    <>
      <h1>Lethal Weapon</h1>
      <img
        src="https://m.media-amazon.com/images/M/MV5BZTllNWNlZjctMWQwMS00ZDc3LTg5ZjMtNzhmNzhjMmVhYTFlXkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_UY209_CR1,0,140,209_AL_.jpg"
        alt=""
      />
    </>
  );
};
const MovieCobra = () => {
  return (
    <>
      <h1>Cobra</h1>
      <img
        src="https://m.media-amazon.com/images/M/MV5BY2QwYmFmZTEtNzY2Mi00ZWMyLWEwY2YtMGIyNGZjMWExOWEyXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UY209_CR0,0,140,209_AL_.jpg"
        alt=""
      />
    </>
  );
};
const MovieRoadHouse = () => {
  return (
    <>
      <h1>Road House</h1>
      <img
        src="https://m.media-amazon.com/images/M/MV5BMTU1MTE2Mjk2OF5BMl5BanBnXkFtZTcwMTUzNjYzNA@@._V1_UX140_CR0,0,140,209_AL_.jpg"
        alt=""
      />
    </>
  );
};
export default Menu;
