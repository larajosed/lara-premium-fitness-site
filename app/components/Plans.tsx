"use client";
import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import styles from "../css/Plans.module.css";

export function Plans() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const plans = [
    {
      name: "Plan Mensual",
      price: "100",
      period: "mes",
      features: ["Rutinas personalizadas", "Actualización semanal", "Soporte prioritario WhatsApp", "Seguimiento de progreso", "Plan nutricional detallado", "Videollamadas de seguimiento", "Ajustes ilimitados", "Acceso a comunidad online"],
      highlighted: false
    },
    {
      name: "Plan Trimestral",
      price: "250",
      period: "3 meses",
      features: ["Rutinas personalizadas", "Actualización semanal", "Soporte prioritario WhatsApp", "Seguimiento de progreso", "Plan nutricional detallado", "Videollamadas de seguimiento", "Ajustes ilimitados", "Acceso a comunidad online"],
      highlighted: true,
      savings: "Ahorra 50€"
    },
    {
      name: "Plan Semestral",
      price: "450",
      period: "6 meses",
      features: ["Rutinas personalizadas", "Actualización semanal", "Soporte prioritario WhatsApp", "Seguimiento de progreso", "Plan nutricional detallado", "Videollamadas de seguimiento", "Ajustes ilimitados", "Acceso a comunidad online"],
      highlighted: false,
      savings: "Ahorra 150€"
    }
  ];

  return (
    <section id="planes" className={styles.plansSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Planes</h2>
          <p className={styles.subtitle}>
            Elige el plan que mejor se adapte a tus necesidades y objetivos
          </p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`${styles.card} ${plan.highlighted ? styles.cardHighlighted : styles.cardNormal}`}
            >
              {plan.highlighted && (
                <div className={styles.badge}>MÁS POPULAR</div>
              )}

              <div className={styles.planHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.priceWrapper}>
                  <span className={styles.price}>{plan.price}€</span>
                  <span className={`${styles.period} ${plan.highlighted ? styles.periodHighlighted : styles.periodNormal}`}>
                    /{plan.period}
                  </span>
                </div>
              </div>

              <ul className={styles.featureList}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    {isMounted && (
                      <Check 
                        size={20} 
                        className={plan.highlighted ? styles.checkIconHighlighted : styles.checkIconNormal} 
                      />
                    )}
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.savings && (
                <div className={`${styles.savings} ${plan.highlighted ? styles.savingsHighlighted : styles.savingsNormal}`}>
                  {plan.savings}
                </div>
              )}

              

               <a href="https://wa.me/34693537526" target="_blank" className={styles.waButton}>
            <button className={`${styles.ctaButton} ${plan.highlighted ? styles.btnHighlighted : styles.btnNormal}`}>
                Comenzar Ahora
              </button>
          </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}