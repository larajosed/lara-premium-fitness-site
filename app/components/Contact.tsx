"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Instagram, Mail } from "lucide-react";
import styles from "../css/Contact.module.css";

const TiktokIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export function Contact() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const contactMethods = [
    { icon: MessageCircle, name: "WhatsApp", handle: "+34 693 537 526", link: "https://wa.me/34693537526" },
    { icon: Mail, name: "Email", handle: "info@larapremiumfitness.com", link: "mailto:info@larapremiumfitness.com" },
  ];

  const socialMedia = [
    { icon: Instagram, name: "Instagram", handle: "@larapremiumfitness", link: "https://instagram.com/larapremiumfitness" },
    { icon: TiktokIcon, name: "TikTok", handle: "@larapremiumfitness", link: "https://www.tiktok.com/@larapremiumfitness" }
  ];

  return (
    <section id="contacto" className={styles.contactSection}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <h2 className={styles.title}>Contacto</h2>
          <p className={styles.subtitle}>Hablemos de tus objetivos</p>
        </div>

        <div className={styles.flexGrid}>
          {contactMethods.map((item, index) => (
            <a key={index} href={item.link} className={styles.cohesiveCard} target="_blank" rel="noopener noreferrer">
              <div className={styles.iconWrapperSmall}>
                {isMounted && <item.icon size={22} />}
              </div>
              <div className={styles.info}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.handle}>{item.handle}</p>
              </div>
            </a>
          ))}
        </div>

        <div className={styles.socialHeader}>
          <h3 className={styles.title}>Sígueme en Redes</h3>
        </div>
        <div className={styles.flexGrid}>
          {socialMedia.map((item, index) => (
            <a key={index} href={item.link} className={styles.cohesiveCard} target="_blank" rel="noopener noreferrer">
              <div className={styles.iconWrapperSmall}>
                {isMounted && <item.icon size={22} />}
              </div>
              <div className={styles.info}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.handle}>{item.handle}</p>
              </div>
            </a>
          ))}
        </div>

        <div className={styles.waButtonWrapper}>
          <a href="https://wa.me/34693537526" target="_blank" className={styles.waButton}>
            {isMounted && <MessageCircle size={20} />}
            Empezar Ahora
          </a>
        </div>
      </div>
    </section>
  );
}