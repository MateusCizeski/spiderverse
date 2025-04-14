import HeroesList from "@/components/HeroesList";
import { IHeroData } from "@/interfaces/heroes";
import styles from "./page.module.scss";
async function getHeroes(): Promise<IHeroData[]> {
  const res = await fetch(`${process.env.DOMAIN_ORIGIN}/heroes`);

  return res.json();
}

export default async function Home() {
  const heroes = await getHeroes();

  return (
    <main className={styles.main}>
      <HeroesList heroes={heroes} />;
    </main>
  );
}
