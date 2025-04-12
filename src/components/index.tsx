import { spidermanFont } from "@/fonts";
import { IHeroData } from "@/interfaces/heroes";
import styles from "./heroesList.module.scss";

interface IProps {
  heroes: IHeroData[];
}

export default function HeroesList({ heroes }: IProps) {
  return (
    <>
      <h1 className={`${spidermanFont.className} ${styles.title}`}>
        Personagens
      </h1>
      {heroes.map((hero) => (
        <p key={hero.id}>{hero.name}</p>
      ))}
    </>
  );
}
