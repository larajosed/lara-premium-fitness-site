import { blackOps } from "../layout";
import styles from "../css/Hero.module.css";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.backgroundWrapper}>
        <img 
          src="/images/gym.png"
          alt="LARA Premium Fitness" 
          className={styles.image}
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.content}>
        <h1 className={`${blackOps.className} ${styles.title}`}>
          LARA
        </h1>
        <p className={`${blackOps.className} ${styles.subtitle}`}>
          PREMIUM FITNESS
        </p>
        <p className={styles.description}>
          Transforma tu cuerpo y mente con entrenamientos personalizados diseñados para alcanzar tus objetivos
        </p>
        <button className={styles.ctaButton}>
          Ver Planes
        </button>
      </div>
      <div className={styles.scrollIndicator}>
         <ChevronDown className="text-white" size={32} />
      </div>
    </section>
  );
}