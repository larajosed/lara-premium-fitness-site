"use client";
import { 
  Dumbbell, 
  Calendar, 
  Users, 
  Trophy, 
  Heart, 
  Smartphone 
} from "lucide-react";
import styles from "../css/Services.module.css";
import { useEffect, useState } from "react";

export function Services() {
const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  const services = [
    {
      icon: Dumbbell,
      title: "Entrenamientos Personalizados",
      description: "Rutinas adaptadas a tus objetivos y nivel de condición física"
    },
    {
      icon: Calendar,
      title: "Planificación Semanal",
      description: "Programas semanales estructurados para optimizar tus resultados"
    },
    {
      icon: Users,
      title: "Seguimiento Continuo",
      description: "Acompañamiento constante y ajustes según tu progreso"
    },
    {
      icon: Trophy,
      title: "Resultados Garantizados",
      description: "Metodología probada para alcanzar tus metas fitness"
    },
      {
  icon: Heart,
  title: "Apoyo Nutricional",
  description: "Orientación en hábitos saludables y tips de alimentación, desde una perspectiva de acompañamiento y no de consulta clínica."
    },
  {
  icon: Smartphone,
  title: "Entrenamiento 100% Online",
  description: "Entrenar donde quieras con la seguridad de tener mi apoyo y seguimiento constante."
}
  ];

  return (
    <section id="servicios" className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Servicios</h2>
          <p className={styles.description}>
            Programas completos diseñados para transformar tu cuerpo y estilo de vida
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
               {isMounted && <service.icon size={32} strokeWidth={2} />}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}