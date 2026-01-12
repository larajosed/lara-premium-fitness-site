"use client";

import { useState, useEffect } from "react";
import styles from "../css/Header.module.css";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Sobre Mí", href: "#sobre-mi" },
    { name: "Planes", href: "#planes" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Espaciador para equilibrar el layout (lado izquierdo vacío) */}
        <div className={styles.spacer}></div>

        {/* Navegación Centrada */}
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={styles.link}>
              {link.name}
            </a>
          ))}
        </nav>

        {/* Botón WhatsApp (lado derecho) */}
        <div className={styles.ctaWrapper}>
          <a 
            href="https://wa.me/34693537526" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.cta}
          >
            Empezar
          </a>
        </div>
      </div>
    </header>
  );
}