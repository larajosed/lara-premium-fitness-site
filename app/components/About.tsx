"use client";

import { useState, useEffect } from "react";
import { Award, Users, Clock } from "lucide-react";
import styles from "../css/About.module.css";

export function About() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const stats = [
    { icon: Award, value: "5+", label: "Años de Experiencia" },
    //{ icon: Users, value: "500+", label: "Clientes Satisfechos" },
    { icon: Clock, value: "24/7", label: "Disponibilidad" }
  ];

  return (
    <section id="sobre-mi" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.mainGrid}>
          <div className={styles.imageWrapper}>
            <img 
              src="./images/jdlm1.png"
              alt="Lara - Entrenador Personal"
              className={styles.mainImage}
            />
            <div className={styles.experienceBadge}>
              <p className={styles.badgeValue}>5+</p>
              <p className={styles.badgeLabel}>Años Transformando Vidas</p>
            </div>
          </div>

          <div>
            <h2 className={styles.title}>Sobre Mí</h2>
            <p className={styles.paragraph}>
              Soy José Daniel Lara, Profesor de Educación Física y Entrenador Personal certificado con varios años de experiencia 
              ayudando a personas como tú a alcanzar sus objetivos fitness y transformar sus vidas.
            </p>
            <p className={styles.paragraph}>En Lara Premium Fitness, creemos que cada persona tiene el potencial de alcanzar sus objetivos de fitness. Yo como entrenador certificado y especializado, estoy dedicado a proporcionarte la guía, motivación y apoyo que necesitas en cada paso de tu viaje.</p>
            <p className={styles.paragraph}>
              Mi pasión es crear programas personalizados que no solo te ayuden a verte 
              mejor, sino también a sentirte más fuerte, saludable y seguro de ti mismo.
            </p>

            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <div className={styles.iconBox}>
                    {isMounted && <stat.icon size={24} />}
                  </div>
                  <p className={styles.statValue}>{stat.value}</p>
                  <p className={styles.statLabel}>{stat.label}</p>
                </div>
              ))}
            </div>

            <div className={styles.quoteBox}>
              <p className={styles.quoteText}>
                "La transformación real comienza cuando decides comprometerte contigo mismo. 
                Estoy aquí para guiarte en cada paso del camino."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}