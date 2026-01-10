"use client";
import { useState, useEffect } from "react";
import styles from "../css/Footer.module.css";

export function Footer() {
  const [year, setYear] = useState<number | string>("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Usamos solo las clases del CSS modular */}
        <h1 className={styles.title}>LARA</h1>
        <p className={styles.subtitle}>PREMIUM FITNESS</p>
        
        <p className={styles.tagline}>Transforma tu cuerpo, transforma tu vida</p>
        <p className={styles.copyright}>
          © {year} Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}