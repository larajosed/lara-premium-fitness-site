"use client";
import { useState, useEffect } from "react";
import { Check, Star } from "lucide-react";
import styles from "../css/Plans.module.css";

export function Plans() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  const commonFeatures = [
    "Rutinas personalizadas",
    "Actualización semanal",
    "Soporte prioritario WhatsApp",
    "Seguimiento de progreso",
    "Guía de hábitos nutricionales", 
    "Videollamadas de seguimiento",
    "Ajustes ilimitados",
    "Acceso a comunidad online"
  ];

  const plans = [
    {
      name: "Plan Mensual",
      price: "100",
      monthlyEquivalent: "100", 
      period: "mes",
      description: "",
      highlighted: false
    },
    {
      name: "Plan Trimestral",
      price: "255",
      monthlyEquivalent: "85",
      period: "3 meses",
      description: "",
      highlighted: true,
      savings: "Ahorras 45€"
    },
    {
      name: "Plan Semestral",
      price: "450",
      monthlyEquivalent: "75",
      period: "6 meses",
      description: "",
      highlighted: false,
      savings: "Ahorras 150€"
    }
  ];

  return (
    <section id="planes" className={styles.plansSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Elige tu plan</h2>
          <p className={styles.subtitle}>
            Todos los planes incluyen asesoría completa y personalizada.
          </p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`${styles.card} ${plan.highlighted ? styles.cardHighlighted : styles.cardNormal}`}
            >
            {plan.highlighted && (
  <>
    <div className={styles.badge}>MÁS POPULAR</div>
    {isMounted && (
      <div className={styles.starWrapper}>
        <Star size={24} fill="#f8ab6b" stroke="#ffffffff" />
      </div>
    )}
  </>
)}

              <div className={styles.planHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDescription}>{plan.description}</p>
                
                <div className={styles.priceWrapper}>
                  <div className={styles.mainPrice}>
                    <span className={styles.price}>{plan.monthlyEquivalent}€</span>
                    <span className={styles.monthLabel}>/mes</span>
                  </div>
                  {plan.period !== "mes" && (
                    <span className={styles.totalPayment}>
                      Pago único de {plan.price}€
                    </span>
                  )}
                </div>
              </div>

              <ul className={styles.featureList}>
                {commonFeatures.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    {isMounted && (
                      <Check 
                        size={18} 
                        className={plan.highlighted ? styles.checkIconHighlighted : styles.checkIconNormal} 
                      />
                    )}
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.savings && (
                <div className={styles.savingsTag}>
                  {plan.savings}
                </div>
              )}

              <a href="https://wa.me/34693537526" target="_blank" className={styles.waLink}>
                <button className={`${styles.ctaButton} ${plan.highlighted ? styles.btnHighlighted : styles.btnNormal}`}>
                  Empezar mi cambio
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}